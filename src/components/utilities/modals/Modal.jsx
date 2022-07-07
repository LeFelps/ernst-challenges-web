import React from 'react';
import { useEffect } from 'react';

function Modal({ show, close, ...props }) {

    useEffect(() => {
        if (show) {
            document.body.style.overflow = 'hidden';
        }
        return function cleanup() {
            document.body.style.overflow = 'auto';
        }
    }, [show])

    return (
        <div hidden={!show} className="modal-bg" id="modal-background"
            onClick={(e) => {
                if (
                    e.target.id === "modal-background" ||
                    e.target.id === "modal-area" ||
                    e.target.id === "modal-content"
                )
                    close()
            }}>
            <div className="flex justify-center w-100" id="modal-area">
                <div className='modal-content' id="modal-content">
                    <div className='bg-white p-20 w-100 radius-5'>
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;