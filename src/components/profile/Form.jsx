import { faCircleXmark, faPen, faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import consts from '../../consts';
import missingImg from '../../missing.png';
import profileLogo from '../../profile.svg';
import Modal from '../utilities/modals/Modal';
import { getDegreeTypes, getJobLevels, getLanguageLevels } from '../utilities/functions/knownLists.js'

function ProfileForm({ ...props }) {

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
    const [loadingUser, setLoadingUser] = useState(true)

    const jobLevels = getJobLevels()
    const languageLevels = getLanguageLevels()
    const degreeTypes = getDegreeTypes()

    const initialExperience = {
        index: null,
        level: "",
        title: "",
        companyName: "",
        timeStart: "",
        timeEnd: "",
        current: false
    }

    const initialEducation = {
        index: null,
        name: "",
        course: "",
        type: "",
        timeStart: "",
        timeEnd: ""
    }

    const initialLanguage = {
        index: null,
        level: "",
        language: ""
    }

    const initialSkill = {
        index: null,
        value: ""
    }

    const [editExperience, setEditExperience] = useState({ ...initialExperience })
    const [editEducation, setEditEducation] = useState({ ...initialEducation })
    const [editLanguage, setEditLanguage] = useState({ ...initialLanguage })
    const [editSkill, setEditSkill] = useState({ ...initialSkill })

    const [showExperienceModal, setShowExperienceModal] = useState(false)
    const [showEducationModal, setShowEducationModal] = useState(false)
    const [showLanguageModal, setShowLanguageModal] = useState(false)
    const [showSkillModal, setShowSkillModal] = useState(false)

    function closeExperienceModal() {
        setShowExperienceModal(false)
        setEditExperience({ ...initialExperience })
    }

    function closeEducationModal() {
        setShowEducationModal(false)
        setEditEducation({ ...initialEducation })
    }

    function closeLanguageModal() {
        setShowLanguageModal(false)
        setEditLanguage({ ...initialLanguage })
    }

    function closeSkillModal() {
        setShowSkillModal(false)
        setEditSkill({ ...initialSkill })
    }

    const [categories, setCategories] = useState([])

    useEffect(() => {
        axios.get(`${consts.LOCAL_API}/users/${userId}`)
            .then((resp) => {
                setUser(resp.data || {})
                setLoadingUser(false)
            })
            .catch(() => {

            })

        axios.get(`${consts.LOCAL_API}/categories?min=true`)
            .then((resp) => {
                setCategories(resp.data || [])
            })
            .catch(() => {

            })
    }, [])


    return (
        <div className='content'>
            <div className="col gap-35">
                <div className='list-container col gap-5'>
                    <b className='group-title text-center'>
                        Card Preview
                    </b>
                    <div className='long-card'
                        style={{ boxShadow: `7px 0px 0px ${user.category?.accentColor || '#CCC'} inset` }}>
                        <div className='long-card-title' style={{ color: user.category?.accentColor || "#CCC" }}>
                            {`${user.jobTitle || "[ job Title ]"} ${user.jobTitle && jobLevels[user.jobLevel] ? "•" : "[ Job Position ]"} ${jobLevels[user.jobLevel] || ""}`}
                        </div>
                        <div className='long-card-content gap-15'>
                            <img src={profileLogo} alt="" className='round-img'
                                style={{ boxShadow: `0px 0px 0px 3px ${user.category?.accentColor || '#CCC'}` }} />
                            <div className='align-center'>
                                <p className='info-name'>{user.fullName || "[ Full Name ]"}</p>
                                <p className='info-value'>{user.email || "[ Email ]"}</p>
                                <p className='info-value'>{user.phone || "[ Phone ]"}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <form className="form-container" onSubmit={(e) => {
                    e.preventDefault()
                    e.stopPropagation()

                    axios.put(`${consts.LOCAL_API}/users`, user)
                        .then(user => {

                        })
                        .catch(err => {

                        })

                }}>
                    <div className="input-section">
                        <div className="row">
                            <div className='input-group-50'>
                                <label>Full Name</label>
                                <input type="text" className='input-field' required disabled={loadingUser}
                                    onChange={(e) => {
                                        setUser({ ...user, fullName: e.target.value })
                                    }} value={user?.fullName || ""}
                                />
                            </div>
                            <div className='input-group-50'>
                                <label>Category</label>
                                <div className="row w-100 gap-15 vertical-center">
                                    <select className='input-field' required disabled={loadingUser}
                                        onChange={(e) => {
                                            setUser({ ...user, category: categories.find(c => c.id === parseInt(e.target.value)) })
                                        }} value={user.category?.id || ""}
                                    >
                                        <option value="">Select...</option>
                                        {categories.map((category, index) => (
                                            <option value={category.id} key={index}>{category.name}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className='input-group-50'>
                                <label>Job Title</label>
                                <input type="text" className='input-field' required disabled={loadingUser}
                                    onChange={(e) => {
                                        setUser({ ...user, jobTitle: e.target.value })
                                    }} value={user?.jobTitle || ""}
                                />
                            </div>
                            <div className='input-group-50'>
                                <label>Job Position</label>
                                <div className="row w-100 gap-15 vertical-center">
                                    <select className='input-field' required disabled={loadingUser}
                                        onChange={(e) => {
                                            setUser({ ...user, jobLevel: e.target.value })
                                        }} value={user.jobLevel || ""}
                                    >
                                        <option value="">Select...</option>
                                        {Object.keys(jobLevels).map((key, index) => (
                                            <option value={key} key={index}>{jobLevels[key]}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className='input-group-50'>
                                <label>Phone</label>
                                <input type="text" className='input-field' required disabled={loadingUser}
                                    onChange={(e) => {
                                        setUser({ ...user, phone: e.target.value })
                                    }} value={user?.phone || ""}
                                />
                            </div>
                            <div className='input-group-50'>
                                <label>Email</label>
                                <input type="text" className='input-field' required disabled={loadingUser}
                                    onChange={(e) => {
                                        setUser({ ...user, email: e.target.value })
                                    }} value={user?.email || ""}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='list-container col gap-15'>
                        <div className="row">
                            <span className="group-title">Work Experience</span>
                            <button className="add-button to-right"
                                onClick={() => {
                                    setShowExperienceModal(true)
                                }}>
                                <FontAwesomeIcon icon={faPlus} />
                                <span>Add</span>
                            </button>
                        </div>
                        <div className='col gap-15'>
                            {user.experience?.length > 0 ?
                                user.experience?.map((experience, index) => (
                                    <div key={index} className="form-card p-15">
                                        <div className='row gap-15'>
                                            <img src={missingImg} alt="" className='company-logo' />
                                            <div className='col gap-15'>
                                                <div className="row gap-10">
                                                    <span className='info-name'>{jobLevels[experience.level]}, {experience.title}</span>
                                                    <span className='card-value white pointer' onClick={() => {
                                                        setShowExperienceModal(true)
                                                        setEditExperience({ ...experience, index: index })
                                                    }}>
                                                        <FontAwesomeIcon className="text-dark" icon={faPen} />
                                                    </span>
                                                </div>
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
                            <button className="add-button to-right"
                                onClick={() => {
                                    setShowEducationModal(true)
                                }}>
                                <FontAwesomeIcon icon={faPlus} />
                                <span>Add</span>
                            </button>
                        </div>
                        <div className='col gap-15'>
                            {user.education?.length > 0 ?
                                user.education.map((education, index) => (
                                    <div className="form-card p-15">
                                        <div className='row gap-15'>
                                            <img src={missingImg} alt="" className='company-logo' />
                                            <div className='col gap-15'>
                                                <div className="row gap-10">
                                                    <span className='info-name'>{education.name}</span>
                                                    <span className='card-value white pointer' onClick={() => {
                                                        setShowEducationModal(true)
                                                        setEditEducation({ ...education, index: index })
                                                    }}>
                                                        <FontAwesomeIcon className="text-dark" icon={faPen} />
                                                    </span>
                                                </div>
                                                <div className='col'>
                                                    <b>{education.course}, {degreeTypes[education.type]}</b>
                                                    <span className='info-value'>
                                                        {
                                                            education.timeStart.split("-")[0]
                                                        } - {
                                                            education.timeEnd.split("-")[0]
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
                            <button className="add-button to-right"
                                onClick={() => {
                                    setShowLanguageModal(true)
                                }}>
                                <FontAwesomeIcon icon={faPlus} />
                                <span>Add</span>
                            </button>
                        </div>
                        {user.languages?.length > 0 ?
                            <div className="col gap-25 p-15">
                                <div className='row wrap'>
                                    {user.languages.map((language, index) => (
                                        <div className='w-50' key={index}>
                                            <div className="round-card centered">
                                                <div className="row gap-10">
                                                    <span className="card-title">
                                                        {`${language.language} (${languageLevels[language.level]})`}
                                                    </span>
                                                    <span className='card-value white pointer' onClick={() => {
                                                        setShowLanguageModal(true)
                                                        setEditLanguage({ ...language, index: index })
                                                    }}>
                                                        <FontAwesomeIcon className="text-dark" icon={faPen} />
                                                    </span>
                                                </div>
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
                            <button type="button" className="add-button to-right"
                                onClick={() => {
                                    setShowSkillModal(true)
                                }}>
                                <FontAwesomeIcon icon={faPlus} />
                                <span>Add</span>
                            </button>
                        </div>
                        {user.skills?.length > 0 ?
                            <div className="chip-section">
                                {user.skills?.map((skill, index) => (
                                    <div className="chip white text-dark border-thin" key={index}>
                                        <button type="button" className="chip-button" disabled={loadingUser}
                                            onClick={() => {
                                                let skillList = [...user.skills]
                                                skillList.splice(index, 1)
                                                setUser({ ...user, skills: skillList })
                                            }} >
                                            <FontAwesomeIcon icon={faCircleXmark} className="pointer" />
                                        </button>
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
                    <div className="list-container">
                        <div className="row justify-right gap-25">
                            <NavLink to="/profile" className='button-rounded gray text-white'>
                                Cancel
                            </NavLink>
                            <button type="submit" className="button-rounded green text-white" disabled={loadingUser}>
                                Save
                            </button>
                        </div>
                    </div>
                </form>
            </div >
            <Modal show={showExperienceModal} close={() => closeExperienceModal()}>
                <form className='col gap-25'
                    onSubmit={(e) => {
                        e.preventDefault()
                        e.stopPropagation()

                        let experienceList = [...(user.experience || [])]
                        if (editExperience.index !== null) {
                            experienceList[editExperience.index] = { ...editExperience }
                        } else {
                            experienceList = [...experienceList, editExperience]
                        }
                        setUser({ ...user, experience: experienceList })
                        setEditExperience({ ...initialExperience })
                        closeExperienceModal()
                    }}>
                    <div className="row w-100">
                        <b className="text-huge">
                            Add Experience
                        </b>
                        <div className="round-icon white text-light to-right text-bigger pointer"
                            onClick={() => closeExperienceModal()}
                        >
                            <FontAwesomeIcon icon={faTimes} />
                        </div>
                    </div>
                    <div className="row">
                        <div className='input-group-50'>
                            <label>Company Name</label>
                            <input type="text" className='input-field' required
                                onChange={(e) => {
                                    setEditExperience({ ...editExperience, companyName: e.target.value })
                                }} value={editExperience.companyName || ""}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className='input-group-50'>
                            <label>Title</label>
                            <input type="text" className='input-field' required
                                onChange={(e) => {
                                    setEditExperience({ ...editExperience, title: e.target.value })
                                }} value={editExperience.title || ""}
                            />
                        </div>
                        <div className='input-group-50'>
                            <label>Job Title</label>
                            <div className="row w-100 gap-15 vertical-center">
                                <select className='input-field' required disabled={loadingUser}
                                    onChange={(e) => {
                                        setEditExperience({ ...editExperience, level: e.target.value })
                                    }} value={editExperience.level || ""}
                                >
                                    <option value="">Select...</option>
                                    {Object.keys(jobLevels).map((key, index) => (
                                        <option value={key} key={index}>{jobLevels[key]}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className='input-group-50'>
                            <label>Start</label>
                            <input type="date" className='input-field' required
                                onChange={(e) => {
                                    setEditExperience({ ...editExperience, timeStart: e.target.value })
                                }} value={editExperience.timeStart || ""}
                            />
                        </div>
                        <div className='input-group-50'>
                            <label>End</label>
                            <input type="date" className='input-field'
                                required={!editExperience.current}
                                disabled={editExperience.current}
                                onChange={(e) => {
                                    setEditExperience({ ...editExperience, timeEnd: e.target.value })
                                }} value={editExperience.timeEnd || ""}
                            />
                            <div>
                                <input type="checkbox" name="current" id="current"
                                    onClick={() => {
                                        setEditExperience({ ...editExperience, current: !editExperience.current })
                                    }} value={editExperience.current || false} />
                                <label className="check-label" htmlFor="current">Current</label>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-right vertical-center gap-25">

                        <button className={`button-rounded ${editExperience.index !== null ? "yellow" : "green"} text-white`} type="submit">
                            {editExperience.index !== null ? "Edit" : "Add"}
                        </button>
                    </div>
                </form>
            </Modal>
            <Modal show={showEducationModal} close={() => closeEducationModal()}>
                <form className='col gap-25'
                    onSubmit={(e) => {
                        e.preventDefault()
                        e.stopPropagation()

                        let educationList = [...(user.education || [])]
                        if (editEducation.index !== null) {
                            educationList[editEducation.index] = { ...editEducation }
                        } else {
                            educationList = [...educationList, editEducation]
                        }
                        setUser({ ...user, education: educationList })
                        setEditEducation({ ...initialEducation })
                        closeEducationModal()

                    }}>
                    <div className="row w-100">
                        <b className="text-huge">
                            Add Education
                        </b>
                        <div className="round-icon white text-light to-right text-bigger pointer"
                            onClick={() => closeEducationModal()}
                        >
                            <FontAwesomeIcon icon={faTimes} />
                        </div>
                    </div>
                    <div className="row">
                        <div className='input-group-50'>
                            <label>Institution</label>
                            <input type="text" className='input-field' required
                                onChange={(e) => {
                                    setEditEducation({ ...editEducation, name: e.target.value })
                                }} value={editEducation.name || ""}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className='input-group-50'>
                            <label>Course</label>
                            <input type="text" className='input-field' required
                                onChange={(e) => {
                                    setEditEducation({ ...editEducation, course: e.target.value })
                                }} value={editEducation.course || ""}
                            />
                        </div>
                        <div className='input-group-50'>
                            <label>Degree Type</label>
                            <div className="row w-100 gap-15 vertical-center">
                                <select className='input-field' required disabled={loadingUser}
                                    onChange={(e) => {
                                        setEditEducation({ ...editEducation, type: e.target.value })
                                    }} value={editEducation.type || ""}
                                >
                                    <option value="">Select...</option>
                                    {Object.keys(degreeTypes).map((key, index) => (
                                        <option value={key} key={index}>{degreeTypes[key]}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className='input-group-50'>
                            <label>Start</label>
                            <input type="date" className='input-field' required
                                onChange={(e) => {
                                    setEditEducation({ ...editEducation, timeStart: e.target.value })
                                }} value={editEducation.timeStart || ""}
                            />
                        </div>
                        <div className='input-group-50'>
                            <label>End</label>
                            <input type="date" className='input-field' required
                                onChange={(e) => {
                                    setEditEducation({ ...editEducation, timeEnd: e.target.value })
                                }} value={editEducation.timeEnd || ""}
                            />
                        </div>
                    </div>
                    <div className="row justify-right vertical-center gap-25">
                        <button className={`button-rounded ${editEducation.index !== null ? "yellow" : "green"} text-white`} type="submit">
                            {editEducation.index !== null ? "Edit" : "Add"}
                        </button>
                    </div>
                </form>
            </Modal>
            <Modal show={showLanguageModal} close={() => closeLanguageModal()}>
                <form className='col gap-25'
                    onSubmit={(e) => {
                        e.preventDefault()
                        e.stopPropagation()

                        let langList = [...(user.languages || [])]
                        if (editLanguage.index !== null) {
                            langList[editLanguage.index] = { ...editLanguage }
                        } else {
                            langList = [...langList, editLanguage]
                        }
                        setUser({ ...user, languages: langList })
                        setEditLanguage({ ...initialLanguage })

                    }}>
                    <div className="row w-100">
                        <b className="text-huge">
                            Add Language
                        </b>
                        <div className="round-icon white text-light to-right text-bigger pointer"
                            onClick={() => closeLanguageModal()}
                        >
                            <FontAwesomeIcon icon={faTimes} />
                        </div>
                    </div>
                    <div className="row">
                        <div className='input-group-50'>
                            <label>Language</label>
                            <input type="text" className='input-field' required
                                onChange={(e) => {
                                    setEditLanguage({ ...editLanguage, language: e.target.value })
                                }} value={editLanguage.language || ""}
                            />
                        </div>
                        <div className='input-group-50'>
                            <label>Level</label>
                            <div className="row w-100 gap-15 vertical-center">
                                <select className='input-field' required disabled={loadingUser}
                                    onChange={(e) => {
                                        setEditLanguage({ ...editLanguage, level: e.target.value })
                                    }} value={editLanguage.level || ""}
                                >
                                    <option value="">Select...</option>
                                    {Object.keys(languageLevels).map((key, index) => (
                                        <option value={key} key={index}>{languageLevels[key]}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-right vertical-center gap-25">
                        <button className={`button-rounded ${editLanguage.index !== null ? "yellow" : "green"} text-white`} type="submit">
                            {editLanguage.index !== null ? "Edit" : "Add"}
                        </button>
                    </div>
                </form>
            </Modal>
            <Modal show={showSkillModal} close={() => closeSkillModal()} >
                <div className='col gap-25'>
                    <div className="row w-100">
                        <b className="text-huge">
                            Add Skill
                        </b>
                        <div className="round-icon white text-light to-right text-bigger pointer"
                            onClick={() => closeSkillModal()}
                        >
                            <FontAwesomeIcon icon={faTimes} />
                        </div>
                    </div>
                    <div className="row">
                        <div className='input-group-50'>
                            <label>Name</label>
                            <input type="text" className='input-field' required
                                onChange={(e) => {
                                    setEditSkill({ ...editSkill, value: e.target.value })
                                }} value={editSkill?.value || ""}
                            />
                        </div>
                    </div>
                    <div className="row justify-right vertical-center gap-25">
                        <button className="button-rounded green text-white" type="button" onClick={() => {
                            let skillList = [...(user.skills || [])]
                            if (editSkill.index) {
                                skillList[editSkill.index] = editSkill.value
                            } else {
                                skillList.push(editSkill.value)
                            }
                            setUser({ ...user, skills: skillList })
                            setEditSkill({ ...initialSkill })
                        }}>
                            Add
                        </button>
                    </div>
                </div>
            </Modal>
        </div >
    );
}

export default ProfileForm;
