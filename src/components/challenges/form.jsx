import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBug, faCartShopping, faChartPie, faDatabase, faEthernet, faFingerprint, faGlobe, faKey, faListCheck, faLock, faMessage, faNetworkWired, faPen, faServer, faUser } from '@fortawesome/free-solid-svg-icons';

function ChallengeForm() {

    return (
        <div className="content">
            <div className="form-container">
                <div className="form-title">New Challenge</div>
                <div className="input-section">
                    <div className='input-group-50'>
                        <label htmlFor="username">Title</label>
                        <input type="text" className='input-field'
                        // onChange={(e) => {
                        //     setUserData({ ...userData, username: e.target.value })
                        // }} value={userData.username}
                        />
                    </div>
                    <div className='input-group-50'>
                        <label htmlFor="username">Category</label>
                        <select className='input-field'
                        // onChange={(e) => {
                        //     setUserData({ ...userData, username: e.target.value })
                        // }} value={userData.username}
                        >
                            <option value="">Select...</option>
                        </select>
                        <span className='input-link'>
                            New category
                        </span>
                    </div>
                </div>
                <div className="input-section">
                    <div className='input-group-50'>
                        <label htmlFor="username">Brief</label>
                        <input type="text" className='input-field'
                        // onChange={(e) => {
                        //     setUserData({ ...userData, username: e.target.value })
                        // }} value={userData.username}
                        />
                        <span className='input-description'>
                            A small description to be displayed on hover
                        </span>
                    </div>
                    <div className='input-group-50'>
                        <label htmlFor="username">Icon</label>
                        <select className='input-field'
                        // onChange={(e) => {
                        //     setUserData({ ...userData, username: e.target.value })
                        // }} value={userData.username}
                        >
                            <option value="">Select...</option>
                        </select>
                    </div>
                </div>
                <div className="input-section">
                    <div className='input-group'>
                        <label htmlFor="username">Brief</label>
                        <textarea type="text" className='input-field textarea'
                        // onChange={(e) => {
                        //     setUserData({ ...userData, username: e.target.value })
                        // }} value={userData.username}
                        />
                    </div>
                </div>
                <span className="section-title">
                    Quizz questions
                </span>
                <div className="alt-container">
                    
                </div>
            </div>
        </div>
    );
}

export default ChallengeForm;