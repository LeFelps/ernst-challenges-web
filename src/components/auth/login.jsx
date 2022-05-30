import axios from 'axios';
import React, { useState } from 'react';

function Login() {

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

        localStorage.setItem('user', JSON.stringify(userData));
    }
    return (
        <div className='login-bg'>
            <div className='login-card'>

                <label htmlFor="username">Username</label>
                <input type="text" onChange={(e) => {
                    setUserData({ ...userData, username: e.target.value })
                }} value={userData.username} />

                <label htmlFor="password">Password</label>
                <input type="text" onChange={(e) => {
                    setUserData({ ...userData, password: e.target.value })
                }} value={userData.password} />
                
                <button className='login-button' onClick={() => saveLogin()}>
                    Login
                </button>
            </div>
        </div>
    );
}

export default Login;