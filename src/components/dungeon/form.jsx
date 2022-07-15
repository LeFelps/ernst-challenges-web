import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import consts from '../../consts';
import axios from 'axios';

function OpponentForm({ editOpponent, ...props }) {

    const [opponent, setOpponent] = useState({
        id: undefined,
        mame: null,
        level: null,
        personality: null,
        about: null
    })

    const [loadingOpponent, setLoadingOpponent] = useState(false)

    const levels = {
        EASY: "Easy",
        MEDIUM: "Medium",
        HARD: "Hard"
    }

    const personalities = {
        PRACTICAL: "Practical",
        THEORICAL: "Theorical",
        SPECIALIST: "Specialist"
    }


    useEffect(() => {
        if (editOpponent?.id) {
            setLoadingOpponent(true)
            axios.get(`${consts.LOCAL_API}/opponents/${editOpponent.id}`)
                .then((resp) => {
                    let opponent = resp.data
                    setOpponent(opponent)
                })
                .catch(() => {

                })
                .then(() => {
                    setLoadingOpponent(false)
                })
        }
    }, [editOpponent])

    return (
        <div className="content">
            <form className="form-container" onSubmit={(e) => {

                let type = "post"

                if (opponent.id) {
                    type = "put"
                }

                axios[type](`${consts.LOCAL_API}/opponents`, opponent)
                    .then((resp) => {

                    })
                    .catch((err) => {

                    });
            }}>
                <div>
                    <div className="form-title">New Opponent</div>
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