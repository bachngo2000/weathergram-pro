import "./WeatherDetails.css";
import React, { Component, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const API_KEY = import.meta.env.VITE_APP_API_KEY;

const WeatherDetails = () => {
    let params = useParams();
    const [allDetails, setAllDetails] = useState(null);
    
    let start = params.date;
    let date = Number(start.slice(8)) + 1;
    let end = start.slice(0,8)+date; 
    
    useEffect(() => {
        const getWeatherHist = async () => {
        const response = await fetch(`https://api.weatherbit.io/v2.0/history/daily?city=OKC&start_date=${params.date}&end_date=${end}&key=${API_KEY}`)
        const json = await response.json()
        setAllDetails(json);
        }
        getWeatherHist().catch(console.error);
    },[])

    return (
     <div>
        { allDetails ? (
            <div className="weatherDetails">
                <h1>{allDetails.city_name}</h1>
                <h2>Date: {allDetails.data[0].datetime}</h2>
                <h4>State: {allDetails.state_code}, Time Zone: {allDetails.timezone}</h4>

                <table>
                    <tbody>
                        <tr>
                            <th>Latitude</th>
                            <td>{allDetails.lat}</td>
                        </tr>
                        <tr>
                            <th>Longitude</th>
                            <td>{allDetails.lon}</td>
                        </tr>
                        <tr>
                            <th>Average temperature</th>
                            <td>{allDetails.data[0].temp} °C</td>
                        </tr>
                        <tr>
                            <th>Average cloud coverage</th>
                            <td>{allDetails.data[0].clouds} %</td>
                        </tr>
                        <tr>
                            <th>Max Temp</th>
                            <td>{allDetails.data[0].max_temp} °C</td>
                        </tr>
                        <tr>
                            <th>Min Temp</th>
                            <td>{allDetails.data[0].min_temp} °C</td>
                        </tr>
                        <tr>
                            <th>Average pressure</th>
                            <td>{allDetails.data[0].pres} mb</td>
                        </tr>
                        <tr>
                            <th>Average wind speed</th>
                            <td>{allDetails.data[0].wind_spd} m/s</td>
                        </tr>
                        <tr>
                            <th> Average relative humidity</th>
                            <td>{allDetails.data[0].rh} %</td>
                        </tr>
                        <tr>
                            <th>Average solar radiation</th>
                            <td>{allDetails.data[0].solar_rad} W/M^2</td>
                        </tr>
                        <tr>
                            <th>Accumulated precipitation</th>
                            <td>{allDetails.data[0].precip_gpm} mm</td>
                        </tr>
                        
                    </tbody>
                </table>

            </div>

        ) : null }
     </div>
    );
};

export default WeatherDetails;