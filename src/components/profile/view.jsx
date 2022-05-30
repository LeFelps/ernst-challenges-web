import React from 'react';
import logo from '../../logo.svg';

function ProfileView() {

    return (
        <div className='content'>
            <div className='profile-info'>
                <img src={logo} alt="" className='profile-picture' style={{ borderColor: '#188EB9' }} />
                <div className='align-center'>
                    <p className='profile-info-name' >Fellipe Corominas Pereira</p>
                    <p className='profile-info-position' >Front-End Developer • Junior</p>
                    <div className='profile-info-extra'>
                    </div>
                </div>
            </div>
            <div className='profile-call-to-action'>
                <button className='profile-apply-button'>
                    <p>
                        I am available!
                    </p>
                </button>
            </div>
            <div className='profile-section'>
                <p className="group-title">
                    Inventory
                </p>
            </div>
            <div className='profile-section'>
                <p className="group-title">
                    Work Experience
                </p>
                <div className="form-card">

                </div>
            </div>
            <div className='profile-section'>
                <p className="group-title">
                    Education
                </p>
                <div className="form-card">

                </div>
            </div>
            <div className='profile-section'>
                <p className="group-title">
                    Your skills
                </p>
                <div className="skills">
                    <div className="profile-skill">
                        <input type="checkbox" name="check1" id="check1" />
                        <label for="check1">Javascript</label>
                    </div>
                    <div className="profile-skill">
                        <input type="checkbox" name="check2" id="check2" />
                        <label for="check2">ReactNative</label>
                    </div>
                    <div className="profile-skill">
                        <input type="checkbox" name="check3" id="check3" />
                        <label for="check3">IOS</label>
                    </div>
                    <div className="profile-skill">
                        <input type="checkbox" name="check4" id="check4" />
                        <label for="check4">CSS</label>
                    </div>
                </div>
            </div>
            <div className='profile-card-preview'>
            </div>
        </div>
    );
}

export default ProfileView;