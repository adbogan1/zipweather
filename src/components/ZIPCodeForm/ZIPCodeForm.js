import React from 'react';
import './ZIPCodeForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div>
            <div className="mb3">
                <label for="username" className="db f5 white-80 ttu ph2 mb2">Zip Code</label>
                <input type="text" name="username" className="center input-reset db w-50 mw-50 white b pv2 ph3 bg-white-30 hover-bg-white-70 hover-gray outline-0 bn br-pill" onChange={onInputChange}/>
            </div>
            <div>
            <button className="center input-reset db w-40 light-gray f6 b ttu tracked pv3 ph2 pointer bg-dark-blue hover-bg-blue bn br-pill" onClick={onButtonSubmit}>Enter</button>
          </div>
        </div>
    )
}

export default ImageLinkForm;