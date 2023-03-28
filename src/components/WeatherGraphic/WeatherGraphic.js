import React from 'react';
import './WeatherGraphic.css';
import CloudyDay from './Weather Icons/svg/wi-cloudy.svg';
import RainyDay from './Weather Icons/svg/wi-rain.svg';
import SunnyDay from './Weather Icons/svg/wi-day-sunny.svg';
import PartlyCloudyDay from './Weather Icons/svg/wi-day-cloudy.svg';
const WeatherGraphic = ({ weather } ) => {
    switch(weather) {
        case "Light rain":
            return (
                <div>
                    <img src={RainyDay} width="400px" alt="Rainy Day" />
                </div>
            )   
          break;
        case "Partly cloudy":
            return (
                <div>
                    <img src={PartlyCloudyDay} width="400px" alt="Partly Cloudy Day" />
                </div>
            )   
          break;
        case "Cloudy":
            return (
                <div>
                    <img src={CloudyDay} width="400px" alt="Cloudy Day" />
                </div>
            )   
          break;
        default:
            return (
                <div>
                    <img src={SunnyDay} width="400px" alt="Sunny Day" />
                </div>
            )   
      }
}

export default WeatherGraphic;