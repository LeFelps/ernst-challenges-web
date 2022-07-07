import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as fa from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import consts from '../../consts.js'
import Modal from '../../components/utilities/modals/Modal.jsx'
import Spinner from '../../components/utilities/loading/Spinner'

function ChallengeForm() {

    const [challenge, setChallenge] = useState({
        id: undefined,
        category: {
            id: null
        },
        title: null,
        brief: null,
        description: null,
        icon: null,
        checkpoints: []
    })
    const [categories, setCategories] = useState([])

    const [iconSearch, setIconSearch] = useState("")
    const [iconMaxValues, setIconMaxValues] = useState(60)

    const [showCategoryModal, setShowCategoryModal] = useState(false)

    const initialCategory = {
        id: null,
        title: null,
        accentColor: null,
    }
    const [editCategory, setEditCategory] = useState(initialCategory)

    const [loadingCategoryChanges, setLoadingCategoryChanges] = useState(false)


    const accentColors = [
        "#916932",
        "#D48E29",
        "#EC5A46",
        "#E15263",
        "#DF5193",
        "#D59AC5",
        "#8D55A2",
        "#18A2C6",
        "#0288AD",
        "#2B9446",
        "#83C341"
    ]

    function searchMatch(search, array) {
        const matches = array.filter(key => {
            var regexp = new RegExp(search, "gi")
            return key.match(regexp)
        })

        let maxValues
        if (matches.length > iconMaxValues) { maxValues = iconMaxValues } else { maxValues = matches.length }
        let arrayValues = matches.slice(0, maxValues)
        return arrayValues
    }

    const closeCategoryModal = () => {
        setShowCategoryModal(false)
        setEditCategory(initialCategory)
    }

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
                    <div className="form-title">
                        {challenge.id ? "Edit Challenge" : "New Challenge"}
                    </div>
                    <div className="input-section">
                        <div className="row gap-35">
                            <div className='input-group-50'>
                                <label>Title</label>
                                <input type="text" className='input-field'
                                    onChange={(e) => {
                                        setChallenge({ ...challenge, title: e.target.value })
                                    }} value={challenge.title}
                                />
                            </div>
                            <div className='input-group-50'>
                                <label>Category</label>
                                <div className="row w-100 gap-15 vertical-center">
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
                                    {challenge.category?.id ?
                                        <div>
                                            <div className="round-icon yellow pointer"
                                                onClick={() => {
                                                    setShowCategoryModal(true)
                                                    setEditCategory({ ...challenge.category })
                                                }}>
                                                <FontAwesomeIcon icon={fa.faPen} />
                                            </div>
                                        </div>
                                        : null}
                                </div>
                                <span className='input-link' onClick={() => setShowCategoryModal(true)}>
                                    New category
                                </span>
                            </div>
                        </div>
                        <div className="row gap-35">
                            <div className='input-group-50'>
                                <label>Brief</label>
                                <input type="text" className='input-field'
                                    onChange={(e) => {
                                        setChallenge({ ...challenge, brief: e.target.value })
                                    }} value={challenge.brief}
                                />
                                <span className='input-description'>
                                    A small description to be displayed on hover
                                </span>
                            </div>
                        </div>
                        <div className="row gap-35">
                            <div className='input-group'>
                                <label>Description</label>
                                <textarea type="text" className='input-field textarea'
                                    onChange={(e) => {
                                        setChallenge({ ...challenge, description: e.target.value })
                                    }} value={challenge.description}
                                />
                            </div>
                        </div>
                        <div className='col gap-15'>
                            <div className='input-group'>
                                <label>Icon</label>
                                <div className='row vertical-center gap-15 search-field'>
                                    <input type="text" className='search-input'
                                        placeholder='Search icon...'
                                        onChange={(e) => {
                                            setIconSearch(e.target.value)
                                        }} value={iconSearch}
                                    />
                                    <FontAwesomeIcon className="text-light text-huge to-right" icon={fa.faMagnifyingGlass} />
                                </div>
                            </div>
                            <div className="row gap-15 wrap maxh-200 minh-20 overflowy-scroll p-15 filled-container rounded-15">
                                {searchMatch(iconSearch, Object.keys(fa).filter(i => i !== 'fas' && i !== 'prefix')).map((key, index) => (
                                    <button key={index} className={`${challenge.icon === key ? ' blue text-white ' : ' white text-dark border-light '} flex pointer p-5 square-small centered vertical-center text-small`}
                                        onClick={() => {
                                            setChallenge({ ...challenge, icon: key })
                                        }}>
                                        <FontAwesomeIcon icon={fa[key]} size="2x" />
                                    </button>
                                ))}
                            </div>
                            <div className="row">
                                <div className='row gap-10 text-dark vertical-center'>
                                    <b>Selected Icon:</b>
                                    {challenge.icon ?
                                        <>
                                            <FontAwesomeIcon icon={fa[challenge.icon]} />
                                            <b>{challenge.icon}</b>
                                        </>
                                        : <span>None</span>}
                                </div>
                                <div className="row to-right gap-15">
                                    <b>Showing</b>
                                    <input type="number" className='text-blue naked w-75px text-center text-big'
                                        onChange={(e) => {
                                            if (parseInt(e.target.value) > Object.keys(fa).length)
                                                setIconMaxValues(Object.keys(fa).length)
                                            else
                                                setIconMaxValues(e.target.value)
                                        }}
                                        value={iconMaxValues} />
                                    <b>Results</b>
                                </div>
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
                                    <span className='card-value green to-right'>{challenge.questions?.filter(q => q.dificulty === "EASY")?.length || 0}</span>
                                </div>
                                <div className="round-card w-30">
                                    <span className="card-title">
                                        Medium
                                    </span>
                                    <span className='card-value orange to-right'>{challenge.questions?.filter(q => q.dificulty === "MEDIUM")?.length || 0}</span>
                                </div>
                                <div className="round-card w-30">
                                    <span className="card-title">
                                        Hard
                                    </span>
                                    <span className='card-value red to-right'>{challenge.questions?.filter(q => q.dificulty === "HARD")?.length || 0}</span>
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
                {challenge.checkpoints?.map((checkpoint, index) => (
                    <div key={index}>
                        <span className="section-title row w-100 vertical-bottom">
                            Checkpoint {index + 1}
                            <div className="round-icon white pointer to-right text-center">
                                <FontAwesomeIcon icon={fa.faTrashAlt} className="text-red text-bigger" />
                            </div>
                        </span>
                        <div className="radius-15 outlined-container p-30">
                            <div className="input-section">
                                <div className="row gap-35">
                                    <div className='input-group'>
                                        <label>Description</label>
                                        <textarea type="text" className='input-field textarea'
                                            onChange={(e) => {
                                                let checkpointList = [...challenge.checkpoints]
                                                checkpointList[index].description = e.target.value
                                                setChallenge({ ...challenge, checkpoints: checkpointList })
                                            }} value={checkpoint.description} />
                                    </div>
                                </div>
                                <div>
                                    <span className="group-title">References</span>
                                    <div className="box-section">
                                        {checkpoint.references?.map((reference, rIndex) => (
                                            <div className="radius-15 filled-container row">
                                                <div className="row gap-35 p-20 w-100">
                                                    <div className='input-group-50'>
                                                        <label>Title</label>
                                                        <input type="text" className='input-field'
                                                            onChange={(e) => {
                                                                let editReference = checkpoint.references[rIndex]
                                                                editReference.title = e.target.value
                                                                let checkpointList = [...challenge.checkpoints]
                                                                checkpointList[index].references[rIndex] = editReference
                                                                setChallenge({ ...challenge, checkpoints: checkpointList })
                                                            }} value={reference.title} />
                                                    </div>
                                                    <div className='input-group-50'>
                                                        <label>Link</label>
                                                        <input type="text" className='input-field'
                                                            onChange={(e) => {
                                                                let editReference = checkpoint.references[rIndex]
                                                                editReference.link = e.target.value
                                                                let checkpointList = [...challenge.checkpoints]
                                                                checkpointList[index].references[rIndex] = editReference
                                                                setChallenge({ ...challenge, checkpoints: checkpointList })
                                                            }} value={reference.link} />
                                                    </div>
                                                </div>
                                                <div className='p-10 red flex vertical-center text-white text-bigger pointer'
                                                    onClick={() => {
                                                        let checkpointList = [...challenge.checkpoints]
                                                        let referenceList = [...checkpoint.references]
                                                        referenceList.splice(rIndex, 1)
                                                        checkpointList[index].references = referenceList
                                                        setChallenge({ ...challenge, checkpoints: checkpointList })
                                                    }}>
                                                    <FontAwesomeIcon icon={fa.faTrashAlt} />
                                                </div>
                                            </div>
                                        ))}
                                        <div className="row centered">
                                            <button className="button-flat blue text-white"
                                                onClick={() => {
                                                    let checkpointList = [...challenge.checkpoints]
                                                    checkpointList[index].references = [...(checkpoint.references || []), { title: null, link: null }]
                                                    setChallenge({ ...challenge, checkpoints: checkpointList })
                                                }}>
                                                Add reference
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <span className="group-title">Technologies</span>
                                    <div className="chip-section">
                                        {challenge.checkpoints && challenge.checkpoints[index]?.technologies?.map((technology, tIndex) => (
                                            <div className="chip white text-dark border-thin" key={tIndex}>
                                                <button className="chip-button">
                                                    <FontAwesomeIcon icon={fa.faCircleXmark} className="pointer"
                                                        onClick={() => {
                                                            let technologiesList = [...challenge.checkpoints[index].technologies]
                                                            technologiesList.splice(tIndex, 1)
                                                            let checkpointList = [...challenge.checkpoints]
                                                            checkpointList[index].technologies = technologiesList
                                                            setChallenge({ ...challenge, checkpoints: checkpointList })
                                                        }} />
                                                </button>
                                                <span>{technology}</span>
                                            </div>
                                        ))}
                                        <button className="add-button"
                                            onClick={() => {
                                                let checkpointList = [...challenge.checkpoints]
                                                checkpointList[index].technologies = [...(checkpoint.technologies || []), "Test"]
                                                setChallenge({ ...challenge, checkpoints: checkpointList })
                                            }}>
                                            <FontAwesomeIcon icon={fa.faPlus} />
                                            <span>Add technology</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="row centered">
                    <button className="button-flat blue text-white"
                        onClick={() => {
                            setChallenge({ ...challenge, checkpoints: [...challenge.checkpoints, {}] })
                        }}>
                        Add Checkpoint
                    </button>
                </div>
                <div className="row justify-right gap-25">
                    <NavLink to="/challenges" className='button-rounded gray text-white'>
                        Cancel
                    </NavLink>
                    <button className="button-rounded green text-white ">
                        Save
                    </button>
                </div>
                <Modal show={showCategoryModal} close={() => closeCategoryModal()} >
                    <form className='col gap-25'
                        onSubmit={(e) => {
                            e.preventDefault()
                            e.stopPropagation()

                            let categoryData = { ...editCategory }

                            let type = "post"

                            if (categoryData.id)
                                type = "put"

                            setLoadingCategoryChanges(true)
                            axios[type](`${consts.LOCAL_API}/challenges/category`, categoryData)
                                .then((res) => {
                                })
                                .catch(() => {
                                })
                                .then(() => {
                                    setLoadingCategoryChanges(false)
                                    closeCategoryModal()
                                })


                        }}>
                        <div className="row w-100">
                            <b className="text-huge">
                                New Category
                            </b>
                            <div className="round-icon white text-light to-right text-bigger pointer"
                                onClick={() => closeCategoryModal()}
                            >
                                <FontAwesomeIcon icon={fa.faTimes} />
                            </div>
                        </div>
                        <div className='input-group-50'>
                            <label>Title</label>
                            <input type="text" className='input-field' required disabled={loadingCategoryChanges}
                                onChange={(e) => {
                                    setEditCategory({ ...editCategory, title: e.target.value })
                                }} value={editCategory.title}
                            />
                        </div>
                        <div className='input-group-50 flex gap-10'>
                            <div>
                                <label>Accent Color</label>
                                <input type="text" className='input-field text-thick' style={{ color: editCategory.accentColor || '' }} required
                                    placeholder='Color Preview'
                                    value={
                                        editCategory.accentColor ? editCategory.title : ""
                                    }
                                />
                            </div>
                            <div className='row gap-10 wrap'>
                                {accentColors.map((accentColor) => (
                                    <div className="color-box" style={{ backgroundColor: accentColor }}
                                        onClick={() => {
                                            if (!loadingCategoryChanges)
                                                setEditCategory({ ...editCategory, accentColor: accentColor })
                                        }}>
                                        {editCategory.accentColor === accentColor ?
                                            <FontAwesomeIcon icon={fa.faCheck} /> : null}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="row justify-right vertical-center gap-25">
                            {loadingCategoryChanges ?
                                <Spinner size="sm" color='dark' /> : null}
                            <button className="button-rounded green text-white flex align-center gap-10 centered" type='submit' disabled={loadingCategoryChanges}>
                                Save
                            </button>
                        </div>
                    </form>
                </Modal>
            </div>
        </div>
    );
}

export default ChallengeForm;