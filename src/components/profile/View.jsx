import { faCartShopping, faListCheck, faPen, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import consts from '../../consts';
import logo from '../../logo.svg';
import profileLogo from '../../profile.svg';
import { getJobLevels, getLanguageLevels } from '../utilities/functions/knownLists.js'

function ProfileView({ removeUser, ...props }) {

    const userId = JSON.parse(localStorage.getItem('user')).id

    const initialUser = {
        fullName: "",
        email: "",
        jobTitle: "",
        jobLevel: "",
        phone: "",
        public: false,
        inventory: [],
        applications: [],
        experience: [],
        education: [],
        languages: [],
        skills: [],
    }

    const [user, setUser] = useState({ ...initialUser })

    const jobLevels = getJobLevels()


    const [appliedJobs, setAppliedJobs] = useState([])
    const languageLevels = getLanguageLevels()

    useEffect(() => {
        axios.get(`${consts.LOCAL_API}/job-applications/${userId}`)
            .then((resp) => {
                setAppliedJobs(resp.data || [])
            })
            .catch(() => {

            })

        axios.get(`${consts.LOCAL_API}/users/${userId}`)
            .then((resp) => {
                setUser(resp.data || {})
            })
            .catch(() => {

            })
    }, [])

    const navigate = useNavigate()

    function logout() {
        localStorage.removeItem('user')
        removeUser()
        navigate('/login')
    }

    function changeUserVisibility() {
        axios.put(`${consts.LOCAL_API}/users/change-visibility`, user)
            .then(response => {
                setUser({
                    ...user,
                    public: response.data
                })
            }).catch(err => {
                console.error(err)
            })
    }

    return (
        <div className='content'>
            <div className="col gap-35">
                <div className='list-container col gap-25'>
                    <form onSubmit={(e) => {
                        e.preventDefault()
                        e.stopPropagation()

                        logout()
                    }} className='row centered'>
                        <button type='submit' className="pointer">
                            <b className="text-big text-gray">
                                Logout
                            </b>
                        </button>
                    </form>
                    <div className='long-card'
                        style={{ boxShadow: `7px 0px 0px ${user.category?.accentColor || '#CCC'} inset` }}>
                        <div className='long-card-title' style={{ color: user.category?.accentColor || "#CCC" }}>
                            {`${user.jobTitle || "[ Job Title ]"} ${user.jobTitle && jobLevels[user.jobLevel] ? "•" : "[ Job Position ]"} ${jobLevels[user.jobLevel] || ""}`}
                        </div>
                        <div className='long-card-content gap-15'>
                            <img src={profileLogo} alt="" className='round-img'
                                style={{ boxShadow: `0px 0px 0px 3px ${user.category?.accentColor || '#CCC'}` }} />
                            <div className='align-center'>
                                <p className='info-name'>{user.fullName || '[ Full Name ]'}</p>
                                <p className='info-value'>{user.email || '[ Email ]'}</p>
                                <p className='info-value'>{user.phone || '[ Phone ]'}</p>
                            </div>
                        </div>
                        <NavLink to={`/profile-form`} className='round-button yellow long-card-br'>
                            <FontAwesomeIcon icon={faPen} className="card-image" />
                        </NavLink>
                    </div>
                    <div className="row centered">
                        <button type='button' className={`button-flat ${user.public ? ' green ' : ' red '} text-white`}
                            onClick={() => changeUserVisibility()}>
                            {user.public ?
                                'Make Profile Public'
                                :
                                'Make Profile Private'
                            }
                        </button>
                    </div>
                </div>
                <div className="list-container col">
                    <div className="row gap-25">
                        <b className='group-title text-center'>
                            Inventory Highlights
                        </b>
                        <span className='card-value green pointer'>
                            View all
                        </span>
                    </div>
                    <div className="p-25">
                        <div className='row gap-35'>
                            <div className="row w-50 gap-15 vertical-center">
                                <div>
                                    <div className='card-sm'>
                                        <FontAwesomeIcon icon={faCartShopping} className="card-image" style={{ color: '#188EB9' }} />
                                    </div>
                                </div>
                                <div className="col w-100">
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
                                        <div className="progress-bar maxw-200">
                                            <div className="progress-bar-item blue" />
                                            <div className="progress-bar-item blue" />
                                            <div className="progress-bar-item blue" />
                                            <div className="progress-bar-item lightgray" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row w-50 gap-15 vertical-center">
                                <div>
                                    <div className='card-sm'>
                                        <FontAwesomeIcon icon={faListCheck} className="card-image" style={{ color: '#188EB9' }} />
                                    </div>
                                </div>
                                <div className="col w-100">
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
                                        <div className="progress-bar  maxw-200">
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
                </div>
                <div className="list-container col">
                    <div className="row gap-25">
                        <b className='group-title text-center'>
                            My Job Applications
                        </b>
                        {appliedJobs.length > 0 ?
                            <span className='card-value green pointer'>
                                View all
                            </span>
                            : <></>}
                    </div>
                    <div className='list-container col gap-15'>
                        {appliedJobs.length > 0 ?
                            appliedJobs.map((job) => (
                                <div className='long-card highlight-left-blue'>
                                    <div className='long-card-title text-blue'>
                                        {job.title} • {jobLevels[job.level]}
                                    </div>
                                    <div className='long-card-content gap-15'>
                                        <img src={logo} alt="" className='company-logo' />
                                        <div className='align-center'>
                                            <p className='info-name'>{job.companyName}</p>
                                            {!job.displaySalary ?
                                                <p className='info-value'>{job.salary}</p>
                                                : null}
                                            {job.compensations?.length > 0 ?
                                                <div className='info-extra'>
                                                    <FontAwesomeIcon className='icon-margin-right' icon={faPlusCircle} color='#188EB9' />
                                                    <p>
                                                        Benefits
                                                    </p>
                                                </div>
                                                : null}
                                        </div>
                                    </div>
                                </div>
                            ))
                            : <>
                                <div className="row centered w-100">
                                    <span className="text-gray no-select">
                                        No Current Job Applications
                                    </span>
                                </div>
                            </>}
                    </div>
                </div>
                <div className='list-container col gap-15'>
                    <div className="row">
                        <span className="group-title">Work Experience</span>
                    </div>
                    <div className='col gap-15'>
                        {user.experience?.length > 0 ?
                            user.experience?.map((experience, index) => (
                                <div key={index} className="form-card p-15">
                                    <div className='row gap-15'>
                                        <img src={logo} alt="" className='company-logo' />
                                        <div className='col gap-15'>
                                            <span className='info-name'>{jobLevels[experience.level]}, {experience.title}</span>
                                            <div className='col'>
                                                <b>{experience.companyName}</b>
                                                <span className='info-value'>
                                                    {
                                                        experience.timeStart.split("-")[0]
                                                    } - {
                                                        experience.current ? "Current" : experience.timeEnd.split("-")[0]
                                                    }
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                            : <>
                                <div className="row centered w-100">
                                    <span className="text-gray no-select">
                                        No Registered Experiences
                                    </span>
                                </div>
                            </>}
                    </div>
                </div>
                <div className='list-container col gap-15'>
                    <div className="row">
                        <span className="group-title">Education</span>
                    </div>
                    <div className='col gap-15'>
                        {user.education?.length > 0 ?
                            user.education.map((education, index) => (
                                <div className="form-card p-15">
                                    <div className='row gap-15'>
                                        <img src={logo} alt="" className='company-logo' />
                                        <div className='col gap-15'>
                                            <span className='info-name'>{education.name}</span>
                                            <div className='col'>
                                                <b>{education.course}, {education.type}</b>
                                                <span className='info-value'>
                                                    {
                                                        education.timeStart.split("-")[0]
                                                    } - {
                                                        education.current ? "Current" : education.timeEnd.split("-")[0]
                                                    }
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                            : <>
                                <div className="row centered w-100">
                                    <span className="text-gray no-select">
                                        No Registered Education
                                    </span>
                                </div>
                            </>}
                    </div>
                </div>
                <div className='list-container col gap-15'>
                    <div className="row">
                        <span className="group-title">Languages</span>
                    </div>
                    {user.languages?.length > 0 ?
                        <div className="col gap-25 p-15">
                            <div className='row wrap'>
                                {user.languages.map((language, index) => (
                                    <div className='w-50' key={index}>
                                        <div className="round-card centered">
                                            <span className="card-title">
                                                {`${language.language} (${languageLevels[language.level]})`}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        :
                        <div className="row centered w-100">
                            <span className="text-gray no-select">
                                No Registered Languages
                            </span>
                        </div>}
                </div>
                <div className='list-container'>
                    <div className="row">
                        <span className="group-title">Skills</span>
                    </div>
                    {user.skills?.length > 0 ?
                        <div className="chip-section">
                            {user.skills?.map((skill, index) => (
                                <div className="chip white text-dark border-thin" key={index}>
                                    <span>{skill}</span>
                                </div>
                            ))}
                        </div>
                        :
                        <div className="row centered w-100">
                            <span className="text-gray no-select">
                                No Registered Skills
                            </span>
                        </div>
                    }
                </div>
            </div>
        </div >
    );
}

export default ProfileView;
