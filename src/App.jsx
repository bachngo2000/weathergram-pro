import { useState, useEffect } from 'react'
import Header from './Components/Header/Header';
import Navbar from './Components/NavBar/NavBar';
import Card from './Components/Card/Card';
import './App.css'
import List from './Components/List/List';
const API_KEY = import.meta.env.VITE_APP_API_KEY;


function App() {
  const [currWeather, setCurrWeather] = useState({})
  const  [inputs, setInputs] = useState({
    startDate: "2023-03-19",
    endDate: "2023-03-25",
    cloudCoverage: null
  }); 

  useEffect(() => {
    const getCurrWeather = async () => {
      const response = await fetch(`https://api.weatherbit.io/v2.0/current?&city=OKC&country=US&units=I&key=${API_KEY}`)
      const json = await response.json()
      setCurrWeather(json.data[0]);
      
    }
    getCurrWeather().catch(console.error);
  },[])

  const handleChange = (event) => {
    const {name, value} = event.target;
    setInputs((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setRenderInputData(true);
  }

  return (
    <div className="App">
      <div className='navigation-bar'>
        <Header />
        <Navbar />
      </div>
      <div className='main'>
        <div className='feature-cards'>
          <Card 
            descr={currWeather.city_name}
            title={"🕢" + currWeather.ob_time}
          />
          <Card 
            descr={"🌡️" + currWeather.temp + "°F"}
            title={"💨" + currWeather.wind_spd + " m/s"}
          />
          <Card 
            descr={"🌧️" + currWeather.precip + " mm/hr"}
            title={"🌡️💧 " + currWeather.dewpt  + "°F"}
          />
        </div>

        <div className='list-container'>
          <div className='filters'> 
            <label className='attr-label'>
              Start Date: </label>
              <input
                type="date"
                name='startDate'
                onChange={handleChange}
              />
            {/* </label> */}
            <label className='attr-label'>
              End Date: </label>
              <input
                type="date"
                name='endDate'
                onChange={handleChange}
              />
            {/* </label>   */}
            <label className='attr-label'>
              Wind Speed 💨: </label>
              <input
                type="range"
                min="0" 
                max="100"
                name='windSpeed'
                onChange={handleChange}
              />
            {/* </label> */}
          </div>
          <table className='data-header'>
            <tbody>
              <tr>
                <td className='data'>Date</td>            
                <td className='data'>Low Temp</td>
                <td className='data'>High Temp</td>
                <td className='data'>Wind Speed</td>
                <td className='data'> Cloud Coverage</td>
              </tr>  
            </tbody>       
          </table>

          <List 
            inputs={inputs}
          />
        </div>
      </div>
    </div>
  )
}

export default App
