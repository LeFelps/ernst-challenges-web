import React, { useState, useEffect, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as fa from '@fortawesome/free-solid-svg-icons';
import { NavLink, useParams } from 'react-router-dom';
import axios from 'axios';
import consts from '../../consts.js'
import Modal from '../../components/utilities/modals/Modal.jsx'
import ToastContext from '../utilities/toast/ToastContext.jsx';
import CategoryModal from '../categories/Modal.jsx';
import { getColors, getDifficultyLevels, getQuestionTypes } from '../utilities/functions/knownLists.js';

function ChallengeForm({ ...props }) {

    const { categoryId, challengeId } = useParams()

    const { toast } = useContext(ToastContext);

    const initialChallenge = {
        id: undefined,
        category: {
            id: null
        },
        title: null,
        brief: null,
        description: null,
        icon: null,
        checkpoints: []
    }

    const [challenge, setChallenge] = useState({ ...initialChallenge })

    const [categories, setCategories] = useState([])

    const [loadingChallenge, setLoadingChallenge] = useState(false)

    const [iconSearch, setIconSearch] = useState("")
    const [iconMaxValues, setIconMaxValues] = useState(60)

    const [showCategoryModal, setShowCategoryModal] = useState(false)
    const [showQuestionsModal, setShowQuestionsModal] = useState(false)
    const [showTechnologyModal, setShowTechnologyModal] = useState(false)

    const accentColors = getColors()

    const questionLevels = getDifficultyLevels()

    const questionTypes = getQuestionTypes()

    const initialCategory = {
        id: null,
        name: null,
        accentColor: accentColors[0],
    }

    const initialQuestion = {
        id: null,
        title: null,
        level: null,
        type: null,
        answerType: null,
        options: []
    }

    const initialTechnology = {
        value: null,
        checkpointIndex: null
    }

    const [editCategory, setEditCategory] = useState(initialCategory)
    const [editQuestion, setEditQuestion] = useState(initialQuestion)
    const [editTechnology, setEditTechnology] = useState(initialTechnology)

    const [newQuestionAnswer, setNewQuestionAnswer] = useState("")

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

    const closeQuestionsModal = () => {
        setShowQuestionsModal(false)
    }

    const closeTechnologyModal = () => {
        setShowTechnologyModal(false)
        setEditTechnology({ ...initialTechnology })
    }

    function saveCategory(response) {
        let categoryList = [...categories]
        let category = categoryList.find(c => c.id === response.id)
        let newCategoty = { ...response }
        if (category !== undefined) {
            categoryList[categoryList.indexOf(category)] = newCategoty
        } else {
            categoryList.push(newCategoty)
        }
        setChallenge({ ...challenge, category: newCategoty })
        setCategories([...categoryList])
    }

    useEffect(() => {

        categoryId && setChallenge({ ...challenge, category: { id: categoryId } })

        axios.get(`${consts.LOCAL_API}/categories?min=true`)
            .then(res => {
                setCategories(res.data || [])
            })
            .catch(err => {
                console.error(err)
            })

        if (challengeId) {
            setLoadingChallenge(true)
            axios.get(`${consts.LOCAL_API}/challenges/${challengeId}`)
                .then(res => {
                    setChallenge(res.data || { ...initialChallenge })
                }).catch(err => {
                    console.error(err)
                }).then(() => {
                    setLoadingChallenge(false)
                })
        }
    }, [])

    return (
        <div className="content">
            <div>
                <form className="form-container" onSubmit={(e) => {
                    e.preventDefault()
                    e.stopPropagation()

                    let type = "post"

                    let challengeData = { ...challenge }

                    if (challenge.icon === null) {
                        toast.info("You need to select an icon")
                    } else {

                        if (challenge.id)
                            type = "put"

                        setLoadingChallenge(true)
                        axios[type](`${consts.LOCAL_API}/challenges`, challengeData)
                            .then((response) => {
                                setChallenge(response.data || {})
                            })
                            .catch(() => {
                                toast.error("An error occurred while saving the challenge")
                            })
                            .then(() => {
                                setLoadingChallenge(false)
                            })
                    }
                }}>
                    <div>
                        <div className="form-title">
                            {challenge.id ? "Edit Challenge" : "New Challenge"}
                        </div>
                        <div className="input-section">
                            <div className="row">
                                <div className='input-group-50'>
                                    <label>Title</label>
                                    <input type="text" className='input-field' required disabled={loadingChallenge}
                                        onChange={(e) => {
                                            setChallenge({ ...challenge, title: e.target.value })
                                        }} value={challenge?.title || ""}
                                    />
                                </div>
                                <div className='input-group-50'>
                                    <label>Category</label>
                                    <div className="row w-100 gap-15 vertical-center">
                                        <select className='input-field' required disabled={loadingChallenge}
                                            onChange={(e) => {
                                                setChallenge({ ...challenge, category: categories.find(c => c.id === parseInt(e.target.value)) })
                                            }} value={challenge.category?.id || ""}
                                        >
                                            <option value="">Select...</option>
                                            {categories.map((category, index) => (
                                                <option value={category.id} key={index}>{category.name}</option>
                                            ))}
                                        </select>
                                        {challenge.category?.id ?
                                            <div>
                                                <button type='button' className="round-icon yellow pointer" disabled={loadingChallenge}
                                                    onClick={() => {
                                                        setShowCategoryModal(true)
                                                        setEditCategory({ ...categories.find(c => parseInt(c.id) === parseInt(challenge.category.id)) })
                                                    }}>
                                                    <FontAwesomeIcon icon={fa.faPen} />
                                                </button>
                                            </div>
                                            : null}
                                    </div>
                                    <button type="button" className='input-link' disabled={loadingChallenge}
                                        onClick={() => setShowCategoryModal(true)}>
                                        New category
                                    </button>
                                </div>
                            </div>
                            <div className="row">
                                <div className='input-group-50'>
                                    <label>Brief</label>
                                    <input type="text" className='input-field' required disabled={loadingChallenge}
                                        onChange={(e) => {
                                            setChallenge({ ...challenge, brief: e.target.value })
                                        }} value={challenge?.brief || ""}
                                    />
                                    <span className='input-description'>
                                        A small description to be displayed on hover
                                    </span>
                                </div>
                            </div>
                            <div className="row gap-35">
                                <div className='input-group'>
                                    <label>Description</label>
                                    <textarea type="text" className='input-field textarea' required disabled={loadingChallenge}
                                        onChange={(e) => {
                                            setChallenge({ ...challenge, description: e.target.value })
                                        }} value={challenge?.description || ""}
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
                                        <button type="button" disabled={loadingChallenge} key={index} className={`${challenge.icon === key ? ' blue text-white ' : ' white text-dark border-light '} flex pointer p-5 square-small centered vertical-center text-small`}
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
                                        <input type="number" className='text-blue naked w-75px text-center text-big' disabled={loadingChallenge}
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
                                            {questionLevels["EASY"]}
                                        </span>
                                        <span className='card-value bg-green to-right'>{challenge.questions?.filter(q => q.level === "EASY")?.length || 0}</span>
                                    </div>
                                    <div className="round-card w-30">
                                        <span className="card-title">
                                            {questionLevels["MEDIUM"]}
                                        </span>
                                        <span className='card-value bg-orange to-right'>{challenge.questions?.filter(q => q.level === "MEDIUM")?.length || 0}</span>
                                    </div>
                                    <div className="round-card w-30">
                                        <span className="card-title">
                                            {questionLevels["HARD"]}
                                        </span>
                                        <span className='card-value bg-red to-right'>{challenge.questions?.filter(q => q.level === "HARD")?.length || 0}</span>
                                    </div>
                                </div>
                                <div className="row centered gap-25">
                                    <button type="button" className="button-flat white text-dark border-thin" disabled={loadingChallenge}
                                        onClick={() => {
                                            setShowQuestionsModal(true)
                                        }}>
                                        Manage List
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {challenge.checkpoints?.map((checkpoint, index) => (
                        <div key={index}>
                            <span className="section-title row w-100 vertical-bottom">
                                Checkpoint {index + 1}
                                <button type="button" className="round-icon white pointer to-right text-center" disabled={loadingChallenge}
                                    onClick={() => {
                                        let checkpoints = [...challenge.checkpoints]
                                        checkpoints.splice(index, 1)
                                        setChallenge({ ...challenge, checkpoints: checkpoints })
                                    }}>
                                    <FontAwesomeIcon icon={fa.faTrashAlt} className="text-red text-bigger" />
                                </button>
                            </span>
                            <div className="radius-15 outlined-container p-30">
                                <div className="input-section">
                                    <div className="row gap-35">
                                        <div className='input-group'>
                                            <label>Description</label>
                                            <textarea type="text" className='input-field textarea' required disabled={loadingChallenge}
                                                onChange={(e) => {
                                                    let checkpointList = [...challenge.checkpoints]
                                                    checkpointList[index].description = e.target.value
                                                    setChallenge({ ...challenge, checkpoints: checkpointList })
                                                }} value={checkpoint?.description || ""} />
                                        </div>
                                    </div>
                                    <div>
                                        <span className="group-title">References</span>
                                        <div className="box-section">
                                            {checkpoint.sources?.map((source, rIndex) => (
                                                <div className="radius-15 filled-container row p-20 gap-15" key={rIndex}>
                                                    <div className="row w-100">
                                                        <div className='input-group-50'>
                                                            <label>Title</label>
                                                            <input type="text" className='input-field' required disabled={loadingChallenge}
                                                                onChange={(e) => {
                                                                    let editSource = checkpoint.sources[rIndex]
                                                                    editSource.title = e.target.value
                                                                    let checkpointList = [...challenge.checkpoints]
                                                                    checkpointList[index].sources[rIndex] = editSource
                                                                    setChallenge({ ...challenge, checkpoints: checkpointList })
                                                                }} value={source?.title || ""} />
                                                        </div>
                                                        <div className='input-group-50'>
                                                            <label>Link</label>
                                                            <input type="text" className='input-field' required disabled={loadingChallenge}
                                                                onChange={(e) => {
                                                                    let editSource = checkpoint.sources[rIndex]
                                                                    editSource.link = e.target.value
                                                                    let checkpointList = [...challenge.checkpoints]
                                                                    checkpointList[index].sources[rIndex] = editSource
                                                                    setChallenge({ ...challenge, checkpoints: checkpointList })
                                                                }} value={source?.link || ""} />
                                                        </div>
                                                    </div>
                                                    <div className='flex vertical-center p-10' disabled={loadingChallenge}>
                                                        <button type='button' className='text-bigger red text-white round-icon pointer'
                                                            onClick={() => {
                                                                let checkpointList = [...challenge.checkpoints]
                                                                let sourceList = [...checkpoint.sources]
                                                                sourceList.splice(rIndex, 1)
                                                                checkpointList[index].sources = sourceList
                                                                setChallenge({ ...challenge, checkpoints: checkpointList })
                                                            }}>
                                                            <FontAwesomeIcon icon={fa.faTrashAlt} />
                                                        </button>
                                                    </div>
                                                </div>
                                            ))}
                                            <div className="row centered">
                                                <button type="button" className="button-flat blue text-white" disabled={loadingChallenge}
                                                    onClick={() => {
                                                        let checkpointList = [...challenge.checkpoints]
                                                        checkpointList[index].sources = [...(checkpoint.sources || []), { title: null, link: null }]
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
                                            {challenge.checkpoints?.length > 0 && challenge.checkpoints[index]?.technologies?.map((technology, tIndex) => (
                                                <div className="chip white text-dark border-thin" key={tIndex}>
                                                    <button type="button" className="chip-button" disabled={loadingChallenge}
                                                        onClick={() => {
                                                            let technologiesList = [...challenge.checkpoints[index].technologies]
                                                            technologiesList.splice(tIndex, 1)
                                                            let checkpointList = [...challenge.checkpoints]
                                                            checkpointList[index].technologies = technologiesList
                                                            setChallenge({ ...challenge, checkpoints: checkpointList })
                                                        }} >
                                                        <FontAwesomeIcon icon={fa.faCircleXmark} className="pointer" />
                                                    </button>
                                                    <span>{technology}</span>
                                                </div>
                                            ))}
                                            <button type="button" className="add-button" disabled={loadingChallenge}
                                                onClick={() => {
                                                    setEditTechnology({ value: "", checkpointIndex: index })
                                                    setShowTechnologyModal(true)
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
                        <button type="button" className="button-flat blue text-white" disabled={loadingChallenge}
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
                        <button type="submit" className="button-rounded green text-white" disabled={loadingChallenge}>
                            Save
                        </button>
                    </div>
                </form>

                <CategoryModal
                    afterSave={saveCategory}
                    close={closeCategoryModal}
                    show={showCategoryModal}
                    category={editCategory}
                />

                <Modal show={showQuestionsModal} close={() => closeQuestionsModal()} >
                    <div className='col gap-25'>
                        <div className="row w-100">
                            <b className="text-huge">
                                Add Question
                            </b>
                            <div className="round-icon white text-light to-right text-bigger pointer"
                                onClick={() => closeQuestionsModal()}
                            >
                                <FontAwesomeIcon icon={fa.faTimes} />
                            </div>
                        </div>
                        <div className="row">
                            <div className='input-group-50'>
                                <label>Title</label>
                                <input type="text" className='input-field' required
                                    onChange={(e) => {
                                        setEditQuestion({ ...editQuestion, title: e.target.value })
                                    }} value={editQuestion?.title || ""}
                                />
                            </div>
                            <div className='input-group-50'>
                                <label>Level</label>
                                <select className='input-field' required
                                    onChange={(e) => {
                                        setEditQuestion({ ...editQuestion, level: e.target.value })
                                    }} value={editQuestion.level || ""}
                                >
                                    <option value="">Select...</option>
                                    {Object.keys(questionLevels).map((key, index) => (
                                        <option key={index} value={key}>{questionLevels[key]}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className='input-group-50'>
                                <label>Type</label>
                                <select className='input-field' required
                                    onChange={(e) => {
                                        setEditQuestion({ ...editQuestion, type: e.target.value })
                                    }} value={editQuestion.type || ""}
                                >
                                    <option value="">Select...</option>
                                    {Object.keys(questionTypes).map((key, index) => (
                                        <option key={index} value={key}>{questionTypes[key]}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className='input-group-50'>
                                <label>New Answer Option</label>
                                <div className="row w-100 gap-10 vertical-center">
                                    <input type="text" className='input-field'
                                        onChange={(e) => {
                                            setNewQuestionAnswer(e.target.value)
                                        }} value={newQuestionAnswer || ""}
                                    />
                                    <div>
                                        <div className="round-icon green text-white pointer text-bigger"
                                            onClick={() => {
                                                setEditQuestion({ ...editQuestion, options: [...(editQuestion.options || []), { value: (newQuestionAnswer || ""), correctAnswer: false }] })
                                                setNewQuestionAnswer("")
                                            }}>
                                            <FontAwesomeIcon icon={fa.faPlus} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-100 col p-10 gap-10">
                            <span className='text-big text-thick'>Answer Options</span>
                            {editQuestion.options?.length > 0 ?
                                <div className='row gap-10 wrap p-5'>
                                    {editQuestion.options?.map((answer, index) => (
                                        <div className="col" key={index}>
                                            <div className="button-flat dark text-white">
                                                {answer.value}
                                            </div>
                                            <div className='row'>
                                                <input type="checkbox" name={`check-${index}`} id={`check-${index}`}
                                                    onChange={() => {
                                                        let answerList = [...editQuestion.options]
                                                        answerList[index].correctAnswer = !answerList[index].correctAnswer
                                                        setEditQuestion({ ...editQuestion, options: answerList })
                                                    }}
                                                    checked={answer.correctAnswer} />
                                                <label className="check-label" for={`check-${index}`}>Correct answer</label>
                                                <FontAwesomeIcon icon={fa.faTrashAlt} className="to-right text-red p-5 pointer"
                                                    onClick={() => {
                                                        let answerList = [...editQuestion.options]
                                                        answerList.splice(index, 1)
                                                        setEditQuestion({ ...editQuestion, options: answerList })
                                                    }} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                :
                                <div className="row centered w-100">
                                    <span className="text-gray text-big">No Answer Options...</span>
                                </div>}
                        </div>
                        <div className="row justify-right vertical-center gap-25">
                            {editQuestion.tempIndex === undefined ?
                                <button className="button-rounded green text-white" type="button" onClick={() => {
                                    let questionData = { ...editQuestion }
                                    setChallenge({ ...challenge, questions: [...(challenge.questions || []), questionData] })
                                    setEditQuestion({ ...initialQuestion })
                                }}>
                                    Add
                                </button>
                                :
                                <>
                                    <button className="button-rounded gray text-white" type="button" onClick={() => {
                                        setEditQuestion({ ...initialQuestion })
                                    }}>
                                        Cancel
                                    </button>
                                    <button className="button-rounded green text-white" type="button" onClick={() => {
                                        let questionList = [...challenge.questions]
                                        questionList[editQuestion.tempIndex] = { ...editQuestion }
                                        setChallenge({ ...challenge, questions: questionList })
                                        setEditQuestion({ ...initialQuestion })
                                    }}>
                                        Save
                                    </button>
                                </>
                            }
                        </div>
                        <div className="col w-100">
                            <b className="text-huge">
                                Question List
                            </b>
                            <div className="p-15 w-100 filled-container radius-15">
                                {challenge.questions?.length > 0 ?
                                    <>
                                        <table className='text-big w-100'>
                                            <thead>
                                                <tr>
                                                    <th className='text-center'>
                                                        <b>Title</b>
                                                    </th>
                                                    <th className='text-center'>
                                                        <b>Level</b>
                                                    </th>
                                                    <th className='text-center'>
                                                        <b>Type</b>
                                                    </th>
                                                    <th className='text-center'>
                                                        <b>Options</b>
                                                    </th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {challenge.questions?.map((question, index) => (
                                                    <tr key={index} className={`${index % 2 === 0 ? 'bg-white' : ''}`}>
                                                        <td className='w-100 p-10'>
                                                            {question.title}
                                                        </td>
                                                        <td className='p-10 text-center'>
                                                            {questionTypes[question.type]}
                                                        </td>
                                                        <td className='p-10 text-center'>
                                                            {questionLevels[question.level]}
                                                        </td>
                                                        <td className='p-10 text-center'>
                                                            {question.options?.length || 0}
                                                        </td>
                                                        <td className='p-10 row'>
                                                            <button className="round-icon text-bigger pointer" type="button"
                                                                onClick={() => {
                                                                    let questions = [...(challenge.questions || [])]
                                                                    questions.splice(index, 1)
                                                                    setChallenge({ ...challenge, questions: questions })
                                                                }}>
                                                                <FontAwesomeIcon icon={fa.faTrashAlt} className="text-red" />
                                                            </button>
                                                            {editQuestion.tempIndex === undefined &&
                                                                < button className="round-icon text-bigger pointer" type="button"
                                                                    onClick={() => {
                                                                        let newEditQuestion = { ...question }
                                                                        newEditQuestion.tempIndex = index
                                                                        setEditQuestion({ ...newEditQuestion })
                                                                    }}>
                                                                    <FontAwesomeIcon icon={fa.faPen} className="text-dark" />
                                                                </button>
                                                            }
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </>
                                    :
                                    <div className="row centered w-100">
                                        <span className="text-gray text-bigger">No Questions...</span>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </Modal>

                <Modal show={showTechnologyModal} close={() => closeTechnologyModal()} >
                    <div className='col gap-25'>
                        <div className="row w-100">
                            <b className="text-huge">
                                Add Technology
                            </b>
                            <div className="round-icon white text-light to-right text-bigger pointer"
                                onClick={() => closeTechnologyModal()}
                            >
                                <FontAwesomeIcon icon={fa.faTimes} />
                            </div>
                        </div>
                        <div className="row">
                            <div className='input-group-50'>
                                <label>Name</label>
                                <input type="text" className='input-field' required
                                    onChange={(e) => {
                                        setEditTechnology({ ...editTechnology, value: e.target.value })
                                    }} value={editTechnology?.value || ""}
                                />
                            </div>
                        </div>
                        <div className="row justify-right vertical-center gap-25">
                            <button className="button-rounded green text-white" type="button" onClick={() => {
                                let checkpointList = [...challenge.checkpoints]
                                if (!checkpointList[editTechnology.checkpointIndex].technologies) {
                                    checkpointList[editTechnology.checkpointIndex].technologies = []
                                }
                                checkpointList[editTechnology.checkpointIndex].technologies = [...checkpointList[editTechnology.checkpointIndex].technologies, editTechnology.value]
                                setChallenge({ ...challenge, checkpoints: checkpointList })
                                setEditTechnology({ ...editTechnology, value: "" })
                            }}>
                                Add
                            </button>
                        </div>
                    </div>
                </Modal>
            </div>
        </div >
    );
}

export default ChallengeForm;
