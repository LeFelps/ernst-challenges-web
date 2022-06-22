import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import logo from '../../logo.svg';
import { NavLink } from 'react-router-dom';

function JobList() {

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
            <div className='list-container'>
                <NavLink to="/job">
                    <div className='long-card highlight-left-blue'>
                        <div className='long-card-title text-blue'>
                            Front-end developer • Junior
                        </div>
                        <div className='long-card-content gap-15'>
                            <img src={logo} alt="" className='company-logo' />
                            <div className='align-center'>
                                <p className='info-name'>Ernest Young</p>
                                <p className='info-value'>R$ 4000,00</p>
                                <div className='info-extra'>
                                    <FontAwesomeIcon className='icon-margin-right' icon={faPlusCircle} color='#188EB9' />
                                    <p>
                                        Benefícios
                                    </p>
                                </div>
                            </div>
                        </div>
                        <NavLink to="/job-form" className='edit-button long-card-br'>
                            <FontAwesomeIcon icon={faPen} className="card-image" />
                        </NavLink>
                    </div>
                </NavLink>
            </div>
            <div className='list-container'>
                <div className='long-card highlight-left-pink'>
                    <div className='long-card-title text-pink'>
                        Back-end developer • Sênior
                    </div>
                    <div className='long-card-content gap-15'>
                        <img src={logo} alt="" className='company-logo' />
                        <div className='align-center'>
                            <p className='info-name'>Ernest Young</p>
                            <p className='info-value'>R$ 14000,00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JobList;