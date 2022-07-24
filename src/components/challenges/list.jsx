import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as fa from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import consts from '../../consts';

function ChallengeList() {

    const [categoryList, setCategoryList] = useState([])

    // useEffect(() => {
    //     axios.get(`${consts.LOCAL_API}/challenges/categories`)
    //         .then((response) => {
    //             setCategoryList(response.data || [])
    //         })
    //         .catch(() => {

    //         })
    // }, [])

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

            {/* {categoryList.map((category, index) => (
                <div className='list-container'>
                    <p className="group-title" style={{ color: category.accentColor }}>
                        Front-end development
                    </p>
                    <div className='card-group'>
                        {category.challenges?.map((challenge, index) => (
                            <NavLink to="/challenge">
                                <div className='card'>
                                    <FontAwesomeIcon icon={fa[challenge.icon]} className="card-image" style={{ color: category.accentColor }} />
                                    <div className='card-description'>
                                        <p>
                                            {challenge.title}
                                        </p>
                                        <p>
                                            {challenge.brief}
                                        </p>
                                    </div>
                                    <NavLink to="/challenge-form" className='round-button yellow card-br'>
                                        <FontAwesomeIcon icon={fa.faPen} className="card-image" />
                                    </NavLink>
                                </div>
                            </NavLink>
                        ))}
                        <NavLink to="/challenge-form">
                            <div className='card-add'>
                                <FontAwesomeIcon icon={fa.faPlus} className="card-add-image text-white" />
                            </div>
                        </NavLink>
                    </div>
                </div>
            ))} */}
            <div className='list-container'>
                <p className="group-title" style={{ color: '#188EB9' }}>
                    Front-end development
                </p>
                <div className='card-group'>
                    <NavLink to="/challenge">
                        <div className='card'>
                            <FontAwesomeIcon icon={fa.faCartShopping} className="card-image" style={{ color: '#188EB9' }} />
                            <div className='card-description'>
                                <p>
                                    Shopping list
                                </p>
                                <p>
                                    Build a working shopping list
                                </p>
                            </div>
                            <NavLink to="/challenge-form" className='round-button yellow card-br'>
                                <FontAwesomeIcon icon={fa.faPen} className="card-image" />
                            </NavLink>
                        </div>
                    </NavLink>
                    <div className='card'>
                        <FontAwesomeIcon icon={fa.faMessage} className="card-image" style={{ color: '#188EB9' }} />
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
                        <FontAwesomeIcon icon={fa.faListCheck} className="card-image" style={{ color: '#188EB9' }} />
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
                        <FontAwesomeIcon icon={fa.faBug} className="card-image" style={{ color: '#188EB9' }} />
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
                        <FontAwesomeIcon icon={fa.faChartPie} className="card-image" style={{ color: '#188EB9' }} />
                        <div className='card-description'>
                            <p>
                                Graphs
                            </p>
                            <p>
                                Manipulate and graph collections of data
                            </p>
                        </div>
                    </div>
                    <NavLink to="/challenge-form">
                        <div className='card-add'>
                            <FontAwesomeIcon icon={fa.faPlus} className="card-add-image text-white" />
                        </div>
                    </NavLink>
                </div>
            </div>
            <div className='list-container'>
                <p className="group-title" style={{ color: '#E05263' }}>
                    Back-end development
                </p>
                <div className='card-group'>
                    <div className='card'>
                        <FontAwesomeIcon icon={fa.faUser} className="card-image" style={{ color: '#E05263' }} />
                    </div>
                    <div className='card'>
                        <FontAwesomeIcon icon={fa.faLock} className="card-image" style={{ color: '#E05263' }} />
                    </div>
                    <div className='card'>
                        <FontAwesomeIcon icon={fa.faBug} className="card-image" style={{ color: '#E05263' }} />
                    </div>
                    <div className='card'>
                        <FontAwesomeIcon icon={fa.faKey} className="card-image" style={{ color: '#E05263' }} />
                    </div>
                    <div className='card'>
                        <FontAwesomeIcon icon={fa.faFingerprint} className="card-image" style={{ color: '#E05263' }} />
                    </div>
                    <div className='card'>
                        <FontAwesomeIcon icon={fa.faDatabase} className="card-image" style={{ color: '#E05263' }} />
                    </div>
                    <div className='card'>
                        <FontAwesomeIcon icon={fa.faServer} className="card-image" style={{ color: '#E05263' }} />
                    </div>
                </div>
            </div>
            <div className='list-container'>
                <p className="group-title" style={{ color: '#37AE49' }}>
                    Infrastructure
                </p>
                <div className='card-group'>
                    <div className='card'>
                        <FontAwesomeIcon icon={fa.faNetworkWired} className="card-image" style={{ color: '#37AE49' }} />
                    </div>
                    <div className='card'>
                        <FontAwesomeIcon icon={fa.faEthernet} className="card-image" style={{ color: '#37AE49' }} />
                    </div>
                    <div className='card'>
                        <FontAwesomeIcon icon={fa.faGlobe} className="card-image" style={{ color: '#37AE49' }} />
                    </div>
                    <div className='card'>
                        <FontAwesomeIcon icon={fa.faServer} className="card-image" style={{ color: '#37AE49' }} />
                    </div>
                    <div className='card'>
                        <FontAwesomeIcon icon={fa.faDatabase} className="card-image" style={{ color: '#37AE49' }} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChallengeList;