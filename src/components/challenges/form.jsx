import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as fa from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import consts from '../../consts.js'

function ChallengeForm() {

    const [challenge, setChallenge] = useState({
        id: undefined,
        category: {
            id: null
        },
        title: null,
        brief: null,
        description: null,
        Icon: null
    })
    const [categories, setCategories] = useState([])

    useEffect(() => {
        axios.get(`${consts.LOCAL_API}/challenges/categories?min=true`)
            .then(res => {
                setCategories(res.data || [])
            })
            .catch(err => {
                console.error(err)
            })
    }, [])



    return (
        <div className="content">
            <div className="form-container">
                <div>
                    <div className="form-title">New Challenge</div>
                    <div className="input-section">
                        <div className="row gap-35">
                            <div className='input-group-50'>
                                <label htmlFor="username">Title</label>
                                <input type="text" className='input-field'
                                    onChange={(e) => {
                                        setChallenge({ ...challenge, title: e.target.value })
                                    }} value={challenge.title}
                                />
                            </div>
                            <div className='input-group-50'>
                                <label htmlFor="username">Category</label>
                                <select className='input-field'
                                    onChange={(e) => {
                                        setChallenge({ ...challenge, category: categories.find(c => c.id === e.target.value) })
                                    }} value={challenge.category?.id}
                                >
                                    <option value="">Select...</option>
                                    {categories.map(category => (
                                        <option value={category.id}>{category.name}</option>
                                    ))}
                                </select>
                                <span className='input-link'>
                                    New category
                                </span>
                            </div>
                        </div>
                        <div className="row gap-35">
                            <div className='input-group-50'>
                                <label htmlFor="username">Brief</label>
                                <input type="text" className='input-field'
                                // onChange={(e) => {
                                //     setUserData({ ...userData, username: e.target.value })
                                // }} value={userData.username}
                                />
                                <span className='input-description'>
                                    A small description to be displayed on hover
                                </span>
                            </div>
                        </div>
                        <div className='col gap-15'>
                            <div className="row gap-35 wrap maxh-200 overflowy-scroll p-15">
                                {Object.keys(fa).map((key, index) => (
                                    <FontAwesomeIcon icon={fa[key]} size="2x" className={`${challenge.icon === key ? ' text-blue ' : ''} pointer`}
                                        onClick={() => {
                                            setChallenge({ ...challenge, icon: key })
                                        }} />
                                ))}
                            </div>
                        </div>
                        <div className="row gap-35">
                            <div className='input-group'>
                                <label htmlFor="username">Description</label>
                                <textarea type="text" className='input-field textarea'
                                // onChange={(e) => {
                                //     setUserData({ ...userData, username: e.target.value })
                                // }} value={userData.username}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <span className="section-title">
                        Quizz questions
                    </span>
                    <div className="radius-15 filled-container p-30">
                        <div className="input-section">
                            <div className='row space-between'>
                                <div className="round-card w-30">
                                    <span className="card-title">
                                        Easy
                                    </span>
                                    <span className='card-value green to-right'>27</span>
                                </div>
                                <div className="round-card w-30">
                                    <span className="card-title">
                                        Medium
                                    </span>
                                    <span className='card-value orange to-right'>15</span>
                                </div>
                                <div className="round-card w-30">
                                    <span className="card-title">
                                        Hard
                                    </span>
                                    <span className='card-value red to-right'>9</span>
                                </div>
                            </div>
                            <div className="row centered gap-25">
                                <button className="button-flat white text-dark border-thin">
                                    Question List
                                </button>
                                <button className="button-flat blue text-white">
                                    Add Question
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <span className="section-title">
                        Checkpoint 1
                    </span>
                    <div className="radius-15 outlined-container p-30">
                        <div className="input-section">
                            <div className="row gap-35">
                                <div className='input-group'>
                                    <label htmlFor="username">Description</label>
                                    <textarea type="text" className='input-field textarea'
                                    // onChange={(e) => {
                                    //     setUserData({ ...userData, username: e.target.value })
                                    // }} value={userData.username}
                                    />
                                </div>
                            </div>
                            <div>
                                <span className="group-title">References</span>
                                <div className="box-section">
                                    <div className="radius-15 filled-container p-30">
                                        <div className="row gap-35">
                                            <div className='input-group-50'>
                                                <label htmlFor="username">Title</label>
                                                <input type="text" className='input-field'
                                                // onChange={(e) => {
                                                //     setUserData({ ...userData, username: e.target.value })
                                                // }} value={userData.username}
                                                />
                                            </div>
                                            <div className='input-group-50'>
                                                <label htmlFor="username">Link</label>
                                                <input type="text" className='input-field'
                                                // onChange={(e) => {
                                                //     setUserData({ ...userData, username: e.target.value })
                                                // }} value={userData.username}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="radius-15 filled-container p-30">
                                        <div className="row gap-35">
                                            <div className='input-group-50'>
                                                <label htmlFor="username">Title</label>
                                                <input type="text" className='input-field'
                                                // onChange={(e) => {
                                                //     setUserData({ ...userData, username: e.target.value })
                                                // }} value={userData.username}
                                                />
                                            </div>
                                            <div className='input-group-50'>
                                                <label htmlFor="username">Link</label>
                                                <input type="text" className='input-field'
                                                // onChange={(e) => {
                                                //     setUserData({ ...userData, username: e.target.value })
                                                // }} value={userData.username}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row centered">
                                        <button className="button-flat blue text-white">
                                            Add reference
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <span className="group-title">Technologies</span>
                                <div className="chip-section">
                                    <div className="chip white text-dark border-thin">
                                        <button className="chip-button">
                                            <FontAwesomeIcon icon={fa.faCircleXmark} />
                                        </button>
                                        <span>Javascript</span>
                                    </div>
                                    <div className="chip white text-dark border-thin">
                                        <button className="chip-button">
                                            <FontAwesomeIcon icon={fa.faCircleXmark} />
                                        </button>
                                        <span>React</span>
                                    </div>
                                    <button className="add-button">
                                        <FontAwesomeIcon icon={fa.faPlus} />
                                        <span>Add technology</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-right gap-25">
                    <NavLink to="/challenges" className='button-rounded gray text-white'>
                        Cancel
                    </NavLink>
                    <button className="button-rounded green text-white ">
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ChallengeForm;