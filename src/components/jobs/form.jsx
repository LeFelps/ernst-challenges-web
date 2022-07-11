import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as fa from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import consts from '../../consts';
import axios from 'axios';
import { useEffect } from 'react';

function JobForm({ editJob, ...props }) {

    const [job, setJob] = useState({
        id: undefined,
        title: null,
        level: null,
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

    useEffect(() => {

    }, [editJob])

    return (
        <div className="content">
            <form className="form-container" onSubmit={(e) => {
                e.preventDefault()
                e.stopPropagation()

                let type = "post"

                if (job.id)
                    type = "put"

                axios[type](`${consts.LOCAL_API}/jobs`)
                    .then(() => {
                    })
                    .catch(() => {
                    })
                    .then(() => {
                    })
            }}>
                <div>
                    <div className="form-title">New Job</div>
                    <div className="input-section">
                        <div className="row gap-35">
                            <div className='input-group-50'>
                                <label>Title</label>
                                <input type="text" className='input-field'
                                    onChange={(e) => {
                                        setJob({ ...job, title: e.target.value })
                                    }} value={job.title || ""}
                                />
                            </div>
                            <div className='input-group-50'>
                                <label>Level</label>
                                <input type="text" className='input-field'
                                    onChange={(e) => {
                                        setJob({ ...job, level: e.target.value })
                                    }} value={job.level || ""}
                                />
                            </div>
                        </div>
                        <div className="row gap-35">
                            <div className='input-group-50'>
                                <label>Location</label>
                                <input type="text" className='input-field'
                                    onChange={(e) => {
                                        setJob({ ...job, location: e.target.value })
                                    }} value={job.location || ""}
                                />
                                <div>
                                    <input type="checkbox" name="remote" id="remote" onClick={() => {
                                        setJob({ ...job, remote: !job.remote })
                                    }} value={job.remote || false} />
                                    <label className="check-label" for="remote">Remote</label>
                                </div>
                            </div>
                        </div>
                        <div className="row gap-35">
                            <div className='input-group'>
                                <label>Description</label>
                                <textarea type="text" className='input-field textarea'
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
                        <div className="radius-15 filled-container p-30">
                            {job.responsabilities?.map((resp, index) => (
                                <div className="input-section">
                                    <div className="row gap-35">
                                        <div className='input-group'>
                                            <textarea type="text" className='input-field textarea'
                                                onChange={(e) => {
                                                    let respList = [...job.responsabilities]
                                                    respList[index] = e.target.value
                                                    setJob({ ...job, responsabilities: respList })
                                                }} value={resp || ""}
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="row centered">
                            <button className="button-flat blue text-white" type='button' onClick={() => {
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
                        <div className="radius-15 filled-container p-30">
                            {job.responsabilities?.map((comp, index) => (
                                <div className="input-section">
                                    <div className="row gap-35">
                                        <div className='input-group'>
                                            <textarea type="text" className='input-field textarea'
                                                onChange={(e) => {
                                                    let compList = [...job.responsabilities]
                                                    compList[index] = e.target.value
                                                    setJob({ ...job, responsabilities: compList })
                                                }} value={comp || ""}
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="row centered">
                            <button className="button-flat blue text-white" type='button' onClick={() => {
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
                                    <button className="chip-button" onClick={() => {
                                        let respList = [...job.responsabilities]
                                        respList.splice(index, 1)
                                        setJob({ ...job, responsabilities: respList })
                                    }}>
                                        <FontAwesomeIcon icon={fa.faCircleXmark} />
                                    </button>
                                    <span>{requirement}</span>
                                </div>
                            ))}
                            <button className="add-button" type='button' onClick={() => {
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
                    <button className="button-rounded green text-white ">
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