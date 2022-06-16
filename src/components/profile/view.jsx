import { faCartShopping, faGun, faListCheck, faShield } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import logo from '../../logo.svg';

function ProfileView() {

    return (
        <div className='content'>
            <div className='profile-info'>
                <img src={logo} alt="" className='profile-picture' style={{ borderColor: '#188EB9' }} />
                <div className='align-center'>
                    <p className='profile-info-name' >Fellipe Corominas Pereira</p>
                    <p className='profile-info-position' >Front-End Developer • Junior</p>
                    <div className='profile-info-extra'>
                    </div>
                </div>
            </div>
            <div className='profile-call-to-action'>
                <button className='profile-apply-button'>
                    <p>
                        I am available!
                    </p>
                </button>
            </div>
            <div className="list-container col gap-15">
                <div className="row gap-25">
                    <b className='group-title'>
                        Inventory
                    </b>
                    <span className='card-value green'>
                        View all
                    </span>
                </div>
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
            <div className='profile-section'>
                <p className="group-title">
                    Work Experience
                </p>
                <div className="form-card">

                </div>
            </div>
            <div className='profile-section'>
                <p className="group-title">
                    Education
                </p>
                <div className="form-card">

                </div>
            </div>
            <div className='profile-section'>
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
            <div className='profile-card-preview'>
            </div>
        </div>
    );
}

export default ProfileView;