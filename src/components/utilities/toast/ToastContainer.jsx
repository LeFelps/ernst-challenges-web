import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { useEffect } from "react";
import ToastContext from "./ToastContext";


function ToastContainer() {


    const { toastList, setToastList } = useContext(ToastContext)

    useEffect(() => {
        console.log(toastList.filter(t => t.active === true))
        if (toastList.filter(t => t.active === true)?.length <= 0) {
            // setToastList([])
        }
    }, [toastList])

    function Toast({ toast, index, ...props }) {

        function unactivateItem() {
            let newList = [...toastList]
            newList[index].active = false
            setToastList(newList)
            setTimeout(function () {
                let newList = [...toastList]
                newList[index].splice(index, 1)
                setToastList(newList)
            }, 500)
        }

        useEffect(() => {
            if (toast.active) {
                setTimeout(function () {
                    unactivateItem(index)
                }, 2000)
            }
        })

        return (
            <div className={`filled-container w-100 p-15 rounded-5 ${toast.active ? ' toast ' : ' toast-out '}`} onClick={() => {
                unactivateItem()
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
            {toastList.map((toast, index) => (
                <Toast toast={toast} index={index} />
            ))}
        </div>
    );
}

export default ToastContainer;