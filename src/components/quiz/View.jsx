import React, { useContext } from 'react';
import { faClock, faHandBackFist, faHeart, faShield } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import monsterImg from '../../monster.png';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import consts from '../../consts'
import BattleContext from '../utilities/battle/BattleProvider';
import { getArchetipes, getDifficultyLevels } from '../utilities/functions/knownLists';

function ProfileView(props) {

    const { battle } = useContext(BattleContext);

    const weaponId = battle.weaponId || 0
    const shieldId = battle.shieldId || 0
    const opponentId = battle.opponentId

    console.log(battle)

    const [question, setQuestion] = useState({})
    const [questionTime, setQuestionTime] = useState(undefined)

    const [opponent, setOpponent] = useState({})

    const levels = getDifficultyLevels()

    const personalities = getArchetipes()

    const colors = {
        EASY: "green",
        MEDIUM: "orange",
        HARD: "red"
    }

    const [actionType, setActionType] = useState('attacking')

    const [opponentLife, setOpponentLife] = useState(5)
    const [playerLife, setPlayerLife] = useState(3)

    useEffect(() => {
        axios.get(`${consts.LOCAL_API}/opponents/${opponentId || 'random'}`)
            .then(resp => {
                setOpponent(resp.data || {})
            })

        getNewQuestion()
    }, [])

    function answerTimeout() {
        if (!(actionType === 'defending' && playerLife - 1 === 0)) {
            setQuestionTime(undefined)
            getNewQuestion()
        }
        if (actionType === 'defending') setPlayerLife(playerLife - 1);
    }

    function getNewQuestion() {
        axios.get(`${consts.LOCAL_API}/questions/random?challengeId=${actionType === 'attacking' ? weaponId : shieldId}`)
            .then(resp => {
                setQuestion(resp.data || {})
                setActionType(actionType === 'attacking' ? 'defending' : 'attacking')
                setQuestionTime(15)
            })
            .catch(err => {

            })
    }

    function answerQuestion(answer) {
        axios.get(`${consts.LOCAL_API}/questions/is-answer/${answer.id}`)
            .then(resp => {
                if (resp.data === true && actionType === 'attacking') setOpponentLife(opponentLife - 1);
                if (resp.data === false && actionType !== 'attacking') setPlayerLife(playerLife - 1);

                setQuestionTime(undefined)
            })
            .catch(err => {
            })
            .then(() => {
                getNewQuestion()
            })
    }

    function renderHearts(remaining, full, size = 'small') {

        let hearts = []

        for (let index = 0; index < remaining; index++) {
            size === 'big' ?
                hearts.push(<FontAwesomeIcon className="text-red" icon={faHeart} size="2x" />)
                :
                hearts.push(<FontAwesomeIcon className="text-red text-huge" icon={faHeart} />)
        }

        for (let index = 0; index < full - remaining; index++) {
            size === 'big' ?
                hearts.push(<FontAwesomeIcon className="text-dark" icon={faHeart} size="2x" />)
                :
                hearts.push(<FontAwesomeIcon className="text-dark text-huge" icon={faHeart} />)
        }

        return (
            hearts.map(heart => {
                return heart
            })
        )

    }

    return (
        <div className='content'>
            <div className="list-container">
                <div className={`long-card highlight-left-${colors[opponent.level]}`}>
                    <div className={`long-card-title text-${colors[opponent.level]}`}>
                        <div className="row gap-25">
                            {opponent.name || ""}
                        </div>
                    </div>
                    <div className="col gap-25">
                        <div className="row">
                            <div className='long-card-content gap-25'>
                                <img src={monsterImg} alt="" className={`round-img highlight-${colors[opponent.level]}`} />
                                <div className="col justify-center">
                                    <div className='row gap-15'>
                                        <span className='info-name'>Personality</span>
                                        <span className='my-auto'>{personalities[opponent.personality] || ""}</span>
                                    </div>
                                    <div className='row gap-15'>
                                        <span className='info-name'>Difficulty</span>
                                        <span className='my-auto'>{levels[opponent.level] || ""}</span>
                                    </div>
                                </div>
                            </div>
                            <div className='row p-10 gap-10 to-right vertical-bottom'>
                                {renderHearts(opponentLife, 5, 'big')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {playerLife === 0 || opponentLife === 0 ?
                <>
                    <div className="list-container">
                        {playerLife === 0 ?
                            <div className="content-description">
                                <p className='text-title'>
                                    You Lost!
                                </p>
                                <p className='text-secondary'>
                                    Better luck next Time!
                                </p>
                            </div>
                            :
                            <div className="content-description">
                                <p className='text-title'>
                                    You Won!
                                </p>
                                <p className='text-secondary'>
                                    Great job!
                                </p>
                            </div>
                        }
                    </div>
                </>
                :
                <>
                    <div className="list-container">
                        <div className="col gap-25 p-25">
                            <div className="col gap-10">
                                <b className="text-big">
                                    Question
                                </b>
                                {/* <span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </span> */}
                            </div>
                            <div className="row gap-15 vertical-center">
                                <FontAwesomeIcon icon={faClock} />
                                <div className='w-100 progress-bar w-100 bg-lighter'>
                                    <style children={`
                            @keyframes shrink {
                                0%   { width: 1; }
                                100% { width: 0; }
                            }
                            `} />
                                    {questionTime ?
                                        <div className='progress-bar purple'
                                            onAnimationEnd={() => answerTimeout()}
                                            style={{
                                                animationDuration: `${15}s`,
                                                animationIterationCount: 1,
                                                animationName: `shrink`,
                                                animationFillMode: 'forwards',
                                                animationTimingFunction: 'linear'
                                            }}
                                        />
                                        : null}
                                </div>
                            </div>
                            <div className='radius-15 outlined-container'>
                                <div className='filled-container p-15 row gap-15 vertical-center w-100'>
                                    <div className="round-icon dark text-white text-big">
                                        <FontAwesomeIcon icon={actionType === "attacking" ? faHandBackFist : faShield} />
                                    </div>
                                    <b className="text-bigger">You are {actionType}!</b>
                                    <div className="to-right">
                                        <div className="row gap-5">
                                            {renderHearts(playerLife, 3, 'small')}
                                        </div>
                                    </div>
                                </div>
                                <div className='p-25'>
                                    <b className="text-bigger text-center">{question.title}</b>
                                </div>
                            </div>
                            <div className='row space-between wrap gap-5'>
                                {question?.answers?.map((answer) => (
                                    <div key={answer.id} className="button-rounded dark w-30 text-white"
                                        onClick={(e) => {
                                            answerQuestion(answer)
                                        }}>{answer.value}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                </>
            }
        </div>
    );
}

export default ProfileView;
