import axios from 'axios';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import challengesLogo from '../../challenges-logo.svg'


function Signup() {

    const [userData, setUserData] = useState({
        username: '',
        password: ''
    })

    function saveLogin() {
        const user = localStorage.getItem('user');
        // localStorage.removeItem('user');

        // axios.get('')
        //     .then(() => {

        //     })
        //     .catch(() => {

        //     })

        localStorage.setItem('user', JSON.stringify());
    }

    return (
        <div className='auth-bg'>
            <div className='auth-card'>
                <span className='auth-title'>Join the party!</span>

                <div className="login-input-area">
                    <div>
                        <label htmlFor="username">Username</label>
                        <input type="text" className='input-field' onChange={(e) => {
                            setUserData({ ...userData, username: e.target.value })
                        }} value={userData.username} />
                    </div>
                    <div>
                        <label htmlFor="password">Email</label>
                        <input type="text" className='input-field' onChange={(e) => {
                            setUserData({ ...userData, password: e.target.value })
                        }} value={userData.password} />
                    </div>
                </div>

                <div className="login-input-area">
                    <div>
                        <label htmlFor="username">Password</label>
                        <input type="password" className='input-field' onChange={(e) => {
                            setUserData({ ...userData, username: e.target.value })
                        }} value={userData.username} />
                    </div>
                    <div>
                        <label htmlFor="password">Confirm password</label>
                        <input type="password" className='input-field' onChange={(e) => {
                            setUserData({ ...userData, password: e.target.value })
                        }} value={userData.password} />
                    </div>
                </div>

                <button className='auth-button' onClick={() => saveLogin()}>
                    Signup
                </button>
                <NavLink
                    className='register-link'
                    to="/login"
                >
                    <span>I already have an account</span>
                </NavLink>
            </div>
        </div>
    );
}

export default Signup;