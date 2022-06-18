import { faCartShopping, faGun, faListCheck, faPen, faPlus, faShield } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import logo from '../../logo.svg';

function ProfileView() {

    return (
        <div className='content'>
            <div className="col gap-35">
                <div className='list-container'>
                    <div className='long-card highlight-left-blue'>
                        <div className='long-card-title text-blue'>
                            Front-end developer • Junior
                        </div>
                        <div className='long-card-content gap-15'>
                            <img src={logo} alt="" className='round-img highlight-blue' />
                            <div className='align-center'>
                                <p className='info-name'>Fellipe Corominas Pereira</p>
                                <p className='info-value'>corominas.fellipe@hotmail.com</p>
                                <p className='info-value'>+55 (11) 98886-7001</p>
                            </div>
                        </div>
                        <a to="/job-form" className='edit-button long-card-br'>
                            <FontAwesomeIcon icon={faPen} className="card-image" />
                        </a>
                    </div>
                </div>
                <div className="list-container col">
                    <div className="row gap-25">
                        <b className='group-title text-center'>
                            Inventory Highlights
                        </b>
                        <span className='card-value green'>
                            View all
                        </span>
                    </div>
                    <div className="p-25">
                        <div className='row gap-35'>
                            <div className="row w-50 gap-15">
                                <div>
                                    <div className='card-sm'>
                                        <FontAwesomeIcon icon={faCartShopping} className="card-image" style={{ color: '#188EB9' }} />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className='card-description-sm'>
                                        <p>
                                            Shopping Cart
                                        </p>
                                    </div>
                                    <div>
                                        <span>
                                            <b className="text-big">Level 3</b>
                                            <span className="text-small text-light">/4</span>
                                        </span>
                                        <div className="progress-bar">
                                            <div className="progress-bar-item blue" />
                                            <div className="progress-bar-item blue" />
                                            <div className="progress-bar-item blue" />
                                            <div className="progress-bar-item lightgray" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row w-50 gap-15">
                                <div>
                                    <div className='card-sm'>
                                        <FontAwesomeIcon icon={faListCheck} className="card-image" style={{ color: '#188EB9' }} />
                                    </div>
                                </div>
                                <div className="col">
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
                    </div>
                </div>
                <div className='list-container col gap-15'>
                    <div className="row">
                        <span className="group-title">Work Experience</span>
                        <button className="add-button to-right">
                            <FontAwesomeIcon icon={faPlus} />
                            <span>Add</span>
                        </button>
                    </div>
                    <div className='col gap-15'>
                        <div className="form-card p-15">
                            <div className='row gap-15'>
                                <img src={logo} alt="" className='company-logo' />
                                <div className='col gap-15'>
                                    <span className='info-name'>Junior, Front-end developer</span>
                                    <div className='col'>
                                        <span className='info-name'>Allergisa</span>
                                        <span className='info-value'>2021 - Current</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-card p-15">
                            <div className='row gap-15'>
                                <img src={logo} alt="" className='company-logo' />
                                <div className='col gap-15'>
                                    <span className='info-name'>Internship, Front-end developer</span>
                                    <div className='col'>
                                        <span className='info-name'>Opsfactor</span>
                                        <span className='info-value'>2020 - 2020</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='list-container col gap-15'>
                    <div className="row">
                        <span className="group-title">Education</span>
                        <button className="add-button to-right">
                            <FontAwesomeIcon icon={faPlus} />
                            <span>Add</span>
                        </button>
                    </div>
                    <div className='col gap-15'>
                        <div className="form-card p-15">
                            <div className='row gap-15'>
                                <img src={logo} alt="" className='company-logo' />
                                <div className='col gap-15'>
                                    <span className='info-name'>Fiap</span>
                                    <div className='col'>
                                        <span className='info-name'>Information Systems, Bachelors</span>
                                        <span className='info-value'>2019 - 2022</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='list-container col gap-15'>
                    <div className="row">
                        <span className="group-title">Languages</span>
                        <button className="add-button to-right">
                            <FontAwesomeIcon icon={faPlus} />
                            <span>Add</span>
                        </button>
                    </div>
                    <div className="col gap-25 p-25">
                        <div className='row gap-25'>
                            <div className="round-card w-50 centered">
                                <span className="card-title">
                                    Fluent in English
                                </span>
                            </div>
                            <div className="round-card w-50 centered">
                                <span className="card-title">
                                    Basic in German
                                </span>
                            </div>
                        </div>
                        <div className='row gap-25'>
                            <div className="round-card w-50 centered">
                                <span className="card-title">
                                    Native in Portuguese
                                </span>
                            </div>
                            <div className='w-50'></div>
                        </div>
                    </div>
                </div>
                <div className='list-container'>
                    <p className="group-title">
                        Your skills
                    </p>
                    <div className="skills">
                        <div className="profile-skill">
                            <input type="checkbox" name="check1" id="check1" />
                            <label for="check1">Javascript</label>
                        </div>
                        <div className="profile-skill">
                            <input type="checkbox" name="check2" id="check2" />
                            <label for="check2">ReactNative</label>
                        </div>
                        <div className="profile-skill">
                            <input type="checkbox" name="check3" id="check3" />
                            <label for="check3">IOS</label>
                        </div>
                        <div className="profile-skill">
                            <input type="checkbox" name="check4" id="check4" />
                            <label for="check4">CSS</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileView;