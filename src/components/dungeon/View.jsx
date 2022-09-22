import React from 'react'
import * as fa from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import monsterImg from '../../monster.png';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import consts from '../../consts';
import { getArchetipes, getDifficultyLevels } from '../utilities/functions/knownLists';

function OpponentView() {

    const [opponent, setOpponent] = useState({})

    const [selectedWeapon, setSelectedWeapon] = useState({})
    const [selectedShield, setSelectedShield] = useState({})

    useEffect(() => {
        getRandomOpponent()
    }, [])

    function getRandomOpponent() {
        axios.get(`${consts.LOCAL_API}/opponents/random`)
            .then((resp) => {
                setOpponent(resp.data || {})
            })
            .catch((err) => {

            })
    }

    const levels = getDifficultyLevels()

    const personalities = getArchetipes()

    const colors = {
        EASY: "green",
        MEDIUM: "orange",
        HARD: "red"
    }

    return (
        <div className="content">
            <div className="col gap-25">
                <div className="list-container col gap-15">
                    <div className="row">
                        <span className="group-title">Your opponent is...</span>
                        <NavLink to="/opponent-form/new" className="add-button to-right">
                            <FontAwesomeIcon icon={fa.faPlus} />
                            <span>Add opponent</span>
                        </NavLink>
                    </div>
                    {opponent.id ?
                        <div className={`long-card highlight-left-${colors[opponent.level]}`}>
                            <div className={`long-card-title text-${colors[opponent.level]}`}>
                                <div className="row gap-25">
                                    {opponent.name || ""}
                                    <NavLink to="/opponents" className='card-value green'>
                                        View all
                                    </NavLink>
                                </div>
                            </div>
                            <div className="col gap-25">
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
                                <div className='long-card-content'>
                                    <div className="col justify-center">
                                        <span className='info-name'>About</span>
                                        <span>{opponent.about || ""}</span>
                                    </div>
                                </div>
                            </div>
                            <NavLink to={`/opponent-form/${opponent.id}`} className='round-button yellow long-card-br'>
                                <FontAwesomeIcon icon={fa.faPen} className="card-image" />
                            </NavLink>
                        </div>
                        :
                        <div className="row centered w-100">
                            <span className="text-gray no-select">
                                Missing...
                            </span>
                        </div>
                    }
                </div>
                <div className="list-container col gap-15">
                    <div className="row">
                        <span className="group-title">Choose your weapons!</span>
                    </div>
                    <div className='row gap-35 p-25'>
                        <div className="round-card w-50 gap-15 vertical-center">
                            <div className="card-icon dark  text-bigger">
                                <FontAwesomeIcon icon={fa.faHandBackFist} />
                            </div>
                            <div>
                                <div className='card-sm'>
                                    <FontAwesomeIcon className="card-image"
                                        icon={selectedWeapon.logo ? fa[selectedWeapon.logo] : fa.faHandBackFist}
                                        style={{ color: selectedWeapon.accentColor ? selectedWeapon.accentColor : '#4D4D4D' }} />
                                </div>
                            </div>
                            <div className="col w-100">
                                <div className='card-description-sm'>
                                    <p>
                                        {selectedWeapon.logo ? fa[selectedWeapon.logo] : 'Weapon'}
                                    </p>
                                </div>
                                <div className='w-100'>
                                    <span>
                                        <b className="text-big">Level {selectedWeapon.checkpoints?.filter(c => c.submissionCompleted)?.length || '0'}</b>
                                        <span className="text-small text-light">/{selectedWeapon.checkpoints?.length || '0'}</span>
                                    </span>
                                    <div className="progress-bar w-100 maxw-200">
                                        {selectedWeapon.checkpoints ?
                                            selectedWeapon.checkpoints.sort((a, b) => {
                                                if (a.submissionCompleted > b.submissionCompleted) {
                                                    return -1;
                                                }
                                                if (a.submissionCompleted < b.submissionCompleted) {
                                                    return 1;
                                                }
                                                return 0;
                                            }).map((checkpoint, index) => (
                                                <div className={`progress-bar-item ${checkpoint.submissionCompleted ? ' blue ' : ' lightgray '}`} />
                                            ))
                                            : <div className={`progress-bar-item lightgray`} />}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="round-card w-50 gap-15 vertical-center">
                            <div className="card-icon dark text-bigger">
                                <FontAwesomeIcon icon={fa.faShield} />
                            </div>
                            <div>
                                <div className='card-sm'>
                                    <FontAwesomeIcon className="card-image"
                                        icon={selectedShield.logo ? fa[selectedShield.logo] : fa.faShield}
                                        style={{ color: selectedShield.accentColor ? selectedShield.accentColor : '#4D4D4D' }} />
                                </div>
                            </div>
                            <div className="col w-100">
                                <div className='card-description-sm'>
                                    <p>
                                        Shield
                                    </p>
                                </div>
                                <div>
                                    <span>
                                        <b className="text-big">Level {selectedShield.checkpoints?.filter(c => c.submissionCompleted)?.length || '0'}</b>
                                        <span className="text-small text-light">/{selectedShield.checkpoints?.length || '0'}</span>
                                    </span>
                                    <div className="progress-bar">
                                        {selectedShield.checkpoints ?
                                            selectedShield.checkpoints.sort((a, b) => {
                                                if (a.submissionCompleted > b.submissionCompleted) {
                                                    return -1;
                                                }
                                                if (a.submissionCompleted < b.submissionCompleted) {
                                                    return 1;
                                                }
                                                return 0;
                                            }).map((checkpoint, index) => (
                                                <div className={`progress-bar-item ${checkpoint.submissionCompleted ? ' blue ' : ' lightgray '}`} />
                                            ))
                                            : <div className={`progress-bar-item lightgray`} />}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row centered">
                        <NavLink to="/battle" className='button-flat red text-white'>
                            Enter Battle!
                        </NavLink>
                    </div>
                </div>
                <div className="list-container col gap-15">
                    <div className="row gap-25">
                        <span className="group-title">Battle reports</span>
                    </div>
                    <div className="col gap-35 p-25">
                        <div className='row gap-35'>
                            <div className="round-card w-50 gap-15">
                                <FontAwesomeIcon icon={fa.faClock} className="text-bigger" />
                                <span className="card-title">
                                    Average answer time
                                </span>
                                <span className='card-value purple'>45s</span>
                            </div>
                            <div className="round-card w-50 gap-15">
                                <FontAwesomeIcon icon={fa.faStar} className="text-bigger" />
                                <span className="card-title">
                                    Average score
                                </span>
                                <span className='card-value green'>80%</span>
                            </div>
                        </div>
                        <div className='row gap-35'>
                            <div className="round-card w-50 gap-15">
                                <FontAwesomeIcon icon={fa.faHandBackFist} className="text-bigger" />
                                <span className="card-title">
                                    Successfull attacks
                                </span>
                                <span className='card-value red'>85%</span>
                            </div>
                            <div className="round-card w-50 gap-15">
                                <FontAwesomeIcon icon={fa.faShield} className="text-bigger" />
                                <span className="card-title">
                                    Successfull defences
                                </span>
                                <span className='card-value blue'>60%</span>
                            </div>
                        </div>
                        <div className='row gap-35'>
                            <div className="round-card w-50 gap-15">
                                <FontAwesomeIcon icon={fa.faCircleCheck} className="text-bigger" />
                                <span className="card-title">
                                    Completed fights
                                </span>
                                <span className='card-value orange'>107</span>
                            </div>
                            <div className="w-50" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OpponentView;
