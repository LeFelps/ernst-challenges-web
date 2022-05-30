import axios from 'axios';
import React from 'react';


function saveLogin() {
    const user = localStorage.getItem('user');
    // localStorage.removeItem('user');

    // axios.get('')
    //     .then(() => {

    //     })
    //     .catch(() => {

    //     })

    localStorage.setItem('user', JSON.stringify());
}

function Signup() {
    return (
        <div>
        </div >
    );
}

export default Signup;