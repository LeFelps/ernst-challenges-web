import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as fa from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import consts from '../../consts';
import CategoryModal from '../categories/Modal';
import Modal from '../utilities/modals/Modal';

function ChallengeList() {

    const [categoryList, setCategoryList] = useState([])

    const [showCategoryModal, setShowCategoryModal] = useState(false)
    const [showDeleteCategoryModal, setShowDeleteCategoryModal] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState({})

    function closeDeleteCategoryModal() {
        setShowDeleteCategoryModal(false)
    }

    function deleteCategory(category) {
        axios.delete(`${consts.LOCAL_API}/categories/${category.id}`)
            .then(resp => {
                let categories = [...categoryList]
                categories.splice(categories.indexOf(category), 1)
                setCategoryList(categories)
                closeDeleteCategoryModal()
            }).catch(err => {
                console.error(err)
            })
    }

    useEffect(() => {
        axios.get(`${consts.LOCAL_API}/categories`)
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
                    <div className="row w-100 vertical-center" style={{ color: category.accentColor }}>
                        <span className='group-title'>
                            {category.name}
                        </span>
                        <button type="button" className="round-icon white pointer text-center to-right"
                            onClick={() => {
                                setSelectedCategory(category)
                                setShowDeleteCategoryModal(true)
                            }}>
                            <FontAwesomeIcon icon={fa.faTrashAlt} className="text-light text-big" />
                        </button>
                    </div>
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

            <Modal show={showDeleteCategoryModal} close={() => closeDeleteCategoryModal()} >
                <div className='col gap-25'>
                    <div className="row w-100">
                        <b className="text-huge">
                            Delete Category: <span style={{ color: selectedCategory.accentColor }}>{selectedCategory.name}</span>
                        </b>
                        <div className="round-icon white text-light to-right text-bigger pointer"
                            onClick={() => closeDeleteCategoryModal()}
                        >
                            <FontAwesomeIcon icon={fa.faTimes} />
                        </div>
                    </div>
                    <div className='lm-25'>
                        This will permanently delete the category and all associated challenges.
                    </div>
                    <div className="row justify-right vertical-center gap-25">
                        <button className="button-rounded gray text-white" type="button"
                            onClick={() => closeDeleteCategoryModal()}>
                            Cancel
                        </button>
                        <button className="button-rounded red text-white" type="button"
                            onClick={() => deleteCategory(selectedCategory)}>
                            Delete
                        </button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default ChallengeList;
