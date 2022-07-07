import React from 'react';

function Spinner({ color = 'dark', size = 'md', ...props }) {

    const sizes = {
        sm: '20px',
        md: '30px',
        lg: '45px'
    }

    return (
        <svg style={{ height: sizes[size], width: sizes[size] }} viewBox="0 0 22.61 22.6" className='spinner'>
            <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                    <path className={color} d="M11.3,19.6A8.3,8.3,0,1,1,17.17,5.43L19.3,3.31a11.3,11.3,0,1,0,0,16l-2.13-2.12A8.28,8.28,0,0,1,11.3,19.6Z" />
                    <path style={{ fill: "#FFF", opacity: '0.4' }} d="M22.61,11.3a11.28,11.28,0,0,1-3.31,8l-2.13-2.12a8.28,8.28,0,0,0,0-11.74L19.3,3.31A11.28,11.28,0,0,1,22.61,11.3Z" />
                </g>
            </g>
        </svg>
    );
}

export default Spinner;