import React from 'react'
import { faCartShopping, faCircleCheck, faClock, faHandBackFist, faListCheck, faPen, faPlus, faShield, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import logo from '../../logo.svg';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import consts from '../../consts';

function OpponentView() {

    const [opponent, setOpponent] = useState({})

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

    const levels = {
        EASY: "Easy",
        MEDIUM: "Medium",
        HARD: "Hard"
    }

    const personalities = {
        PRACTICAL: "Practical",
        THEORICAL: "Theoretical",
        SPECIALIST: "Specialist"
    }

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
                            <FontAwesomeIcon icon={faPlus} />
                            <span>Add opponent</span>
                        </NavLink>
                    </div>
                    <div className={`long-card highlight-left-${colors[opponent.level]}`}>
                        <div className={`long-card-title text-${colors[opponent.level]}`}>
                            <div className="row gap-25">
                                {opponent.name}
                                <NavLink to="/opponents" className='card-value green'>
                                    View all
                                </NavLink>
                            </div>
                        </div>
                        <div className="col gap-25">
                            <div className='long-card-content gap-25'>
                                <img src={logo} alt="" className={`round-img highlight-${colors[opponent.level]}`} />
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
                        <NavLink to={`/opponent-form/${opponent.id}`} className='round-button yellow long-card-br'>
                            <FontAwesomeIcon icon={faPen} className="card-image" />
                        </NavLink>
                    </div>
                </div>
                <div className="list-container col gap-15">
                    <div className="row">
                        <span className="group-title">Choose tour weapons!</span>
                    </div>
                    <div className='row gap-35 p-25'>
                        <div className="round-card w-50 gap-15 vertical-center">
                            <div className="card-icon dark  text-bigger">
                                <FontAwesomeIcon icon={faHandBackFist} />
                            </div>
                            <div>
                                <div className='card-sm'>
                                    <FontAwesomeIcon icon={faCartShopping} className="card-image" style={{ color: '#188EB9' }} />
                                </div>
                            </div>
                            <div className="col w-100">
                                <div className='card-description-sm'>
                                    <p>
                                        Shopping Cart
                                    </p>
                                </div>
                                <div className='w-100'>
                                    <span>
                                        <b className="text-big">Level 3</b>
                                        <span className="text-small text-light">/4</span>
                                    </span>
                                    <div className="progress-bar w-100 maxw-200">
                                        <div className="progress-bar-item blue" />
                                        <div className="progress-bar-item blue" />
                                        <div className="progress-bar-item blue" />
                                        <div className="progress-bar-item lightgray" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="round-card w-50 gap-15 vertical-center">
                            <div className="card-icon dark text-bigger">
                                <FontAwesomeIcon icon={faShield} />
                            </div>
                            <div>
                                <div className='card-sm'>
                                    <FontAwesomeIcon icon={faListCheck} className="card-image" style={{ color: '#188EB9' }} />
                                </div>
                            </div>
                            <div className="col w-100">
                                <div className='card-description-sm'>
                                    <p>
                                        To-Do List
                                    </p>
                                </div>
                                <div>
                                    <span>
                                        <b className="text-big">Level 2</b>
                                        <span className="text-small text-light">/6</span>
                                    </span>
                                    <div className="progress-bar">
                                        <div className="progress-bar-item blue" />
                                        <div className="progress-bar-item blue" />
                                        <div className="progress-bar-item lightgray" />
                                        <div className="progress-bar-item lightgray" />
                                        <div className="progress-bar-item lightgray" />
                                        <div className="progress-bar-item lightgray" />
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
                                <FontAwesomeIcon icon={faClock} className="text-bigger" />
                                <span className="card-title">
                                    Average answer time
                                </span>
                                <span className='card-value purple'>45s</span>
                            </div>
                            <div className="round-card w-50 gap-15">
                                <FontAwesomeIcon icon={faStar} className="text-bigger" />
                                <span className="card-title">
                                    Average score
                                </span>
                                <span className='card-value green'>80%</span>
                            </div>
                        </div>
                        <div className='row gap-35'>
                            <div className="round-card w-50 gap-15">
                                <FontAwesomeIcon icon={faHandBackFist} className="text-bigger" />
                                <span className="card-title">
                                    Successfull attacks
                                </span>
                                <span className='card-value red'>85%</span>
                            </div>
                            <div className="round-card w-50 gap-15">
                                <FontAwesomeIcon icon={faShield} className="text-bigger" />
                                <span className="card-title">
                                    Successfull defences
                                </span>
                                <span className='card-value blue'>60%</span>
                            </div>
                        </div>
                        <div className='row gap-35'>
                            <div className="round-card w-50 gap-15">
                                <FontAwesomeIcon icon={faCircleCheck} className="text-bigger" />
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