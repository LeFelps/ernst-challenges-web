import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import consts from "../../consts";
import Spinner from "../utilities/loading/Spinner";
import Modal from "../utilities/modals/Modal";

function CategoryModal({ show, close, afterSave, ...props }) {

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

    const initialCategory = {
        id: null,
        name: null,
        accentColor: accentColors[0],
    }

    const [editCategory, setEditCategory] = useState({ ...initialCategory })

    const [loadingChanges, setLoadingChanges] = useState(false)

    useEffect(() => {
        props.category && setEditCategory({ ...props.category })
    }, [props.category])

    return (
        <Modal show={show} close={() => close()} >
            <form className='col gap-25'
                onSubmit={(e) => {
                    e.preventDefault()
                    e.stopPropagation()

                    let categoryData = { ...editCategory }

                    let type = "post"

                    if (categoryData.id)
                        type = "put"

                    setLoadingChanges(true)
                    axios[type](`${consts.LOCAL_API}/categories`, categoryData)
                        .then((res) => {
                            afterSave(res.data)
                        })
                        .catch(() => {
                        })
                        .then(() => {
                            setLoadingChanges(false)
                            close()
                        })
                }}>
                <div className="row w-100">
                    <b className="text-huge">
                        New Category
                    </b>
                    <div className="round-icon white text-light to-right text-bigger pointer"
                        onClick={() => close()}
                    >
                        <FontAwesomeIcon icon={faTimes} />
                    </div>
                </div>
                <div className="row w-100 vertical-bottom">
                    <div className='input-group-50'>
                        <label>Name</label>
                        <input type="text" className='input-field' required disabled={loadingChanges}
                            onChange={(e) => {
                                setEditCategory({ ...editCategory, name: e.target.value })
                            }} value={editCategory?.name || ""}
                        />
                    </div>
                    <b className="text-bigger w-50 text-center p-5" style={{ color: editCategory.accentColor }}>
                        {editCategory?.name || "Text Preview"}
                    </b>
                </div>
                <div className='input-group-50 flex gap-10'>
                    <div>
                        <label>Accent Color</label>
                    </div>
                    <div className='row gap-10 wrap'>
                        {accentColors.map((accentColor, index) => (
                            <div type="checkbox" className="color-box" key={index} style={{ backgroundColor: accentColor }}
                                onClick={() => {
                                    if (!loadingChanges)
                                        setEditCategory({ ...editCategory, accentColor: accentColor })
                                }}>
                                {editCategory.accentColor === accentColor ?
                                    <FontAwesomeIcon icon={faCheck} /> : null}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="row justify-right vertical-center gap-25">
                    {loadingChanges ?
                        <Spinner size="sm" color='dark' /> : null}
                    <button className="button-rounded green text-white" type='submit' disabled={loadingChanges}>
                        Save
                    </button>
                </div>
            </form>
        </Modal>
    )
}

export default CategoryModal;