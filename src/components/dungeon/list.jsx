import { faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../logo.svg';



function OpponentList() {

    return (
        <div className='content'>
            <div className="content-description">
                <p className='text-title'>
                    Job Opportunities
                </p>
                <p className='text-secondary'>
                    Here you will find job openings that fit you an that you'll fit in
                </p>
            </div>
            <div className='list-container col gap-25'>
                <div className='long-card highlight-left-green'>
                    <div className='long-card-title text-green'>
                        Coding Goblin
                    </div>
                    <div className="col gap-25">
                        <div className='long-card-content gap-25'>
                            <img src={logo} alt="" className='round-img' />
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
                        <div className='long-card-content'>
                            <div className="col justify-center">
                                <span className='info-name'>About</span>
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nunc lacus, tristique ut dolor sit amet, scelerisque congue nisi. Sed et dui id augue porttitor pharetra nec non orci. Ut a egestas nibh, a aliquet nibh. Aenean eu ex viverra, convallis ligula in, consequat mauris. Morbi mollis viverra orci.</span>
                            </div>
                        </div>
                    </div>
                    <NavLink to="/opponent-form" className='round-button yellow long-card-br'>
                        <FontAwesomeIcon icon={faPen} className="card-image" />
                    </NavLink>
                </div>
                <div className='long-card highlight-left-orange'>
                    <div className='long-card-title text-orange'>
                        Giant Book Worm
                    </div>
                    <div className="col gap-25">
                        <div className='long-card-content gap-25'>
                            <img src={logo} alt="" className='round-img' />
                            <div className="col justify-center">
                                <div className='row gap-15'>
                                    <span className='info-name'>Personality</span>
                                    <span className='my-auto'>Theorical</span>
                                </div>
                                <div className='row gap-15'>
                                    <span className='info-name'>Difficulty</span>
                                    <span className='my-auto'>Medium</span>
                                </div>
                            </div>
                        </div>
                        <div className='long-card-content'>
                            <div className="col justify-center">
                                <span className='info-name'>About</span>
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nunc lacus, tristique ut dolor sit amet, scelerisque congue nisi. Sed et dui id augue porttitor pharetra nec non orci. Ut a egestas nibh, a aliquet nibh. Aenean eu ex viverra, convallis ligula in, consequat mauris. Morbi mollis viverra orci.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='long-card highlight-left-red'>
                    <div className='long-card-title text-red'>
                        The Wizard
                    </div>
                    <div className="col gap-25">
                        <div className='long-card-content gap-25'>
                            <img src={logo} alt="" className='round-img' />
                            <div className="col justify-center">
                                <div className='row gap-15'>
                                    <span className='info-name'>Personality</span>
                                    <span className='my-auto'>Specialist</span>
                                </div>
                                <div className='row gap-15'>
                                    <span className='info-name'>Difficulty</span>
                                    <span className='my-auto'>Hard</span>
                                </div>
                            </div>
                        </div>
                        <div className='long-card-content'>
                            <div className="col justify-center">
                                <span className='info-name'>About</span>
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nunc lacus, tristique ut dolor sit amet, scelerisque congue nisi. Sed et dui id augue porttitor pharetra nec non orci. Ut a egestas nibh, a aliquet nibh. Aenean eu ex viverra, convallis ligula in, consequat mauris. Morbi mollis viverra orci.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OpponentList;