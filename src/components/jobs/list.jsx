import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import logo from '../../logo.svg';
import { NavLink } from 'react-router-dom';
import axios from 'axios'
import consts from '../../consts';

function JobList() {

    const [jobList, setjobList] = useState([])

    useEffect(() => {
        axios.get(`${consts.LOCAL_API}/jobs`)
            .then((response) => {
                setjobList(response.data || [])
            })
            .catch(() => {
            })
    }, [])

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
            {jobList.map((job, index) => (
                <div className='list-container'>
                    <NavLink to="/job" className="nav-card">
                        <div className='long-card nav-card' stye={{ boxShadow: `7px 0px 0px ${job.category?.accentColor || '#CCC'} inset` }}>
                            <div className='long-card-title nav-card' style={{ color: job.category?.accentColor || '#CCC' }}>
                                {`${job.title || ''} • ${job.level || ''}`}
                            </div>
                            <div className='long-card-content gap-15'>
                                <img src={logo} alt="Business Logo" className='company-logo' />
                                <div className='align-center'>
                                    <p className='info-name'>{job.businessName}</p>
                                    <p className='info-value' hidden={job.displaySalary === false}>{job.salary}</p>
                                    {job.compensations?.length > 0 ?
                                        <div className='info-extra'>
                                            <FontAwesomeIcon className='icon-margin-right' icon={faPlusCircle} color={job.category?.accentColor} />
                                            <p>
                                                Benefícios
                                            </p>
                                        </div>
                                        : null}
                                </div>
                            </div>
                            <NavLink to="/job-form" className='round-button yellow long-card-br'>
                                <FontAwesomeIcon icon={faPen} className="card-image" />
                            </NavLink>
                        </div>
                    </NavLink>
                </div>
            ))}
        </div>
    );
}

export default JobList;