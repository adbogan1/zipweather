import logo from './logo.svg'
import './App.css'
import axios from 'axios'
import Config from "./config.json"
import ZIPCodeForm from './components/ZIPCodeForm/ZIPCodeForm'
import WeatherGraphic from './components/WeatherGraphic/WeatherGraphic'
import Temperature from './components/Temperature/Temperature'
import React from 'react'

const initialState = {
  input: '',
  imageURL: '',
  weather: '',
  weatherData: ''
}

class App extends React.Component {
  constructor() {
    super()
    this.state = initialState
  }
  
  onInputChange = (event) => {
    this.setState({input: event.target.value})
    console.log(this.state.input)
  }
  
  onButtonSubmit = () => {
    axios.get('http://api.openweathermap.org/geo/1.0/zip?zip=' + this.state.input + ',US&appid=' + Config.API_KEY)
    // axios automatically changes the response to JSON
    .then(weather => {
       this.setState({ weatherData: weather.data}, () => {
          console.log(this.state.weatherData) // weather data
       })
    })
    .catch(err => { console.log(err) })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <WeatherGraphic />
          <Temperature />
          <ZIPCodeForm 
            onInputChange={this.onInputChange} 
            onButtonSubmit={this.onButtonSubmit} />
        </header>
      </div>
    );
  }
}

export default App;
