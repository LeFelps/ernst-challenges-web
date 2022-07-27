import axios from 'axios';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import challengesLogo from '../../challenges-logo.svg'

function Login({ saveUser, ...props }) {

    const [userData, setUserData] = useState({
        username: '',
        password: ''
    })

    // const navigate = useNavigate()

    function saveLogin() {

        // axios.get('')
        //     .then((response) => {
        //         saveUser(response.data)
        //         navigate('/')
        //     })
        //     .catch((error) => {

        //     })

        localStorage.setItem('user', JSON.stringify(userData));
    }

    return (
        <div className='auth-bg'>
            <div className='auth-card'>
                <div className="login-logo">
                    <img src={challengesLogo} alt="" />
                </div>

                <div className="login-input-area">
                    <div>
                        <label htmlFor="username">Username</label>
                        <input type="text" className='input-field' onChange={(e) => {
                            setUserData({ ...userData, username: e.target.value })
                        }} value={userData.username} />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" className='input-field' onChange={(e) => {
                            setUserData({ ...userData, password: e.target.value })
                        }} value={userData.password} />
                    </div>
                </div>

                <button className='auth-button' onClick={() => saveLogin()}>
                    Login
                </button>
                <NavLink
                    className='register-link'
                    to="/signup"
                >
                    <span>I don't have an account</span>
                </NavLink>
            </div>
        </div>
    );
}

export default Login;