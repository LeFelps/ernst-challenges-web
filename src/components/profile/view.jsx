import { faCartShopping, faHandBackFist, faListCheck, faPen, faPlus, faPlusCircle, faShield, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../logo.svg';
import profileLogo from '../../profile.svg';
import Modal from '../utilities/modals/Modal';

function ProfileView({ removeUser, ...props }) {

    const [user, setUser] = useState({
        name: "",
        email: "",
        title: "",
        level: "",
        phone: "",
        public: false,
        inventory: [],
        applications: [],
        experience: [],
        education: [],
        languages: [],
        skills: [],
    })

    const jobLevels = {
        INTERNSHIP: "Internship",
        ENTRY: "Entry",
        MID: "Mid",
        SENIOR: "Senior"
    }

    const [showLanguageModal, setShowLanguageModal] = useState(false)

    function closeLanguageModal() {
        setShowLanguageModal(false)
        setEditLanguage({ ...initialLanguage })
    }

    const initialLanguage = {
        index: null,
        level: "",
        language: ""
    }

    const [editLanguage, setEditLanguage] = useState({ ...initialLanguage })

    useEffect(() => {
        setUser({
            name: "Fellipe Corominas Pereira",
            email: "fellipe.corominas@hotmail.com",
            title: "Front-end Developer",
            level: "ENTRY",
            phone: "+55 (11) 98886-7001",
            public: false,
            inventory: [{

            }],
            applications: [{

            }],
            experience: [{

            }],
            education: [{

            }],
            languages: [{

            }],
            skills: [{

            }],
        })
    }, [])

    const navigate = useNavigate()

    function logout() {
        localStorage.removeItem('user')
        removeUser()
        navigate('/login')
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
                    <div className='long-card highlight-left-blue'>
                        <div className='long-card-title text-blue'>
                            {`${user.title} • ${jobLevels[user.level]}`}
                        </div>
                        <div className='long-card-content gap-15'>
                            <img src={profileLogo} alt="" className='round-img highlight-blue' />
                            <div className='align-center'>
                                <p className='info-name'>{user.name}</p>
                                <p className='info-value'>{user.email}</p>
                                <p className='info-value'>{user.phone}</p>
                            </div>
                        </div>
                        <a to="/job-form" className='round-button yellow long-card-br'>
                            <FontAwesomeIcon icon={faPen} className="card-image" />
                        </a>
                    </div>
                    <div className="row centered">
                        {user.public ?
                            <div className="button-flat green text-white">
                                Public Profile
                            </div>
                            :
                            <div className="button-flat red text-white">
                                Private Profile
                            </div>
                        }
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
                        <span className='card-value green pointer'>
                            View all
                        </span>
                    </div>
                    <div className='list-container col gap-15'>
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
                        </div>
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
                <div className='list-container col gap-15'>
                    <div className="row">
                        <span className="group-title">Work Experience</span>
                        <button className="add-button to-right">
                            <FontAwesomeIcon icon={faPlus} />
                            <span>Add</span>
                        </button>
                    </div>
                    <div className='col gap-15'>
                        <div className="form-card p-15">
                            <div className='row gap-15'>
                                <img src={logo} alt="" className='company-logo' />
                                <div className='col gap-15'>
                                    <span className='info-name'>Junior, Front-end developer</span>
                                    <div className='col'>
                                        <b>Allergisa</b>
                                        <span className='info-value'>2021 - Current</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-card p-15">
                            <div className='row gap-15'>
                                <img src={logo} alt="" className='company-logo' />
                                <div className='col gap-15'>
                                    <span className='info-name'>Internship, Front-end developer</span>
                                    <div className='col'>
                                        <b >Opsfactor</b>
                                        <span className='info-value'>2020 - 2020</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='list-container col gap-15'>
                    <div className="row">
                        <span className="group-title">Education</span>
                        <button className="add-button to-right">
                            <FontAwesomeIcon icon={faPlus} />
                            <span>Add</span>
                        </button>
                    </div>
                    <div className='col gap-15'>
                        <div className="form-card p-15">
                            <div className='row gap-15'>
                                <img src={logo} alt="" className='company-logo' />
                                <div className='col gap-15'>
                                    <span className='info-name'>Fiap</span>
                                    <div className='col'>
                                        <b>Information Systems, Bachelors</b>
                                        <span className='info-value'>2019 - 2022</span>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                    <div className="col gap-25 p-25">
                        <div className='row gap-25'>
                            <div className="round-card w-50 centered">
                                <span className="card-title">
                                    Fluent in English
                                </span>
                            </div>
                            <div className="round-card w-50 centered">
                                <span className="card-title">
                                    Basic in German
                                </span>
                            </div>
                        </div>
                        <div className='row gap-25'>
                            <div className="round-card w-50 centered">
                                <span className="card-title">
                                    Native in Portuguese
                                </span>
                            </div>
                            <div className='w-50'></div>
                        </div>
                    </div>
                </div>
                <div className='list-container'>
                    <p className="group-title">
                        Your skills
                    </p>
                    <div className="skills">
                        <div className="profile-skill">
                            <input type="checkbox" name="check1" id="check1" />
                            <label className="check-label" for="check1">Javascript</label>
                        </div>
                        <div className="profile-skill">
                            <input type="checkbox" name="check2" id="check2" />
                            <label className="check-label" for="check2">ReactNative</label>
                        </div>
                        <div className="profile-skill">
                            <input type="checkbox" name="check3" id="check3" />
                            <label className="check-label" for="check3">IOS</label>
                        </div>
                        <div className="profile-skill">
                            <input type="checkbox" name="check4" id="check4" />
                            <label className="check-label" for="check4">CSS</label>
                        </div>
                    </div>
                </div>
            </div>
            <Modal show={showLanguageModal} close={() => closeLanguageModal()} >
                <div className='col gap-25'>
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
                                    setEditLanguage(e.target.value)
                                }} value={editLanguage?.language || ""}
                            />
                        </div>
                    </div>
                    <div className="row justify-right vertical-center gap-25">
                        <button className="button-rounded green text-white" type="button" onClick={() => {
                            let langList = [...user.languages]
                            if (editLanguage.index) {
                                langList[editLanguage.index] = { ...editLanguage }
                            } else {
                                langList = [...langList, editLanguage]
                            }
                            setUser({ ...user, languages: langList })
                            setEditLanguage({ ...initialLanguage })
                        }}>
                            Add
                        </button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default ProfileView;