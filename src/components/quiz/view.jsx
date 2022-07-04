import React from 'react';
import { faClock, faHandBackFist, faHeart } from '@fortawesome/free-solid-svg-icons';
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
            <div className="list-container">
                <div className="col gap-25 p-25">
                    <div className="col gap-10">
                        <b className="text-big">
                            Question
                        </b>
                        <span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </span>
                    </div>
                    <div className="row gap-15 vertical-center">
                        <FontAwesomeIcon icon={faClock} />
                        <div className='w-100 progress-bar w-100 purple'>

                        </div>
                    </div>
                    <div className='radius-15 outlined-container'>
                        <div className='filled-container p-15 row gap-15 vertical-center w-100'>
                            <div className="round-icon dark text-white text-big">
                                <FontAwesomeIcon icon={faHandBackFist} />
                            </div>
                            <b className="text-bigger">You are attacking!</b>
                            <div className="to-right">
                                <div className="row gap-5">
                                    <FontAwesomeIcon className="text-red text-huge" icon={faHeart} />
                                    <FontAwesomeIcon className="text-red text-huge" icon={faHeart} />
                                    <FontAwesomeIcon className="text-dark text-huge" icon={faHeart} />
                                </div>
                            </div>
                        </div>
                        <div className='p-25'>

                        </div>
                    </div>
                    <div className='row space-between wrap gap-5'>
                        <div className="button-rounded dark w-30 text-white">Answer 1</div>
                        <div className="button-rounded dark w-30 text-white">Answer 2</div>
                        <div className="button-rounded dark w-30 text-white">Answer 3</div>
                        <div className="button-rounded dark w-30 text-white">Answer 4</div>
                        <div className="button-rounded dark w-30 text-white">Answer 5</div>
                        <div className="button-rounded dark w-30 text-white">Answer 6</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileView;