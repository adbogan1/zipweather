import logo from './logo.svg';
import './App.css';
import ZIPCodeForm from './components/ZIPCodeForm/ZIPCodeForm'
import WeatherGraphic from './components/WeatherGraphic/WeatherGraphic'
import Temperature from './components/Temperature/Temperature'

const initialState = {
  input: '',
  imageURL: '',
  weather: ''
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <WeatherGraphic />
        <Temperature />
        <ZIPCodeForm 
          /*onInputChange={this.onInputChange} 
          onButtonSubmit={this.onButtonSubmit} *//>
      </header>
    </div>
  );
}

export default App;
