import React, { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import consts from '../../consts';
import axios from 'axios';
import { getArchetipes, getDifficultyLevels } from '../utilities/functions/knownLists';

function OpponentForm({ ...props }) {

    const { id } = useParams()

    const [opponent, setOpponent] = useState({
        id: undefined,
        name: null,
        level: null,
        personality: null,
        about: null
    })

    const [loadingOpponent, setLoadingOpponent] = useState(false)

    const levels = getDifficultyLevels()
    const personalities = getArchetipes()

    useEffect(() => {
        if (id) {
            setLoadingOpponent(true)
            axios.get(`${consts.LOCAL_API}/opponents/${id}`)
                .then((resp) => {
                    setOpponent(resp.data || {})
                })
                .catch(() => {

                })
                .then(() => {
                    setLoadingOpponent(false)
                })
        }
    }, [id])

    return (
        <div className="content">
            <form className="form-container" onSubmit={(e) => {
                e.preventDefault()
                e.stopPropagation()

                let type = "post"
                if (opponent.id) type = "put";

                setLoadingOpponent(false)
                axios[type](`${consts.LOCAL_API}/opponents`, opponent)
                    .then((resp) => {
                        setOpponent(resp.data || {})
                    })
                    .catch((err) => {

                    })
                    .then(() => {
                        setLoadingOpponent(false)
                    });
            }}>
                <div>
                    <div className="form-title">
                        {opponent.id ?
                            "Edit Opponent"
                            :
                            "New Opponent"
                        }
                    </div>
                    <div className="input-section">
                        <div className="row gap-35">
                            <div className='input-group-50'>
                                <label>Name</label>
                                <input type="text" className='input-field' required disabled={loadingOpponent}
                                    onChange={(e) => {
                                        setOpponent({ ...opponent, name: e.target.value })
                                    }} value={opponent.name || ""}
                                />
                            </div>
                        </div>
                        <div className="row gap-35">
                            <div className='input-group-50'>
                                <label>Level</label>
                                <select className='input-field' required disabled={loadingOpponent}
                                    onChange={(e) => {
                                        setOpponent({ ...opponent, level: e.target.value })
                                    }} value={opponent.level || ""}
                                >
                                    <option value="">Select...</option>
                                    {Object.keys(levels).map((level, index) => (
                                        <option key={index} value={level}>{levels[level]}</option>
                                    ))}
                                </select>
                            </div>
                            <div className='input-group-50'>
                                <label>Personality</label>
                                <select className='input-field' required disabled={loadingOpponent}
                                    onChange={(e) => {
                                        setOpponent({ ...opponent, personality: e.target.value })
                                    }} value={opponent.personality || ""}
                                >
                                    <option value="">Select...</option>
                                    {Object.keys(personalities).map((personality, index) => (
                                        <option key={index} value={personality}>{personalities[personality]}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="row gap-35">
                            <div className='input-group'>
                                <label>About</label>
                                <textarea type="text" className='input-field textarea' required disabled={loadingOpponent}
                                    onChange={(e) => {
                                        setOpponent({ ...opponent, about: e.target.value })
                                    }} value={opponent.about || ""}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-right gap-25">
                    <NavLink to="/dungeon" className='button-rounded gray text-white'>
                        Cancel
                    </NavLink>
                    <button type="submit" className="button-rounded green text-white ">
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
}

export default OpponentForm;