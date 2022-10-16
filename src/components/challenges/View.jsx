import * as fa from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import consts from "../../consts";

function ChallengeView() {

    const { id } = useParams()

    const userId = JSON.parse(localStorage.getItem('user')).id
    const role = JSON.parse(localStorage.getItem('user')).role

    const [challenge, setChallenge] = useState({
        category: {
            accentColor: "",
            name: ""
        },
        title: "",
        brief: "",
        description: "",
        icon: "",
        checkpoints: [],
    })

    const [checkpoints, setCheckpoints] = useState([])

    useEffect(() => {
        axios.all([
            axios.get(`${consts.LOCAL_API}/challenges/${id}`),
            axios.get(`${consts.LOCAL_API}/challenge-submissions?userId=${userId}&challengeId=${id}`)
        ]).then(([challenges, submissions]) => {
            const challengesData = challenges.data
            const submissionsData = submissions.data

            submissionsData.map((s, index) => {
                submissionsData[index].existing = true
                return s
            })

            setChallenge({ ...challengesData } || {})

            const checkpoints = challengesData.checkpoints

            checkpoints.map((checkpoint, index) => {
                checkpoints[index].submission = submissionsData.find(s => s.checkpointId === checkpoint.id) || {}
                return checkpoint
            })

            setCheckpoints([
                ...checkpoints
            ])
        })
    }, [])

    function sendSubmission(submission) {

        const type = submission.existing ? "put" : "post"
        axios[type](`${consts.LOCAL_API}/challenge-submissions`, submission)
            .then(resp => {

            })
            .catch(err => {

            })
    }

    const [selectedCheckpoint, setSelectedCheckpoint] = useState(0)

    return (
        <div className="content">
            <div className="col gap-15">
                <div className="list-container">
                    <div className="row gap-15">
                        <div>
                            <div className='card-sm'>
                                <FontAwesomeIcon icon={fa[challenge.icon]} className="card-image" style={{ color: challenge.category?.accentColor }} />
                                {role === "ADMIN" ?
                                    <NavLink to={`/challenge-form/${challenge.id}`} className='round-icon yellow text-dark card-sm-br'>
                                        <FontAwesomeIcon icon={fa.faPen} className="card-image" />
                                    </NavLink>
                                    : null}
                            </div>
                        </div>
                        <div className="col gap-15 centered text-small lm-25">
                            <div className="card-description-text">
                                <b>{challenge.title}</b>
                            </div>
                            <div className="card-description-text">
                                <b>{challenge.brief}</b>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='list-container'>
                    <b className='group-title text-center'>
                        {challenge.title}
                    </b>
                    <p>
                        {challenge.description}
                    </p>
                </div>
                <div className="list-container">
                    <div className="row vertical-center gap-15">
                        <b className='group-title text-center'>
                            Checkpoint
                        </b>
                        {checkpoints?.map((c, index) => (
                            <button type="button" key={index} className={`round-icon-sm ${index === selectedCheckpoint ? 'blue' : 'gray'} text-white pointer`}
                                onClick={() => {
                                    setSelectedCheckpoint(index)
                                }}>
                                <b>{index + 1}</b>
                            </button>
                        ))}
                    </div>
                </div>
                {checkpoints?.map((checkpoint, index) => (
                    <div key={index} hidden={index !== selectedCheckpoint}>
                        <div className='container'>
                            <p>
                                {checkpoint.description}
                            </p>
                            {role !== "ADMIN" ?
                                <div className="row gap-10">
                                    <div className='input-group-50'>
                                        <label>Submission link</label>
                                        <input type="text" className='input-field'
                                            onChange={(e) => {
                                                let checkpointList = [...checkpoints]
                                                checkpointList[index].submission.link = e.target.value
                                                setCheckpoints([...checkpointList])
                                            }} value={checkpoint.submission?.link || ""}
                                        />
                                        <span className='input-description'>
                                            This can be either a github repository or codepen example
                                        </span>
                                    </div>
                                    <div className="vertical-center w-50 gap-15 row">
                                        {checkpoint.submission?.completed ?
                                            <div className="row w-100 gap-15 vertical-center">
                                                <button type="button" className='round-icon green text-white pointer'
                                                    onClick={() => {
                                                        let checkpointList = [...checkpoints]
                                                        checkpointList[index].submission.completed = false
                                                        setCheckpoints([...checkpointList])
                                                    }}>
                                                    <FontAwesomeIcon icon={fa.faCheck} className="card-image" />
                                                </button>
                                                <span className="text-thicker">Completed</span>
                                            </div>
                                            :
                                            <div className="row w-100 gap-15 vertical-center">
                                                <button type="button" className='round-icon yellow text-black pointer'
                                                    onClick={() => {
                                                        let checkpointList = [...checkpoints]
                                                        checkpointList[index].submission.completed = true
                                                        setCheckpoints([...checkpointList])
                                                    }}>
                                                    <FontAwesomeIcon icon={fa.faBarsProgress} className="card-image" />
                                                </button>
                                                <span className="text-thicker">Ongoing</span>
                                            </div>
                                        }
                                        <div className="div to-right">
                                            <button type="button"
                                                className="button-rounded green text-white to-right"
                                                onClick={() => sendSubmission({
                                                    ...checkpoint.submission,
                                                    userId: userId,
                                                    checkpointId: checkpoint.id
                                                })}>
                                                Send
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                : null}
                        </div>
                        <div className='list-container'>
                            <b className='group-title text-center'>
                                Suggested technologies
                            </b>
                            <ul>
                                {checkpoint?.technologies?.['map']?.((technology) => (
                                    <li>{technology}</li>
                                ))}
                            </ul>
                        </div>
                        <div className='list-container'>
                            <b className='group-title text-center'>
                                References and documentation
                            </b>
                            <ul>
                                {checkpoint.sources?.map((source, index) => (
                                    <li key={index}>
                                        <a className="text-blue text-thick"
                                            href={source.link}>{source.title}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
                <div className="list-container">
                    <div className="row justify-right gap-25">
                        <NavLink to="/challenges" className='button-rounded gray text-white'>
                            Return
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChallengeView;
