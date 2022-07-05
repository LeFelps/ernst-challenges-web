import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBug, faCartShopping, faChartPie, faDatabase, faEthernet, faFingerprint, faGlobe, faKey, faListCheck, faLock, faMessage, faNetworkWired, faPen, faServer, faUser } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

function ChallengeList() {

    return (
        <div className='content'>
            <div className="content-description">
                <p className='text-title'>
                    Career challenges
                </p>
                <p className='text-secondary'>
                    Challenges that help you test and improve your technical skills
                </p>
            </div>
            <div className='list-container'>
                <p className="group-title" style={{ color: '#188EB9' }}>
                    Front-end development
                </p>
                <div className='card-group'>
                    <NavLink to="/challenge">
                        <div className='card'>
                            <FontAwesomeIcon icon={faCartShopping} className="card-image" style={{ color: '#188EB9' }} />
                            <div className='card-description'>
                                <p>
                                    Shopping list
                                </p>
                                <p>
                                    Build a working shopping list
                                </p>
                            </div>
                            <NavLink to="/challenge-form" className='round-button yellow card-br'>
                                <FontAwesomeIcon icon={faPen} className="card-image" />
                            </NavLink>
                        </div>
                    </NavLink>
                    <div className='card'>
                        <FontAwesomeIcon icon={faMessage} className="card-image" style={{ color: '#188EB9' }} />
                        <div className='card-description'>
                            <p>
                                Chat
                            </p>
                            <p>
                                Build a working chat
                            </p>
                        </div>
                    </div>
                    <div className='card'>
                        <FontAwesomeIcon icon={faListCheck} className="card-image" style={{ color: '#188EB9' }} />
                        <div className='card-description'>
                            <p>
                                To-Do List
                            </p>
                            <p>
                                Build a working To-Do List
                            </p>
                        </div>
                    </div>
                    <div className='card'>
                        <FontAwesomeIcon icon={faBug} className="card-image" style={{ color: '#188EB9' }} />
                        <div className='card-description'>
                            <p>
                                Bug Bounty
                            </p>
                            <p>
                                Find and fix some of the most common bugs
                            </p>
                        </div>
                    </div>
                    <div className='card'>
                        <FontAwesomeIcon icon={faChartPie} className="card-image" style={{ color: '#188EB9' }} />
                        <div className='card-description'>
                            <p>
                                Graphs
                            </p>
                            <p>
                                Manipulate and graph collections of data
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='list-container'>
                <p className="group-title" style={{ color: '#E05263' }}>
                    Back-end development
                </p>
                <div className='card-group'>
                    <div className='card'>
                        <FontAwesomeIcon icon={faUser} className="card-image" style={{ color: '#E05263' }} />
                    </div>
                    <div className='card'>
                        <FontAwesomeIcon icon={faLock} className="card-image" style={{ color: '#E05263' }} />
                    </div>
                    <div className='card'>
                        <FontAwesomeIcon icon={faBug} className="card-image" style={{ color: '#E05263' }} />
                    </div>
                    <div className='card'>
                        <FontAwesomeIcon icon={faKey} className="card-image" style={{ color: '#E05263' }} />
                    </div>
                    <div className='card'>
                        <FontAwesomeIcon icon={faFingerprint} className="card-image" style={{ color: '#E05263' }} />
                    </div>
                    <div className='card'>
                        <FontAwesomeIcon icon={faDatabase} className="card-image" style={{ color: '#E05263' }} />
                    </div>
                    <div className='card'>
                        <FontAwesomeIcon icon={faServer} className="card-image" style={{ color: '#E05263' }} />
                    </div>
                </div>
            </div>
            <div className='list-container'>
                <p className="group-title" style={{ color: '#37AE49' }}>
                    Infrastructure
                </p>
                <div className='card-group'>
                    <div className='card'>
                        <FontAwesomeIcon icon={faNetworkWired} className="card-image" style={{ color: '#37AE49' }} />
                    </div>
                    <div className='card'>
                        <FontAwesomeIcon icon={faEthernet} className="card-image" style={{ color: '#37AE49' }} />
                    </div>
                    <div className='card'>
                        <FontAwesomeIcon icon={faGlobe} className="card-image" style={{ color: '#37AE49' }} />
                    </div>
                    <div className='card'>
                        <FontAwesomeIcon icon={faServer} className="card-image" style={{ color: '#37AE49' }} />
                    </div>
                    <div className='card'>
                        <FontAwesomeIcon icon={faDatabase} className="card-image" style={{ color: '#37AE49' }} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChallengeList;