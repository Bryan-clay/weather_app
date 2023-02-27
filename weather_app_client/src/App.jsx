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
  if (event.key ==="Enter") {
    axios.get(cityUrl).then((response) => {
      setData(response.data)
      console.log(response.data)
    })
    setLocation('')
  }
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
            placeholder="Location"
            type="text"
          />
        </div>
        <div className="card">
          <div className="top">
            <div className="location">
              <h3>{data.name}</h3>
            </div>
            <div className="temperature">
              {data.main ? <h2>{data.main.temp}°F</h2> : null}
            </div>
          </div>
          <div className="second_bottom">
            <div className="detail_label">
              <h4>Condition</h4>
            </div>
            <div className="humidity_label">
              <h4>Humidity</h4>
            </div>
            <div className="wind_label">
              <h4>Wind</h4>
            </div>
          </div>
          <div className="bottom">
            <div className="details">
              {data.main ? <p>{data.weather[0].main}</p> : <p>-</p>}
            </div>
            <div className="humidity">
              {data.main ? <p>{data.main.humidity}%</p> : <p>-</p>}
            </div>
            <div className="wind">
              {data.main ? <p>{data.wind.speed} mph</p> : <p>-</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
