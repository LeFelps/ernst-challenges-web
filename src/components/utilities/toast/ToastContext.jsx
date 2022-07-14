import React, { createContext, useState } from 'react';
import { faCircleCheck, faCircleExclamation, faCircleInfo, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const ToastContext = createContext();

export function ToastProvider({ children }) {

    const [toastList, setToastList] = useState([])

    function getId() {
        let id = toastList[toastList?.length - 1]?.id || 0
        return id + 1
    }

    const icons = {
        check: faCircleCheck,
        times: faTimesCircle,
        exclamation: faCircleExclamation,
        info: faCircleInfo
    }

    function success(message) {
        let newToast = {
            message: message,
            icon: icons.check,
            color: "#7DD30F",
            active: true,
            id: getId()
        }
        setToastList([...toastList, newToast])
    }

    function error(message) {
        let newToast = {
            message: message,
            icon: icons.times,
            color: "#D6000D",
            active: true,
            id: getId()
        }
        setToastList([...toastList, newToast])
    }

    function warning(message) {
        let newToast = {
            message: message,
            icon: icons.exclamation,
            color: "#E5D82A",
            active: true,
            id: getId()
        }
        setToastList([...toastList, newToast])
    }

    function info(message) {
        let newToast = {
            message: message,
            icon: icons.info,
            color: "#188EB9",
            active: true,
            id: getId()
        }
        setToastList([...toastList, newToast])
    }

    function custom(message, icon, color) {
        let newToast = {
            message: message,
            icon: icon,
            color: color,
            active: true,
            id: getId()
        }
        setToastList([...toastList, newToast])
    }

    function clear() {
        setToastList([])
    }

    const toast = {
        success: success,
        error: error,
        warning: warning,
        info: info,
        custom: custom,
        clear: clear
    }

    return (
        <ToastContext.Provider value={{ setToastList, toastList, toast }}>{children}</ToastContext.Provider>
    );
}

export default ToastContext;