import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as fa from '@fortawesome/free-solid-svg-icons';

function OpponentForm() {



    return (
        <div className="content">
            <div className="form-container">
                <div className="row push-right">
                    <button className="button-rounded gray text-white ">
                        Cancel
                    </button>
                    <button className="button-rounded green text-white ">
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}

export default OpponentForm;