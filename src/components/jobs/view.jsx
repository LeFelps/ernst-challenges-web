import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import logo from '../../logo.svg';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

function JobView() {

    const [job, setJob] = useState({
        title: null,
        level: null,
        location: null,
        remote: false,
        description: null,
        salary: null,
        displaySalary: false,
        responsabilities: [],
        compensations: [],
        requirements: []
    })

    const jobLevels = {
        INTERNSHIP: "Internship",
        ENTRY: "Entry",
        MID: "Mid",
        SENIOR: "Senior"
    }

    useEffect(() => {
        setJob({
            businessName: "Ernest Young",
            title: "Front-end Developer",
            level: "ENTRY",
            location: "São Paulo",
            remote: true,
            description: "",
            salary: "R$ 4000,00",
            displaySalary: true,
            responsabilities: [],
            compensations: [],
            requirements: []
        })
    }, [])

    return (
        <div className="content">
            <div className="col gap-15">
                <div className="list-container col gap-15">
                    <div className='long-card highlight-left-blue'>
                        <div className='long-card-title text-blue'>
                            {`${job.title || ""} • ${jobLevels[job.level] || ""}`}
                        </div>
                        <div className='long-card-content gap-15'>
                            <img src={logo} alt="" className='company-logo' />
                            <div className='align-center'>
                                <p className='info-name'>{job.businessName}</p>
                                {job.displaySalary && job.salary ?
                                    <p className='info-value'>{job.salary}</p>
                                    : null}
                                {job.compensations?.length > 0 &&
                                    <div className='info-extra'>
                                        <FontAwesomeIcon className='icon-margin-right' icon={faPlusCircle} color='#188EB9' />
                                        <p>
                                            Benefits
                                        </p>
                                    </div>
                                }
                            </div>
                        </div>
                        <NavLink to="/job-form" className='round-button yellow long-card-br'>
                            <FontAwesomeIcon icon={faPen} className="card-image" />
                        </NavLink>
                    </div>
                    <div className="row centered gap-25">
                        {/* 
                                TODO
                                JOB APPLICATION FUNCTIONALITY
                                JOB APPLICATIONS LIST
                         */}
                        <button className="button-flat green text-white">Apply for Job</button>
                        <button className="button-flat blue text-white">Applications</button>
                    </div>
                </div>
                <div className='list-container'>
                    <b className='group-title text-center'>
                        {job.title}
                    </b>
                    <ul>
                        <li>{`${jobLevels[job.level]} Level` || ""}</li>
                        {job.remote ?
                            <li>{`Remote (${job.location})`}</li>
                            :
                            <li>{job.location}</li>
                        }
                    </ul>
                </div>
                <div className='list-container'>
                    <b className='group-title text-center'>
                        Description
                    </b>
                    <p>
                        {job.description}
                    </p>
                </div>
                {job.responsabilities?.length > 0 &&
                    <div className='list-container'>
                        <b className='group-title text-center'>
                            What will you do?
                        </b>
                        <ul>
                            {job.responsabilities.map((responsability, index) => (
                                <li>{responsability}</li>
                            ))}
                        </ul>
                    </div>
                }
                {job.compensations?.length > 0 &&
                    <div className='list-container'>
                        <b className='group-title text-center'>
                            Compensation
                        </b>
                        <ul>
                            {job.compensations.map((compensation, index) => (
                                <li>{compensation}</li>
                            ))}
                        </ul>
                    </div>
                }
                {job.requirements?.length > 0 &&
                    <div className='list-container'>
                        <b className='group-title text-center'>
                            Requirements
                        </b>
                        <ul>
                            {job.requirements.map((requirement, index) => (
                                <li>{requirement}</li>
                            ))}
                        </ul>
                    </div>
                }
                <div className='list-container'>
                    <div className="row justify-right gap-25">
                        <NavLink to="/jobs" className='button-rounded gray text-white'>
                            Return
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JobView;