import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import logo from '../../logo.svg';
import { NavLink, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import consts from '../../consts';
import { getJobLevels } from '../utilities/functions/knownLists';

function JobView() {

    const { id } = useParams()
    const userId = JSON.parse(localStorage.getItem('user')).id

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

    const jobLevels = getJobLevels()

    const [appliedToJob, setAppliedToJob] = useState(undefined)

    function removeApplication() {
        axios.delete(`${consts.LOCAL_API}/job-applications?userId=${userId}&jobId=${id}`)
            .then(() => {
                setAppliedToJob(false)
            })
    }

    function applyTojob() {
        axios.post(`${consts.LOCAL_API}/job-applications`, {
            jobId: id,
            userId: userId
        })
            .then(() => {
                setAppliedToJob(true)
            })
    }

    useEffect(() => {
        if (id) {
            axios.get(`${consts.LOCAL_API}/jobs/${id}`)
                .then((response) => {
                    setJob(response.data || {})
                })
                .catch(() => {

                })
        }

        axios.get(`${consts.LOCAL_API}/job-applications/${userId}?jobId=${id}`)
            .then((resp) => {
                setAppliedToJob(resp.data)
            })
            .catch(() => {

            })

    }, [])

    return (
        <div className="content">
            <div className="col gap-15">
                <div className="list-container col gap-15">
                    <div className='long-card' style={{ boxShadow: `7px 0px 0px ${job.category?.accentColor || '#CCC'} inset` }}>
                        <div className='long-card-title' style={{ color: job.category?.accentColor }}>
                            {`${job.title || ""} • ${jobLevels[job.level] || ""}`}
                        </div>
                        <div className='long-card-content gap-15'>
                            <img src={logo} alt="" className='company-logo' />
                            <div className='align-center'>
                                <p className='info-name'>{job.companyName}</p>
                                {!job.hideSalary && job.salary ?
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
                        <NavLink to={`/job-form/${job.id}`} className='round-button yellow long-card-br'>
                            <FontAwesomeIcon icon={faPen} className="card-image" />
                        </NavLink>
                    </div>
                </div>
                <div className="row centered gap-25">
                    {/* 
                        TODO
                        JOB APPLICATIONS LIST
                    */}
                    {appliedToJob !== undefined && (appliedToJob ?
                        <button className="button-flat red text-white"
                            onClick={() => {
                                removeApplication()
                            }}>Remove job application</button>
                        : <button className="button-flat green text-white"
                            onClick={() => {
                                applyTojob()
                            }}>Apply for Job</button>)
                    }
                    {/* <button className="button-flat blue text-white">Applications</button> */}
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
