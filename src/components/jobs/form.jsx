import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as fa from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

function JobForm() {

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
                                // onChange={(e) => {
                                //     setUserData({ ...userData, username: e.target.value })
                                // }} value={userData.username}
                                />
                            </div>
                            <div className='input-group-50'>
                                <label>Level</label>
                                <input type="text" className='input-field'
                                // onChange={(e) => {
                                //     setUserData({ ...userData, username: e.target.value })
                                // }} value={userData.username}
                                />
                            </div>
                        </div>
                        <div className="row gap-35">
                            <div className='input-group-50'>
                                <label>Salary</label>
                                <input type="text" className='input-field'
                                // onChange={(e) => {
                                //     setUserData({ ...userData, username: e.target.value })
                                // }} value={userData.username}
                                />
                            </div>
                        </div>
                        <div className="row gap-35">
                            <div className='input-group-50'>
                                <label>Location</label>
                                <input type="text" className='input-field'
                                // onChange={(e) => {
                                //     setUserData({ ...userData, username: e.target.value })
                                // }} value={userData.username}
                                />
                                <div>
                                    <input type="checkbox" name="check4" id="check4" />
                                    <label className="check-label" for="check4">Remote</label>
                                </div>
                            </div>
                        </div>
                        <div className="row gap-35">
                            <div className='input-group'>
                                <label>Description</label>
                                <textarea type="text" className='input-field textarea'
                                // onChange={(e) => {
                                //     setUserData({ ...userData, username: e.target.value })
                                // }} value={userData.username}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <span className="group-title">Responsabilities</span>
                    <div className="box-section">
                        <div className="radius-15 filled-container p-30">
                            <div className="input-section">
                                <div className="row gap-35">
                                    <div className='input-group'>
                                        <label>Description</label>
                                        <input type="text" className='input-field'
                                        // onChange={(e) => {
                                        //     setUserData({ ...userData, username: e.target.value })
                                        // }} value={userData.username}
                                        />
                                    </div>
                                </div>
                                <div className="row gap-35">
                                    <div className='input-group'>
                                        <label>Description</label>
                                        <input type="text" className='input-field'
                                        // onChange={(e) => {
                                        //     setUserData({ ...userData, username: e.target.value })
                                        // }} value={userData.username}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row centered">
                            <button className="button-flat blue text-white">
                                Add Responsability
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <span className="group-title">Compensations</span>
                    <div className="box-section">
                        <div className="radius-15 filled-container p-30">
                            <div className="input-section">
                                <div className="row gap-35">
                                    <div className='input-group'>
                                        <label>Description</label>
                                        <input type="text" className='input-field'
                                        // onChange={(e) => {
                                        //     setUserData({ ...userData, username: e.target.value })
                                        // }} value={userData.username}
                                        />
                                    </div>
                                </div>
                                <div className="row gap-35">
                                    <div className='input-group'>
                                        <label>Description</label>
                                        <input type="text" className='input-field'
                                        // onChange={(e) => {
                                        //     setUserData({ ...userData, username: e.target.value })
                                        // }} value={userData.username}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row centered">
                            <button className="button-flat blue text-white">
                                Add Compensation
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <span className="group-title">Requirements</span>
                        <div className="chip-section">
                            <div className="chip white text-dark border-thin">
                                <button className="chip-button">
                                    <FontAwesomeIcon icon={fa.faCircleXmark} />
                                </button>
                                <span>Javascript</span>
                            </div>
                            <div className="chip white text-dark border-thin">
                                <button className="chip-button">
                                    <FontAwesomeIcon icon={fa.faCircleXmark} />
                                </button>
                                <span>React</span>
                            </div>
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