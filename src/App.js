import './App.css'
import axios from 'axios'
import CityName from './components/CityName/CityName'
import React from 'react'
import Temperature from './components/Temperature/Temperature'
import WeatherGraphic from './components/WeatherGraphic/WeatherGraphic'
import ZIPCodeForm from './components/ZIPCodeForm/ZIPCodeForm'

const initialState = {
  input: '',
  temp: '62',
  temp_max: '88',
  temp_min: '45',
  city: 'Oceanside',
  weather: 'Sunny'
}

class App extends React.Component {
  constructor() {
    super()
    this.state = initialState
  }
  
  onInputChange = (event) => {
    this.setState({input: event.target.value})
  }
  
  onButtonSubmit = () => {
    
    console.log(process.env.API_KEY)
    const options = {
      method: 'GET',
      url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
      params: {q: this.state.input, days: '1'},
      headers: {
        'X-RapidAPI-Key': process.env.API_KEY,
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
      }
    };
    axios.request(options)
    .then(weather => {
      console.log(weather.data);
      this.setState({ temp: Math.round(weather.data.current.temp_f),
                      temp_max: Math.round(weather.data.forecast.forecastday[0].day.maxtemp_f),
                      temp_min: Math.round(weather.data.forecast.forecastday[0].day.mintemp_f),
                      city: weather.data.location.name + ', ' + weather.data.location.region,
                      weather: weather.data.current.condition.text })
    }).catch(function (error) {
      console.error(error);
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <WeatherGraphic 
            weather={this.state.weather}/>
          <CityName 
            city={this.state.city}/>
          <Temperature 
            temp={this.state.temp} 
            temp_max={this.state.temp_max} 
            temp_min={this.state.temp_min}/>
          <ZIPCodeForm 
            onInputChange={this.onInputChange} 
            onButtonSubmit={this.onButtonSubmit} />
        </header>
      </div>
    );
  }
}

export default App;
