import axios from 'axios';
import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from './Login'
import Signup from './Signup'


function Auth({ setUser, ...props }) {

    function saveUser(user) {
        setUser(user)
        localStorage.setItem('user', JSON.stringify(user));
    }

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/login' exact element={<Login saveUser={saveUser} />}></Route>
                    <Route path='/signup' exact element={<Signup saveUser={saveUser} />}></Route>
                    <Route
                        path="*"
                        element={<Navigate to="/login" replace />}
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default Auth;