import React from 'react';
import './Temperature.css';
const Temperature = ({ temp, temp_max, temp_min }) => {
    return (
        <div>
            <div className="tempFont db white-80 ttu ph3 mb3">{temp}&#176;</div>
            <div className="db f3 white-80 ttu ph3 mb3">{temp_max}&#176; / {temp_min}&#176;</div>
        </div>
    )
}

export default Temperature;