function ChallengeView() {

    return (
        <div className="content">
            <div className="col gap-15">
                <div className='list-container'>
                    <b className='group-title text-center'>
                        Shopping Cart
                    </b>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nunc lacus, tristique ut dolor sit amet, scelerisque congue nisi. Sed et dui id augue porttitor pharetra nec non orci. Ut a egestas nibh, a aliquet nibh. Aenean eu ex viverra, convallis ligula in, consequat mauris. Morbi mollis viverra orci. Etiam feugiat convallis ligula, vel sollicitudin quam pretium vel. Nunc in dignissim orci. Morbi tellus lorem, convallis nec consectetur venenatis, ultricies vel nulla.
                    </p>
                </div>
                <div className='list-container'>
                    <b className='group-title text-center'>
                        First Checkpoint
                    </b>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nunc lacus, tristique ut dolor sit amet, scelerisque congue nisi. Sed et dui id augue porttitor pharetra nec non orci.
                    </p>
                    <div className="input-row">
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
            </div>
        </div>
    );
}

export default ChallengeView;