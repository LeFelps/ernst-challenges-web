import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import ToastContext from "./ToastContext";


function ToastContainer() {

    const { toastList, setToastList } = useContext(ToastContext)

    function Toast({ toast, ...props }) {

        function unactivateItem(timeout) {
            setTimeout(() => {
                setAnimation("toast-out")
            }, timeout);
            setTimeout(() => {
                let newList = [...toastList]
                let index = toastList.indexOf(toast)
                newList.splice(index, 1)
                setToastList(newList)
            }, timeout + 500);
        }

        const [animation, setAnimation] = useState("toast")

        useEffect(() => {
            unactivateItem(2000)
        })

        return (
            <div className={`white floating w-100 p-15 rounded-5 ${animation}`} onClick={() => {
                unactivateItem(0)
                
            }}>
                <div className="row gap-15 vertical-center">
                    <FontAwesomeIcon size="2x" icon={toast.icon} style={{ color: toast.color }} />
                    <span className="w-100">
                        {toast.message}
                    </span>
                </div>
            </div>
        )

    }

    return (
        <div className="toast-area col gap-15 p-15">
            {toastList.map((toast) => (
                <Toast toast={toast} />
            ))}
        </div>
    );
}

export default ToastContainer;