import React from 'react';
import Router from './Router'

import { getCityByNameAndCountry,
  getWeatherById,
 } from '../helpers';
import Loader from './Loader';
import '../css/App.css';

class App extends React.Component {

  state = {
    forecasts: [],
    temp: 5,
    tempMax: 0,
    tempMin: 0,
    feelsLike:0 ,
    weather: '',
    icon: '',
    selectedCity: '',
    id: 0,
  }

  async componentDidMount(){
  
    const city = await getCityByNameAndCountry('Ciudad de México', 'MX');
    const forecast = await getWeatherById(city.id)
    // console.log(forecast)
    this.setState({
      forecasts: [...this.state.forecasts, forecast],
    })
  
  }
  requestCity = async (name)=>{
    const city = await getCityByNameAndCountry(name, 'MX');

    if(!city) return;
    const forecast = await getWeatherById(city.id);

    this.setState({
      forecasts: [...this.state.forecasts, forecast]
    })

    console.log(this.state.forecasts)
  }

  deleteCard = (id) => {
    // this.setState({
    //   forecasts: forecasts.filter(id)
    // })
    console.log('delete' + id)
  }

  render(){

    const {forecasts} = this.state
    console.log(forecasts)
    
    return(
      this.state.forecasts.length === 0
        ? <Loader/>
        : 
        <Router 
        forecasts={forecasts}
        requestCity = {this.requestCity}
        deleteCard = {this.deleteCard}
        />
    )
  }
}

export default App;