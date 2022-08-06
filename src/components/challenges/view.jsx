import * as fa from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import consts from "../../consts";

function ChallengeView() {

    const { id } = useParams()

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

    useEffect(() => {
        axios.get(`${consts.LOCAL_API}/challenges/${id}`)
            .then(resp => {
                setChallenge(resp.data || {})

            })
    }, [])

    const [selectedCheckpoint, setSelectedCheckpoint] = useState(0)

    return (
        <div className="content">
            <div className="col gap-15">
                <div className="list-container">
                    <div className="row gap-15">
                        <div>
                            <div className='card-sm'>
                                <FontAwesomeIcon icon={fa[challenge.icon]} className="card-image" style={{ color: challenge.category?.accentColor }} />
                                <NavLink to={`/challenge-form/${challenge.id}`} className='round-icon yellow text-dark card-sm-br'>
                                    <FontAwesomeIcon icon={fa.faPen} className="card-image" />
                                </NavLink>
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
                        {challenge.checkpoints?.map((c, index) => (
                            <button type="button" className={`round-icon-sm ${index === selectedCheckpoint ? 'blue' : 'gray'} text-white pointer`}
                                onClick={() => {
                                    setSelectedCheckpoint(index)
                                }}>
                                <b>{index + 1}</b>
                            </button>
                        ))}
                    </div>
                </div>
                {challenge.checkpoints?.map((checkpoint, index) => (
                    <div hidden={index !== selectedCheckpoint}>
                        <div className='container'>
                            <p>
                                {checkpoint.description}
                            </p>
                            <div className="row gap-10">
                                <div className='input-group-50'>
                                    <label>Submission link</label>
                                    <input type="text" className='input-field'
                                    // onChange={(e) => {
                                    //     setUserData({ ...userData, username: e.target.value })
                                    // }} value={userData.username}
                                    />
                                    <span className='input-description'>
                                        This can be either a github repository or codepen example
                                    </span>
                                </div>
                                <div className="vertical-center w-50 gap-15 row">
                                    {checkpoint.complete ?
                                        <button type="button" className='round-icon green text-white pointer'
                                            onClick={() => {
                                                let checkpointList = [...challenge.checkpoints]
                                                checkpointList[index].complete = false
                                                setChallenge({ ...challenge, checkpoint })
                                            }}>
                                            <FontAwesomeIcon icon={fa.faCheck} className="card-image" />
                                        </button>
                                        :
                                        <button type="button" className='round-icon yellow text-black pointer'
                                            onClick={() => {
                                                let checkpointList = [...challenge.checkpoints]
                                                checkpointList[index].complete = true
                                                setChallenge({ ...challenge, checkpoint })
                                            }}>
                                            <FontAwesomeIcon icon={fa.faBarsProgress} className="card-image" />
                                        </button>
                                    }
                                    <div className="div to-right">
                                        <button className="button-rounded green text-white to-right">
                                            Send
                                        </button>
                                    </div>
                                </div>
                            </div>
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
                                {checkpoint.references?.map((reference) => (
                                    <li>
                                        <a className="text-blue text-thick"
                                            href={reference.link}>{reference.title}</a>
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