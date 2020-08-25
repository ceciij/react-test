import React from 'react';
import '../css/Card.css'
import CurrentWeather from './CurrentWeather';
import Clock from './Clock'

function Card(props) {
    return (
      <section className="Card">
        <h4>
        {props.selectedCity}, Mexico
        </h4>
        <Clock/>
        <h5>{props.time}</h5>
        <CurrentWeather 
        temp={props.temp} 
        tempMax={props.tempMax} 
        tempMin={props.tempMin}
        icon={props.icon}
        weather = {props.weather}
        />   
      <h6>Feels like {props.feelsLike}°</h6>
      </section>
    
        
    );
}

export default Card;

