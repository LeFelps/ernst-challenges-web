import React from 'react';
import { NavLink, BrowserRouter } from 'react-router-dom'
import logo from '../../logo.svg';

import AppRoutes from './AppRoutes';

function Dashboard() {
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
                        <NavLink to="/profile" className="nav-profile highlight-blue to-right" >
                            <img src={logo} alt="Small profile" />
                        </NavLink>
                    </div>
                </div>
                <div>
                    <AppRoutes />
                </div>
                <div className='footer'>
                </div>
            </BrowserRouter>

        </div >
    );
}

export default Dashboard;