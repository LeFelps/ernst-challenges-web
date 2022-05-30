import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import logo from '../../logo.svg';

function JobList() {

    return (
        <div className='content'>
            <div className="content-description">
                <p className='text-title'>
                    Job Opportunities
                </p>
                <p className='text-secondary'>
                    Here you will find job openings that fit you an that you'll fit in
                </p>
            </div>
            <div className='job-container'>
                <div className='job-card' style={{ borderLeftColor: '#E05263' }}>
                    <div className='job-title' style={{ color: '#E05263' }}>
                        Desenvolvedor Back-end • Junior
                    </div>
                    <div className='job-info'>
                        <img src={logo} alt="" className='company-logo' />
                        <div className='align-center'>
                            <p className='job-info-name'>Koalify</p>
                            <p className='job-info-value'>R$ 4000,00</p>
                            <div className='job-info-extra'>
                                <FontAwesomeIcon className='icon-margin-right' icon={faPlusCircle} color='#188EB9' />
                                <p>
                                    Benefícios
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className='job-container'>
                <div className='job-card' style={{ borderLeftColor: '#E05263' }}>
                    <div className='job-title' style={{ color: '#E05263' }}>
                        Desenvolvedor Back-end • Sênior
                    </div>
                    <div className='job-info'>
                        <img src={logo} alt="" className='company-logo' />
                        <div className='align-center'>
                            <p className='job-info-name'>Koalify</p>
                            <p className='job-info-value'>R$ 14000,00</p>
                            <div className='job-info-extra'>
                                <FontAwesomeIcon className='icon-margin-right' icon={faPlusCircle} color='#188EB9' />
                                <p>
                                    Benefícios
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='job-container'>
                <div className='job-card' style={{ borderLeftColor: '#37AE49' }}>
                    <div className='job-title' style={{ color: '#37AE49' }}>
                        Server Manager • Junior
                    </div>
                    <div className='job-info'>
                        <img src={logo} alt="" className='company-logo' />
                        <div className='align-center'>
                            <p className='job-info-name'>Koalify</p>
                            <p className='job-info-value'>R$ 4000,00</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='job-container'>
                <div className='job-card' style={{ borderLeftColor: '#188EB9' }}>
                    <div className='job-title' style={{ color: '#188EB9' }}>
                        Desenvolvedor Front-end • Junior
                    </div>
                    <div className='job-info'>
                        <img src={logo} alt="" className='company-logo' />
                        <div className='align-center'>
                            <p className='job-info-name'>Koalify</p>
                            <p className='job-info-value'>R$ 4000,00</p>
                            <div className='job-info-extra'>
                                <FontAwesomeIcon className='icon-margin-right' icon={faPlusCircle} color='#188EB9' />
                                <p>
                                    Benefícios
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='job-container'>
                <div className='job-card' style={{ borderLeftColor: '#E05263' }}>
                    <div className='job-title' style={{ color: '#E05263' }}>
                        Desenvolvedor Back-end • Junior
                    </div>
                    <div className='job-info'>
                        <img src={logo} alt="" className='company-logo' />
                        <div className='align-center'>
                            <p className='job-info-name'>Koalify</p>
                            <p className='job-info-value'>R$ 4000,00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JobList;