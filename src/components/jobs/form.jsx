import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as fa from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

function JobForm() {

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

    const jobLevels = {
        INTERNSHIP: "Internship",
        ENTRY: "Entry",
        MID: "Mid",
        SENIOR: "Senior"
    }

    return (
        <div className="content">
            <div className="form-container">
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
                            <button className="add-button">
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
            </div>
        </div>
    );
}

export default JobForm;