import axios from 'axios';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import challengesLogo from '../../challenges-logo.svg'
import consts from '../../consts';


function Signup({ saveUser, ...props }) {

    const [userData, setUserData] = useState({
        username: '',
        password: '',
        email: '',
        passwordConfirm: '',
    })

    const navigate = useNavigate()

    function saveLogin() {

        axios.post(`${consts.LOCAL_API}/users/signup`, userData)
            .then((response) => {
                saveUser(response.data)
                navigate('/')
            })
            .catch((error) => {

            })
    }

    return (
        <div className='auth-bg'>
            <form onSubmit={(e) => {
                e.preventDefault()
                e.stopPropagation()

                saveLogin()
            }}>
                <div className='auth-card'>
                    <span className='auth-title'>Join the party!</span>
                    <div className="login-input-area">
                        <div>
                            <label htmlFor="username">Username</label>
                            <input id="username" type="text" className='input-field'
                                required
                                onChange={(e) => {
                                    setUserData({ ...userData, username: e.target.value })
                                }} value={userData.username} />
                        </div>
                        <div>
                            <label htmlFor="email">Email <span className='text-small text-gray'>(required)</span></label>
                            <input id="email" type="text" className='input-field'
                                required
                                onChange={(e) => {
                                    setUserData({ ...userData, email: e.target.value })
                                }} value={userData.email} />
                        </div>
                    </div>

                    <div className="login-input-area">
                        <div>
                            <label htmlFor="password">Password</label>
                            <input id="password" type="password" className='input-field text-small'
                                required
                                onChange={(e) => {
                                    setUserData({ ...userData, password: e.target.value })
                                }} value={userData.password} />
                            <span className='text-small text-gray'>* Minimum 8 characters</span>
                        </div>
                        <div>
                            <label htmlFor="password-confirm">Confirm password</label>
                            <input id="password-confirm" type="password" className='input-field text-small'
                                required
                                onChange={(e) => {
                                    setUserData({ ...userData, passwordConfirm: e.target.value })
                                }} value={userData.passwordConfirm} />
                        </div>
                    </div>

                    <button className='auth-button' disabled={userData.password?.length < 8 || userData.password !== userData.passwordConfirm} type="submit">
                        Signup
                    </button>
                    <NavLink
                        className='register-link'
                        to="/login"
                    >
                        <span>I already have an account</span>
                    </NavLink>
                </div>
            </form>
        </div>
    );
}

export default Signup;