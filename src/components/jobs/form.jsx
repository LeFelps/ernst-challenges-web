import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as fa from '@fortawesome/free-solid-svg-icons';
import { NavLink, useParams } from 'react-router-dom';
import Modal from '../../components/utilities/modals/Modal.jsx'
import consts from '../../consts';
import axios from 'axios';
import { useEffect } from 'react';

function JobForm({ ...props }) {

    const { id } = useParams()

    const [job, setJob] = useState({
        id: undefined,
        companyName: null,
        title: null,
        level: null,
        salary: null,
        displaySalary: null,
        location: null,
        remote: false,
        description: null,
        responsabilities: [],
        compensations: [],
        requirements: []
    })

    const [loadingJob, setLoadingJob] = useState(false)

    const jobLevels = {
        INTERNSHIP: "Internship",
        ENTRY: "Entry",
        MID: "Mid",
        SENIOR: "Senior"
    }

    const [showRequirementModal, setShowRequirementModal] = useState(false)
    const [editRequirement, setEditRequirement] = useState("")

    const closeRequirementModal = () => {
        setShowRequirementModal(false)
        setEditRequirement("")
    }

    const [categories, setCategories] = useState([])

    useEffect(() => {

        axios.get(`${consts.LOCAL_API}/challenges/categories?min=true`)
            .then(res => {
                setCategories(res.data || [])
            })
            .catch(err => {
                console.error(err)
            })

        if (id) {
            setLoadingJob(true)
            axios.get(`${consts.LOCAL_API}/jobs/${id}`)
                .then((resp) => {
                    let job = resp.data
                    if (job.responsabilities) {
                        job.responsabilities = job.responsabilities.split(";")
                    }
                    if (job.compensations) {
                        job.compensations = job.compensations.split(";")
                    }
                    if (job.requirements) {
                        job.requirements = job.requirements.split(";")
                    }

                    setJob(job)
                })
                .catch(() => {

                })
                .then(() => {
                    setLoadingJob(false)
                })
        }
    }, [])

    return (
        <div className="content">
            <form className="form-container" onSubmit={(e) => {
                e.preventDefault()
                e.stopPropagation()

                let type = "post"

                if (job.id)
                    type = "put"

                setLoadingJob(true)
                axios[type](`${consts.LOCAL_API}/jobs`)
                    .then(() => {
                    })
                    .catch(() => {
                    })
                    .then(() => {
                        setLoadingJob(false)
                    })
            }}>
                <div>
                    <div className="form-title">New Job</div>
                    <div className="input-section">
                        <div className="row">
                            <div className='input-group-50'>
                                <label>Title</label>
                                <input type="text" className='input-field' required disabled={loadingJob}
                                    onChange={(e) => {
                                        setJob({ ...job, title: e.target.value })
                                    }} value={job.title || ""}
                                />
                            </div>
                            <div className='input-group-50'>
                                <label>Category</label>
                                <div className="row w-100 gap-15 vertical-center">
                                    <select className='input-field' required disabled={loadingJob}
                                        onChange={(e) => {
                                            setJob({ ...job, category: categories.find(c => c.id === parseInt(e.target.value)) })
                                        }} value={job.category?.id || ""}
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
                                <label>Level</label>
                                <select className='input-field' required
                                    onChange={(e) => {
                                        setJob({ ...job, level: e.target.value })
                                    }} value={job.level || ""}
                                >
                                    <option value="">Select...</option>
                                    {Object.keys(jobLevels).map((level) => (
                                        <option value={level}>{jobLevels[level]}</option>
                                    ))}
                                </select>
                            </div>
                            <div className='input-group-50'>
                                <label>Salary</label>
                                <input type="text" className='input-field' required disabled={loadingJob}
                                    onChange={(e) => {
                                        setJob({ ...job, salary: e.target.value })
                                    }} value={job.salary || ""}
                                />
                                <div>
                                    <input type="checkbox" name="displaySalary" id="displaySalary" required disabled={loadingJob}
                                        onClick={() => {
                                            setJob({ ...job, displaySalary: !job.displaySalary })
                                        }} value={job.remote || false} />
                                    <label className="check-label" for="displaySalary">Display Salary</label>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className='input-group-50'>
                                <label>Location</label>
                                <input type="text" className='input-field' required disabled={loadingJob}
                                    onChange={(e) => {
                                        setJob({ ...job, location: e.target.value })
                                    }} value={job.location || ""}
                                />
                                <div>
                                    <input type="checkbox" name="remote" id="remote" required disabled={loadingJob}
                                        onClick={() => {
                                            setJob({ ...job, remote: !job.remote })
                                        }} value={job.remote || false} />
                                    <label className="check-label" for="remote">Remote</label>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className='input-group'>
                                <label>Description</label>
                                <textarea type="text" className='input-field textarea' required disabled={loadingJob}
                                    onChange={(e) => {
                                        setJob({ ...job, description: e.target.value })
                                    }} value={job.description || ""}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col gap-10">
                    <span className="group-title">Responsabilities</span>
                    <div className="box-section">
                        <div className="radius-15 filled-container p-30 col gap-25">
                            {job.responsabilities?.length > 0 ?
                                job.responsabilities?.map((resp, index) => (
                                    <div className="input-section">
                                        <div className="row gap-35">
                                            <div className='input-group'>
                                                <div className="row w-100 vertical-center">
                                                    <label>Description</label>
                                                    <FontAwesomeIcon className='text-red text-big pointer to-right' icon={fa.faTrash} onClick={() => {
                                                        let respList = [...job.responsabilities]
                                                        respList.splice(index, 1)
                                                        setJob({ ...job, responsabilities: respList })
                                                    }} />
                                                </div>
                                                <textarea type="text" className='input-field textarea' required disabled={loadingJob}
                                                    onChange={(e) => {
                                                        let respList = [...job.responsabilities]
                                                        respList[index] = e.target.value
                                                        setJob({ ...job, responsabilities: respList })
                                                    }} value={resp || ""}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))
                                : <span className='text-bigger w-100 text-center text-gray no-select'>No responsability yet...</span>}
                        </div>
                        <div className="row centered">
                            <button className="button-flat blue text-white" type='button' required disabled={loadingJob}
                                onClick={() => {
                                    let respList = [...job.responsabilities]
                                    respList.push("")
                                    setJob({ ...job, responsabilities: respList })
                                }}>
                                Add Responsability
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col gap-10">
                    <span className="group-title">Compensations</span>
                    <div className="box-section">
                        <div className="radius-15 filled-container p-30 col gap-25">
                            {job.compensations?.length > 0 ?
                                job.compensations?.map((comp, index) => (
                                    <div className="input-section">
                                        <div className="row gap-35">
                                            <div className='input-group'>
                                                <div className="row w-100 vertical-center">
                                                    <label>Description</label>
                                                    <FontAwesomeIcon className='text-red text-big pointer to-right' icon={fa.faTrash} onClick={() => {
                                                        let compList = [...job.compensations]
                                                        compList.splice(index, 1)
                                                        setJob({ ...job, compensations: compList })
                                                    }} />
                                                </div>
                                                <textarea type="text" className='input-field textarea' required disabled={loadingJob}
                                                    onChange={(e) => {
                                                        let compList = [...job.compensations]
                                                        compList[index] = e.target.value
                                                        setJob({ ...job, compensations: compList })
                                                    }} value={comp || ""}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))
                                : <span className='text-bigger w-100 text-center text-gray no-select'>No compensation yet...</span>}
                        </div>
                        <div className="row centered">
                            <button className="button-flat blue text-white" type='button' required disabled={loadingJob}
                                onClick={() => {
                                    let compList = [...job.compensations]
                                    compList.push("")
                                    setJob({ ...job, compensations: compList })
                                }}>
                                Add Compensation
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <span className="group-title">Requirements</span>
                        <div className="chip-section">
                            {job.requirements?.map((requirement, index) => (
                                <div className="chip white text-dark border-thin">
                                    <button type='button' className="chip-button" required disabled={loadingJob}
                                        onClick={() => {
                                            let reqList = [...job.requirements]
                                            reqList.splice(index, 1)
                                            setJob({ ...job, requirements: reqList })
                                        }}>
                                        <FontAwesomeIcon icon={fa.faCircleXmark} />
                                    </button>
                                    <span>{requirement}</span>
                                </div>
                            ))}
                            <button className="add-button" type='button' required disabled={loadingJob}
                                onClick={() => {
                                    setEditRequirement("")
                                    setShowRequirementModal(true)
                                }}>
                                <FontAwesomeIcon icon={fa.faPlus} />
                                <span>Add Requirement</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row justify-right gap-25">
                    <NavLink to="/jobs" className='button-rounded gray text-white'>
                        Cancel
                    </NavLink>
                    <button className="button-rounded green text-white" required disabled={loadingJob}>
                        Save
                    </button>
                </div>
            </form>
            <Modal show={showRequirementModal} close={() => closeRequirementModal()} >
                <div className='col gap-25'>
                    <div className="row w-100">
                        <b className="text-huge">
                            Add Requirement
                        </b>
                        <div className="round-icon white text-light to-right text-bigger pointer"
                            onClick={() => closeRequirementModal()}
                        >
                            <FontAwesomeIcon icon={fa.faTimes} />
                        </div>
                    </div>
                    <div className="row">
                        <div className='input-group-50'>
                            <label>Name</label>
                            <input type="text" className='input-field' required
                                onChange={(e) => {
                                    setEditRequirement(e.target.value)
                                }} value={editRequirement || ""}
                            />
                        </div>
                    </div>
                    <div className="row justify-right vertical-center gap-25">
                        <button className="button-rounded green text-white" type="button" onClick={() => {
                            let reqList = [...job.requirements]
                            reqList = [...reqList, editRequirement]
                            setJob({ ...job, requirements: reqList })
                            setEditRequirement("")
                        }}>
                            Add
                        </button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default JobForm;