import React from 'react';
import { NavLink, BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import logo from '../../logo.svg';

// Pages
import ChallengeList from '../challenges/List';
import ChallengeForm from '../challenges/Form';
import ChallengeView from '../challenges/View';
import JobList from '../jobs/List';
import JobForm from '../jobs/Form';
import JobView from '../jobs/View';
import ProfileList from '../profile/List';
import ProfileForm from '../profile/Form';
import ProfileView from '../profile/View';
import DungeonList from '../dungeon/List';
import DungeonForm from '../dungeon/Form';
import DungeonView from '../dungeon/View';
import QuizView from '../quiz/View'


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
                <Routes>
                    <Route path='/' exact element={<div />
                    }></Route>
                    <Route path='/challenges' element={<ChallengeList />}></Route>
                    <Route path='/challenge' element={<ChallengeView />}></Route>
                    <Route path='/challenge-form' element={<ChallengeForm />}></Route>
                    <Route path='/jobs' exact element={<JobList />}></Route>
                    <Route path='/job' exact element={<JobView />}></Route>
                    <Route path='/job-form' exact element={<JobForm />}></Route>
                    <Route path='/profile' element={<ProfileView />}></Route>
                    <Route path='/heros' element={<ProfileList />}></Route>
                    <Route path='/opponents' exact element={<DungeonList />}></Route>
                    <Route path='/opponent-form' element={<DungeonForm />}></Route>
                    <Route path='/dungeon' element={<DungeonView />}></Route>
                    <Route path='/battle' element={<QuizView />}></Route>
                    <Route
                        path="*"
                        element={<Navigate to="/" replace />}
                    />
                </Routes>
                <div className='footer'>
                </div>
            </BrowserRouter>

        </div >
    );
}

export default Dashboard;