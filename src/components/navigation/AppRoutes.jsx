import React from "react";
import { Route, Routes, Navigate } from 'react-router-dom'

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


function AppRoutes({ removeUser, ...props }) {

    return (
        <Routes>
            {/* Route for standard landing page */}
            {/* TODO -> Add 'directions' or 'gaphs' page */}
            {/* <Route path='/' exact element={<div />}></Route> */}

            <> {/* CHALLENGES */}
                {/* Route for challegne list */}
                <Route path='/challenges' element={<ChallengeList />}></Route>

                {/* Route for challenge details page */}
                <Route path='/challenge/:id' element={<ChallengeView />}></Route>

                {/* Routes for challenge form */}
                <Route path='/challenge-form' exact element={<ChallengeForm />}></Route>
                <Route path='/challenge-form/new/:categoryId' exact element={<ChallengeForm />}></Route>
                <Route path='/challenge-form/:challengeId' exact element={<ChallengeForm />}></Route>
            </>

            <> {/* JOBS */}
                {/* Route for job list */}
                <Route path='/jobs' exact element={<JobList />}></Route>

                {/* Route for job details page */}
                <Route path='/job/:id' exact element={<JobView />}></Route>

                {/* Routes for job form */}
                <Route path='/job-form/new' exact element={<JobForm />}></Route>
                <Route path='/job-form/:id' exact element={<JobForm />}></Route>
            </>

            <> {/* OPPONENTS */}
                {/* Routes for opponent list */}
                <Route path='/opponents' exact element={<DungeonList />}></Route>

                {/* Routes for opponent form */}
                <Route path='/opponent-form/new' element={<DungeonForm />}></Route>
                <Route path='/opponent-form/:id' element={<DungeonForm readOnly={true} />}></Route>
            </>

            <> {/* USERS */}
                {/* Route for user details */}
                <Route path='/profile' element={<ProfileView removeUser={removeUser} />}></Route>
                <Route path='/user/:id' element={<ProfileView readOnly />}></Route>

                {/* Route for user form */}
                <Route path='/profile-form' element={<ProfileForm />}></Route>

                {/* Route for user list */}
                <Route path='/heros' element={<ProfileList />}></Route>
                <Route path='/job-applications/:jobId' element={<ProfileList />}></Route>

            </>


            <Route path='/dungeon' element={<DungeonView />}></Route>
            <Route path='/battle' element={<QuizView />}></Route>

            {/* Fallback route for unmapped locations */}
            <Route
                path="*"
                element={<Navigate to="/challenges" replace />}
            />
        </Routes>
    )

}

export default AppRoutes;