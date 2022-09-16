import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import consts from '../../consts';
import profileLogo from '../../profile.svg';
import { getJobLevels } from '../utilities/functions/knownLists';

function ProfileList() {

    const jobLevels = getJobLevels()

    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get(`${consts.LOCAL_API}/users/public`)
            .then(response => {
                setUsers(response.data || [])
            }).catch(err => {
                console.error(err)
            })
    }, [])

    return (
        <div className="content">
            <div className="content-description">
                <p className='text-title'>
                    The Heros
                </p>
                <p className='text-secondary'>
                    Look at how your fellow adventurers are doing!
                </p>
            </div>
            <div className="list-container col gap-25">
                {users.map((user, index) => (
                    <NavLink to={`/user/${user.id}`}  className='long-card' style={{ boxShadow: `7px 0px 0px ${user.category?.accentColor || '#CCC'} inset` }}>
                        {console.log(user)}
                        <div className='long-card-title'>
                            {user.fullName}
                        </div>
                        <div className='long-card-content gap-15'>
                            <img src={profileLogo} alt="" className='round-img' style={{ boxShadow: `0px 0px 0px 3px ${user.category?.accentColor}` }} />
                            <div className='align-center'>
                                <p className='info-name' style={{ color: user.category?.accentColor || '#CCC' }}>{user.jobTitle} • {jobLevels[user.jobLevel]}</p>
                                <p className='info-value'>1 year, 9 months experience</p>
                                <p>{user.skills?.map((skill, index) => ((index !== 0 ? ", " : '') + skill))}</p>
                            </div>
                        </div>
                    </NavLink>
                ))}
            </div>
        </div>
    );
}

export default ProfileList;
