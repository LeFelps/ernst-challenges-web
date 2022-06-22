import React from 'react';
import { NavLink } from 'react-router-dom';

function OpponentForm() {

    return (
        <div className="content">
            <div className="form-container">
                <div>
                    <div className="form-title">New Opponent</div>
                    <div className="input-section">
                        <div className="input-row">
                            <div className='input-group-50'>
                                <label htmlFor="username">Name</label>
                                <input type="text" className='input-field'
                                // onChange={(e) => {
                                //     setUserData({ ...userData, username: e.target.value })
                                // }} value={userData.username}
                                />
                            </div>
                        </div>
                        <div className="input-row">
                            <div className='input-group-50'>
                                <label htmlFor="username">Difficulty</label>
                                <select className='input-field'
                                // onChange={(e) => {
                                //     setUserData({ ...userData, username: e.target.value })
                                // }} value={userData.username}
                                >
                                    <option value="">Select...</option>
                                </select>
                            </div>
                            <div className='input-group-50'>
                                <label htmlFor="username">Personality</label>
                                <select className='input-field'
                                // onChange={(e) => {
                                //     setUserData({ ...userData, username: e.target.value })
                                // }} value={userData.username}
                                >
                                    <option value="">Select...</option>
                                </select>
                            </div>
                        </div>
                        <div className="input-row">
                            <div className='input-group'>
                                <label htmlFor="username">About</label>
                                <textarea type="text" className='input-field textarea'
                                // onChange={(e) => {
                                //     setUserData({ ...userData, username: e.target.value })
                                // }} value={userData.username}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row push-right gap-25 text-white">
                    <NavLink to="/dungeon" className='button-rounded gray text-white'>
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

export default OpponentForm;