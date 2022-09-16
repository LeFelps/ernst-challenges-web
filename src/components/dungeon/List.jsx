import { faPen, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import consts from '../../consts';
import monsterImg from '../../monster.png';

function OpponentList() {

    const navigate = useNavigate()

    const [opponents, setOpponents] = useState([])

    const levels = {
        EASY: "Easy",
        MEDIUM: "Medium",
        HARD: "Hard"
    }

    const personalities = {
        PRACTICAL: "Practical",
        THEORETICAL: "Theorical",
        SPECIALIST: "Specialist"
    }

    const colors = {
        EASY: "green",
        MEDIUM: "orange",
        HARD: "red"
    }

    useEffect(() => {
        axios.get(`${consts.LOCAL_API}/opponents`)
            .then((resp) => {
                setOpponents(resp.data || [])
            })
            .catch((err) => {
            })
    }, [])

    return (
        <div className='content'>
            <div className="content-description">
                <p className='text-title'>
                    Opponents
                </p>
                <p className='text-secondary'>
                    The complete list of opponents you can face
                </p>
            </div>
            {opponents.map((opponent) => (
                <div className='list-container col gap-25'>
                    <div className={`long-card highlight-left-${colors[opponent.level]}`}>
                        <div className={`long-card-title text-${colors[opponent.level]}`}>
                            {opponent.name}
                        </div>
                        <div className="col gap-25">
                            <div className='long-card-content gap-25'>
                                <img src={monsterImg} alt="" className={`round-img highlight-${colors[opponent.level]}`} />
                                <div className="col justify-center">
                                    <div className='row gap-15'>
                                        <span className='info-name'>Personality</span>
                                        <span className='my-auto'>{personalities[opponent.personality]}</span>
                                    </div>
                                    <div className='row gap-15'>
                                        <span className='info-name'>Difficulty</span>
                                        <span className='my-auto'>{levels[opponent.level]}</span>
                                    </div>
                                </div>
                            </div>
                            <div className='long-card-content'>
                                <div className="col justify-center">
                                    <span className='info-name'>About</span>
                                    <span>{opponent.about}</span>
                                </div>
                            </div>
                        </div>
                        <button type="button" className='round-button yellow long-card-br'
                            onClick={() => {
                                navigate(`/opponent-form/${opponent.id}`)
                            }}>
                            <FontAwesomeIcon icon={faPen} className="card-image" />
                        </button>
                    </div>
                </div>
            ))}
            <div className="list-container">
                <div className="row centered w-100">
                    <NavLink to="/opponent-form/new" className="add-button text-thick">
                        <FontAwesomeIcon icon={faPlus} />
                        <span>Add Opponent</span>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default OpponentList;
