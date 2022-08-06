import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as fa from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import consts from '../../consts';

function ChallengeList() {

    const [categoryList, setCategoryList] = useState([])

    useEffect(() => {
        axios.get(`${consts.LOCAL_API}/challenges/categories`)
            .then((response) => {
                setCategoryList(response.data || [])
            })
            .catch(() => {
            })
    }, [])

    return (
        <div className='content'>
            <div className="content-description">
                <p className='text-title'>
                    Career challenges
                </p>
                <p className='text-secondary'>
                    Challenges that help you test and improve your technical skills
                </p>
            </div>

            {categoryList.map((category, index) => (
                <div className='list-container'>
                    <p className="group-title" style={{ color: category.accentColor }}>
                        {category.name}
                    </p>
                    <div className='card-group'>
                        {category.challenges?.map((challenge, index) => (
                            <NavLink to={`/challenge/${challenge.id}`}>
                                <div className='card'>
                                    <FontAwesomeIcon icon={fa[challenge.icon]} className="card-image" style={{ color: category.accentColor }} />
                                    <div className='card-description'>
                                        <p>
                                            {challenge.title}
                                        </p>
                                        <p>
                                            {challenge.brief}
                                        </p>
                                    </div>
                                    <NavLink to={`/challenge-form/${challenge.id}`} className='round-button yellow card-br'>
                                        <FontAwesomeIcon icon={fa.faPen} className="card-image" />
                                    </NavLink>
                                </div>
                            </NavLink>
                        ))}
                        <NavLink to={`/challenge-form/new/${category.id}`}>
                            <div className='card-add'>
                                <FontAwesomeIcon icon={fa.faPlus} className="card-add-image text-white" />
                            </div>
                        </NavLink>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ChallengeList;