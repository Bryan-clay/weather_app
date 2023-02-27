import { useState } from 'react'
import axios from 'axios'
import Search from './components/search'

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

const cityUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=f32a76e25378d19c31a14c805ec96939`;

const zipUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${location}&appid=f32a76e25378d19c31a14c805ec96939`;

const getLocation = (event) => {
  // event.preventDefault()
  if (!isNaN(location).length == 5){
console.log('A zip code was entered')
  }
}


  return (
    <div className="app">
      <div className="container">
        <div className="search">
          <input
          className="search"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            onKeyPress={getLocation}
            placeholder="Enter name of city"
            type="text"
          />
        </div>
        <div className="card">
          <div className="top">
            <div className="location">
              <h3>Seattle</h3>
            </div>
            <div className="temperature">
              <h2>45°F</h2>
            </div>
          </div>
          <div className="second_bottom">
            <div className="detail_label">
              <p>Condition</p>
            </div>
            <div className="humidity_label">
              <p>Humidity</p>
            </div>
            <div className="wind_label">
              <p>Wind</p>
            </div>
          </div>
          <div className="bottom">
            <div className="details">
              <p>cloudy</p>
            </div>
            <div className="humidity">
              <p>80%</p>
            </div>
            <div className="wind">
              <p>15 mph</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
