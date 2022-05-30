import axios from 'axios';
import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import Login from './login'
import Signup from './signup'
import logo from '../../logo.svg'

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

function Auth() {
    return (
        <div>
            <BrowserRouter>
                <div className='auth-nav'>
                    <div>
                        <img src={logo} alt="" className='auth-nav-img' />
                    </div>
                    <NavLink
                        className={({ isActive }) => {
                            let linkClasses = 'auth-nav-link';
                            if (isActive) linkClasses = linkClasses + '-active';
                            return linkClasses
                        }}
                        to="/"
                    >
                        <span>Login</span>
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => {
                            let linkClasses = 'auth-nav-link';
                            if (isActive) linkClasses = linkClasses + '-active';
                            return linkClasses
                        }}
                        to="/signup"
                    >
                        <span>Sign up</span>
                    </NavLink>
                </div>
                <Routes>
                    <Route path='/' exact element={<Login />}></Route>
                    <Route path='/signup' exact element={<Signup />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default Auth;