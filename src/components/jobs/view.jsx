import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import logo from '../../logo.svg';
import { NavLink } from 'react-router-dom';

function JobView() {

    return (
        <div className="content">
            <div className="col gap-15">
                <div className="list-container col gap-15">
                    <div className='long-card highlight-left-blue'>
                        <div className='long-card-title text-blue'>
                            Front-end developer • Junior
                        </div>
                        <div className='long-card-content gap-15'>
                            <img src={logo} alt="" className='company-logo' />
                            <div className='align-center'>
                                <p className='info-name'>Ernest Young</p>
                                <p className='info-value'>R$ 4000,00</p>
                                <div className='info-extra'>
                                    <FontAwesomeIcon className='icon-margin-right' icon={faPlusCircle} color='#188EB9' />
                                    <p>
                                        Benefícios
                                    </p>
                                </div>
                            </div>
                        </div>
                        <NavLink to="/job-form" className='edit-button long-card-br'>
                            <FontAwesomeIcon icon={faPen} className="card-image" />
                        </NavLink>
                    </div>
                    <div className="row centered gap-25">
                        <button className="button-flat green text-white">Apply for Job</button>
                        <button className="button-flat blue text-white">Applications</button>
                    </div>
                </div>
                <div className='list-container'>
                    <b className='group-title text-center'>
                        Inventory Highlights
                    </b>
                    <ul>
                        <li>Junior Level</li>
                        <li>Remote (São Paulo, Brazil)</li>
                    </ul>
                </div>
                <div className='list-container'>
                    <b className='group-title text-center'>
                        Description
                    </b>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nunc lacus, tristique ut dolor sit amet, scelerisque congue nisi. Sed et dui id augue porttitor pharetra nec non orci. Ut a egestas nibh, a aliquet nibh. Aenean eu ex viverra, convallis ligula in, consequat mauris. Morbi mollis viverra orci. Etiam feugiat convallis ligula, vel sollicitudin quam pretium vel. Nunc in dignissim orci. Morbi tellus lorem, convallis nec consectetur venenatis, ultricies vel nulla.
                    </p>
                </div>
                <div className='list-container'>
                    <b className='group-title text-center'>
                        What will you do?
                    </b>
                    <ul>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nunc lacus, tristique ut dolor sit amet, scelerisque congue nisi</li>
                        <li>Sed et dui id augue porttitor pharetra nec non orci. Ut a egestas nibh, a aliquet nibh. Aenean eu ex viverra, convallis ligula in, consequat mauris. Morbi mollis viverra orci.</li>
                        <li>Etiam feugiat convallis ligula, vel sollicitudin quam pretium vel. Nunc in dignissim orci. Morbi tellus lorem, convallis nec consectetur venenatis, ultricies vel nulla.</li>
                    </ul>
                </div>
                <div className='list-container'>
                    <b className='group-title text-center'>
                        Compensation
                    </b>
                    <ul>
                        <li>R$ 4000,00 Monthly pay</li>
                        <li>Food vouchers</li>
                    </ul>
                </div>
                <div className='list-container'>
                    <b className='group-title text-center'>
                        Requirements
                    </b>
                    <ul>
                        <li>ReactJs</li>
                        <li>Redux</li>
                        <li>Saga</li>
                        <li>Firebase</li>
                    </ul>
                </div>
                <div className='list-container'>
                    <div className="row align-right gap-25">
                        <NavLink to="/jobs" className='button-rounded gray text-white'>
                            Return
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JobView;