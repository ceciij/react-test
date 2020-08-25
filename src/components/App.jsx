import React from 'react';    
import Card from './Card';
import Search from './Search'
import { getCityByNameAndCountry,
  getWeatherById,
  kelvin2celsius,
  getIcon
 } from '../helpers';
import Loader from './Loader';
import '../css/App.css'

class App extends React.Component {

  state = {
    forecast: [],
    temp: 5,
    tempMax: 0,
    tempMin: 0,
    feelsLike:0 ,
    weather: '',
    icon: 'cloudy.svg',
    selectedCity: '',
    id: 0,
  }

  async componentDidMount(){
  
    const city = await getCityByNameAndCountry('Toluca', 'MX');
    console.log(city)
    const selectedCity = city.name
    const forecast = await getWeatherById(city.id)
    const temp= kelvin2celsius(forecast.main.temp)
    console.log(forecast)
    const tempMax = kelvin2celsius(forecast.main.temp_max)
    const tempMin = kelvin2celsius(forecast.main.temp_min)
    const icon = getIcon(forecast.weather[0].main);
    const feelsLike = kelvin2celsius(forecast.main.feels_like)
    const weather = forecast.weather[0].main
    const id = city.id
      
    this.setState({
      forecast,
      temp,
      tempMax,
      tempMin,
      feelsLike,
      weather,
      icon,
      selectedCity,
      id,
    })

  }

  render(){

    const {forecast} = this.state
    const enteros = [1,2,3]
    return(
      this.state.forecast.length === 0
        ? <Loader/>
        : 
      <div className = "cont">
        <Search/>
        <div className="items">
          {enteros.map((data)=>
            <Card 
            key = {this.state.id}
            temp={this.state.temp} 
            tempMax={this.state.tempMax}
            tempMin={this.state.tempMin}
            icon={this.state.icon}
            feelsLike={this.state.feelsLike}
            weather = {this.state.weather}
            selectedCity = {this.state.selectedCity}
            />
          )}
        </div>

      </div>
    )
  }
}

export default App;