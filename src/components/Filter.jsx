import React from 'react'
import Card from './Card';
import { 
    kelvin2celsius,
    getIcon
    } from '../helpers';

function Filter({items, deleteCard}){
    return(
        items.map(item => 
            <Card 
                key = {item.id}
                temp={kelvin2celsius(item.main.temp)} 
                tempMax={kelvin2celsius(item.main.temp_max)}
                tempMin={kelvin2celsius(item.main.temp_min)}
                icon={getIcon(item.weather[0].main)}
                feelsLike={kelvin2celsius(item.main.feels_like)}
                weather = {item.weather[0].main}
                selectedCity = {item.name}
                onClick = {deleteCard}
            />
        )
    )
}

export default Filter;