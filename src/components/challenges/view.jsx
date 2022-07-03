import { faBarsProgress, faCartShopping, faCheck, faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

function ChallengeView() {

    return (
        <div className="content">
            <div className="col gap-15">
                <div className="list-container">
                    <div className="row gap-15">
                        <div>
                            <div className='card-sm'>
                                <FontAwesomeIcon icon={faCartShopping} className="card-image" style={{ color: '#188EB9' }} />
                                <NavLink to="/challenge-form" className='round-icon yellow text-dark card-sm-br'>
                                    <FontAwesomeIcon icon={faPen} className="card-image" />
                                </NavLink>
                            </div>
                        </div>
                        <div className="col gap-15 centered text-small lm-25">
                            <div className="card-description-text">
                                <b>Shopping Cart</b>
                            </div>
                            <div className="card-description-text">
                                <b>Build a working shopping list</b>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='list-container'>
                    <b className='group-title text-center'>
                        Shopping Cart
                    </b>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nunc lacus, tristique ut dolor sit amet, scelerisque congue nisi. Sed et dui id augue porttitor pharetra nec non orci. Ut a egestas nibh, a aliquet nibh. Aenean eu ex viverra, convallis ligula in, consequat mauris. Morbi mollis viverra orci. Etiam feugiat convallis ligula, vel sollicitudin quam pretium vel. Nunc in dignissim orci. Morbi tellus lorem, convallis nec consectetur venenatis, ultricies vel nulla.
                    </p>
                </div>
                <div className='list-container'>
                    <div className="row vertical-center gap-15">
                        <b className='group-title text-center'>
                            Checkpoint
                        </b>
                        <div className="round-icon-sm blue text-white">
                            <b>1</b>
                        </div>
                        <div className="round-icon-sm gray text-white">
                            <b>2</b>
                        </div>
                        <div className="round-icon-sm gray text-white">
                            <b>3</b>
                        </div>
                        <div className="round-icon-sm gray text-white">
                            <b>4</b>
                        </div>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nunc lacus, tristique ut dolor sit amet, scelerisque congue nisi. Sed et dui id augue porttitor pharetra nec non orci.
                    </p>
                    <div className="row gap-35">
                        <div className='input-group-50'>
                            <label htmlFor="username">Submission link</label>
                            <input type="text" className='input-field'
                            // onChange={(e) => {
                            //     setUserData({ ...userData, username: e.target.value })
                            // }} value={userData.username}
                            />
                            <span className='input-description'>
                                This can be either a github repository or codepen example
                            </span>
                        </div>
                        <div className="m-15 vertical-center w-50 gap-15">
                            <div className='round-icon yellow text-black'>
                                <FontAwesomeIcon icon={faBarsProgress} className="card-image" />
                            </div>
                            <div className='round-icon green text-white'>
                                <FontAwesomeIcon icon={faCheck} className="card-image" />
                            </div>
                            <div className="div to-right">
                                <button className="button-rounded green text-white to-right">
                                    Send
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='list-container'>
                    <b className='group-title text-center'>
                        Suggested technologies
                    </b>
                    <ul>
                        <li>ReactJs</li>
                        <li>Redux</li>
                        <li>Saga</li>
                        <li>Firebase</li>
                    </ul>
                </div>
                <div className='list-container'>
                    <b className='group-title text-center'>
                        References and documentation
                    </b>
                    <ul>
                        <li>ReactJs documentation</li>
                        <li>Codepen example</li>
                    </ul>
                </div>
                <div className="list-container">
                    <div className="row justify-right gap-25">
                        <NavLink to="/challenges" className='button-rounded gray text-white'>
                            Return
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChallengeView;