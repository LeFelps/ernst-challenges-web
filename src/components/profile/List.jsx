import React from 'react';
import profileLogo from '../../profile.svg';

function ProfileList() {

    return (
        <div className="content">
            <div className="content-description">
                <p className='text-title'>
                    The Heros
                </p>
                <p className='text-secondary'>
                    Look at how your fellow adventurers are doing!
                </p>
            </div>
            <div className="list-container col gap-25">
                <div className='long-card highlight-left-blue'>
                    <div className='long-card-title'>
                        Fellipe Corominas Pereira
                    </div>
                    <div className='long-card-content gap-15'>
                        <img src={profileLogo} alt="" className='round-img highlight-blue' />
                        <div className='align-center'>
                            <p className='info-name text-blue'>Front-end developer • Junior</p>
                            <p className='info-value'>1 year, 9 months experience</p>
                            <p>React.Js</p>
                        </div>
                    </div>
                </div>
                <div className='long-card highlight-left-pink'>
                    <div className='long-card-title'>
                        Fellipe Corominas Pereira
                    </div>
                    <div className='long-card-content gap-15'>
                        <img src={profileLogo} alt="" className='round-img highlight-pink' />
                        <div className='align-center'>
                            <p className='info-name text-pink'>Back-end developer • Junior</p>
                            <p className='info-value'>1 year, 9 months experience</p>
                            <p>Express.Js</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileList;
