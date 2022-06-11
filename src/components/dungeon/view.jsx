import { faCircleCheck, faClock, faPlus, faShield, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from '../../logo.svg';

function OpponentView() {

    return (
        <div className="content">
            <div className="col gap-25">

                <div className="list-container col gap-15">
                    <div className="row">
                        <span className="group-title">Your opponent is...</span>
                        <button className="add-button to-right">
                            <FontAwesomeIcon icon={faPlus} />
                            <span>Add opponent</span>
                        </button>
                    </div>
                    <div className='long-card highlight-left-green'>
                        <div className='long-card-title text-green'>
                            Coding Goblin
                        </div>
                        <div className="col gap-25">
                            <div className='long-card-content gap-25'>
                                <img src={logo} alt="" className='round-img' />
                                <div className="col justify-center">
                                    <div className='row gap-15'>
                                        <span className='info-name'>Personality</span>
                                        <span className='my-auto'>Technical</span>
                                    </div>
                                    <div className='row gap-15'>
                                        <span className='info-name'>Difficulty</span>
                                        <span className='my-auto'>Easy</span>
                                    </div>
                                </div>
                            </div>
                            <div className='long-card-content'>
                                <div className="col justify-center">
                                    <span className='info-name'>About</span>
                                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nunc lacus, tristique ut dolor sit amet, scelerisque congue nisi. Sed et dui id augue porttitor pharetra nec non orci. Ut a egestas nibh, a aliquet nibh. Aenean eu ex viverra, convallis ligula in, consequat mauris. Morbi mollis viverra orci.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="list-container col gap-15">
                    <div className="row">
                        <span className="group-title">Choose tour weapons!</span>
                    </div>

                </div>
                <div className="list-container col gap-15">
                    <div className="row gap-25">
                        <span className="group-title">Battle reports</span>
                    </div>
                    <div className="col gap-35 p-25">
                        <div className='row gap-35'>
                            <div className="round-card w-50 gap-15">
                                <FontAwesomeIcon icon={faClock} className="text-bigger" />
                                <span className="card-title">
                                    Average answer time
                                </span>
                                <span className='card-value purple'>45s</span>
                            </div>
                            <div className="round-card w-50 gap-15">
                                <FontAwesomeIcon icon={faStar} className="text-bigger" />
                                <span className="card-title">
                                    Average score
                                </span>
                                <span className='card-value green'>80%</span>
                            </div>
                        </div>
                        <div className='row gap-35'>
                            <div className="round-card w-50 gap-15">
                                <FontAwesomeIcon icon={faClock} className="text-bigger" />
                                <span className="card-title">
                                    Successfull attacks
                                </span>
                                <span className='card-value red'>85%</span>
                            </div>
                            <div className="round-card w-50 gap-15">
                                <FontAwesomeIcon icon={faShield} className="text-bigger" />
                                <span className="card-title">
                                    Successfull defences
                                </span>
                                <span className='card-value blue'>60%</span>
                            </div>
                        </div>
                        <div className='row gap-35'>
                            <div className="round-card w-50 gap-15">
                                <FontAwesomeIcon icon={faCircleCheck} className="text-bigger" />
                                <span className="card-title">
                                    Completed fights
                                </span>
                                <span className='card-value orange'>107</span>
                            </div>
                            <div className="w-50"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OpponentView;