import React from 'react'
import '../css/CurrentWeather.css'


//destructuring in the props
function CurrentWeather({temp, tempMax, tempMin, icon, weather}){


    return(
        <div className="CurrentWeather"> 
            <section>
            <span className="current">{temp}°</span>
            <div>{weather}</div>
            </section>
            <section>
                <img src={require("../assets/icons/animated/"+icon)} alt="weather-icon" srcset=""/>
                <span className="forecast">{tempMax}°/{tempMin}°</span>
            </section>
        </div>
    )
}

export default CurrentWeather;