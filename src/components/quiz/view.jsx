import React from 'react';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../logo.svg';

function ProfileView() {

    return (
        <div className='content'>
            <div className="list-container">
                <div className='long-card highlight-left-green'>
                    <div className='long-card-title text-green'>
                        <div className="row gap-25">
                            Coding Goblin
                        </div>
                    </div>
                    <div className="col gap-25">
                        <div className="row">
                            <div className='long-card-content gap-25'>
                                <img src={logo} alt="" className='round-img highlight-green' />
                                <div className="col justify-center">
                                    <div className='row gap-15'>
                                        <span className='info-name'>Personality</span>
                                        <span className='my-auto'>Practical</span>
                                    </div>
                                    <div className='row gap-15'>
                                        <span className='info-name'>Difficulty</span>
                                        <span className='my-auto'>Easy</span>
                                    </div>
                                </div>
                            </div>
                            <div className='row gap-10 justify-right vertical-bottom'>
                                <FontAwesomeIcon className="text-red" icon={faHeart} size="2x" />
                                <FontAwesomeIcon className="text-red" icon={faHeart} size="2x" />
                                <FontAwesomeIcon className="text-red" icon={faHeart} size="2x" />
                                <FontAwesomeIcon className="text-red" icon={faHeart} size="2x" />
                                <FontAwesomeIcon className="text-dark" icon={faHeart} size="2x" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileView;