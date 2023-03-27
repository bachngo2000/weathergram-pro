import { useState, useEffect } from 'react'
const API_KEY = import.meta.env.VITE_APP_API_KEY;
import "./List.css";


const List = ({inputs}) => {
    const [pastWeather, setPastWeather] = useState([{}]);
    useEffect(() => {
        const getWeatherHist = async () => {
        const response = await fetch(`https://api.weatherbit.io/v2.0/history/daily?city=OKC&start_date=${inputs.startDate}&end_date=${inputs.endDate}&units=I&key=${API_KEY}`)
        const json = await response.json()
        setData(json.data);
        }
        getWeatherHist().catch(console.error);
    },[inputs])

    const setData = (data) => {
        const filterData = data.filter((item) => item.wind_spd <= inputs.windSpeed)

        !inputs.windSpeed ? setPastWeather(data) : setPastWeather(filterData); 
    }
    return (
        <table className="data-table">
            <tbody>
                { inputs && pastWeather.map((date, index) => 
                    <tr key={index}>
                        <td>{date.datetime}</td>
                        <td>{date.min_temp + "°F"}</td>
                        <td>{date.max_temp + "°F"}</td>
                        <td>{date.wind_spd + " m/s" + "🌬️"}</td>
                        <td>{date.clouds + "%" + "☁️"}</td>
                    </tr>
                ) 
                }
            </tbody>
            
            
        </table>
        
    )

};

export default List;
