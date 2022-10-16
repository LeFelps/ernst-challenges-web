import React from 'react';
import { NavLink, BrowserRouter } from 'react-router-dom'
import profileLogo from '../../profile.svg';

import AppRoutes from './AppRoutes';

function Dashboard({ removeUser, ...props }) {

    const role = JSON.parse(localStorage.getItem('user')).role

    return (
        <div className="app">
            <BrowserRouter>
                <div className="app-header">
                    <div className="header-content">
                        <NavLink
                            className={({ isActive }) => {
                                let linkClasses = 'nav-link';
                                if (isActive) linkClasses = linkClasses + '-active';
                                return linkClasses
                            }}
                            to="/challenges"
                        >
                            <p>
                                Challenges
                            </p>
                        </NavLink>
                        <NavLink
                            className={({ isActive }) => {
                                let linkClasses = 'nav-link';
                                if (isActive) linkClasses = linkClasses + '-active';
                                return linkClasses
                            }}
                            to="/jobs">
                            <p>
                                Jobs
                            </p>
                        </NavLink>
                        <NavLink
                            className={({ isActive }) => {
                                let linkClasses = 'nav-link';
                                if (isActive) linkClasses = linkClasses + '-active';
                                return linkClasses
                            }}
                            to="/heros">
                            <p>
                                Heros
                            </p>
                        </NavLink>
                        {role !== "ADMIN" ?
                            <NavLink
                                className={({ isActive }) => {
                                    let linkClasses = 'nav-link';
                                    if (isActive) linkClasses = linkClasses + '-active';
                                    return linkClasses
                                }}
                                to="/dungeon">
                                <p>
                                    The Dungeon
                                </p>
                            </NavLink>
                            : null}
                        <NavLink to="/profile" className="nav-profile highlight-blue to-right" >
                            <img src={profileLogo} alt="Small profile" />
                        </NavLink>
                    </div>
                </div>
                <div>
                    <AppRoutes removeUser={removeUser} />
                </div>
                <div className='footer'>
                </div>
            </BrowserRouter>
        </div >
    );
}

export default Dashboard;
