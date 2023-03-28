import React from 'react';
import './CityName.css';
const Temperature = ({ city }) => {
    return (
        <div>
            <div className="cityFont db white-80 ttu ph3 mb3">{city}</div>
        </div>
    )
}

export default Temperature;