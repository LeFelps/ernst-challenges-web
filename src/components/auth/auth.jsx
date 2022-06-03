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
                <Routes>
                    <Route path='/login' exact element={<Login />}></Route>
                    <Route path='/signup' exact element={<Signup />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default Auth;