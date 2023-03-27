import React from 'react';
import './WeatherGraphic.css';
import SunnyDay from './Weather Icons/svg/wi-day-sunny.svg';
const WeatherGraphic = (/*{ onInputChange, onButtonSubmit } */) => {
    return (
        <div>
            <img src={SunnyDay} width="400px" alt="Sunny Day" />
        </div>
    )
}

export default WeatherGraphic;