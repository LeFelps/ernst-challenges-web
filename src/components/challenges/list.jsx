import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as fa from '@fortawesome/free-solid-svg-icons';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import consts from '../../consts';
import CategoryModal from '../categories/Modal';

function ChallengeList() {

    const [categoryList, setCategoryList] = useState([])

    const [showCategoryModal, setShowCategoryModal] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`${consts.LOCAL_API}/challenges/categories`)
            .then((response) => {
                setCategoryList(response.data || [])
            })
            .catch(() => {
            })
    }, [])

    function addCategory(category) {
        setCategoryList([...categoryList, category])
    }

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
                <div className='list-container' key={category.id}>
                    <p className="group-title" style={{ color: category.accentColor }}>
                        {category.name}
                    </p>
                    <div className='card-group'>
                        {category.challenges?.map((challenge, index) => (
                            <NavLink to={`/challenge/${challenge.id}`} key={challenge.id}>
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
                                    <button type='button' className='round-button yellow card-br pointer'
                                        onClick={() => {
                                            navigate(`/challenge-form/${challenge.id}`)
                                        }}>
                                        <FontAwesomeIcon icon={fa.faPen} className="card-image-big" />
                                    </button>
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

            <div className="list-container">
                <div className="row centered w-100">
                    <button type="button" className="add-button text-thick"
                        onClick={() => {
                            setShowCategoryModal(true)
                        }}>
                        <FontAwesomeIcon icon={fa.faPlus} />
                        <span>Add Category</span>
                    </button>
                </div>
            </div>

            <CategoryModal
                afterSave={(c) => addCategory(c)}
                close={() => setShowCategoryModal(false)}
                show={showCategoryModal}
            />
        </div>
    );
}

export default ChallengeList;