import React from 'react';
import { NavLink, BrowserRouter, Route, Routes } from 'react-router-dom'
import logo from '../../logo.svg';

// Pages
import ChallengeList from '../challenges/list';
import ChallengeForm from '../challenges/form';
import ChallengeView from '../challenges/form';
import JobList from '../jobs/list';
import JobForm from '../jobs/form';
import JobView from '../jobs/form';
import ProfileList from '../profile/list';
import ProfileForm from '../profile/form';
import ProfileView from '../profile/view';


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
                        <NavLink to="/profile" className="nav-profile" >
                            <img src={logo} alt="Small profile" style={{ borderColor: '#188EB9' }} />
                        </NavLink>
                    </div>
                </div>
                <Routes>
                    {/* <Route exact path='/' component={}></Route> */}
                    <Route path='/' exact element={<ChallengeList />}></Route>
                    <Route path='/challenges' element={<ChallengeList />}></Route>
                    <Route path='/challenge-form' element={<ChallengeForm />}></Route>
                    <Route path='/jobs' exact element={<JobList />}></Route>
                    <Route path='/job-form' element={<JobForm />}></Route>
                    <Route path='/profile' element={<ProfileView />}></Route>
                </Routes>
                <div className='footer'>

                </div>
            </BrowserRouter>

        </div >
    );
}

export default Dashboard;