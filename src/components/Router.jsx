import React from 'react'
import Card from './Card';
import Search from './Search';
import Main from './Main'
import Menu from './Menu';
import Filter from './Filter'
import {
    BrowserRouter,
    Switch,
    Route,
  } from "react-router-dom";
import { 
kelvin2celsius,
getIcon
} from '../helpers';

function Router({forecasts, requestCity, deleteCard}){
   // Un set es un conjunto, es decir, un elemento que no puede tener elementos repeditos... 
   //no es un array por lo que tenemos que hacer destructuring en  ...letters
    const letters = new Set()
    forecasts.forEach(f => letters.add(f.name.charAt(0)))

    let menu = Array.from(letters)


    return(
        <BrowserRouter>
        <Menu items = { [...letters] }/>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/home" component = {()=><div>hola</div>}/>
          <Route path="/forecasts" component={()=>
            <Main>
                <div className = "cont">
                    <Search onSubmit={ requestCity}/>
                    <div className="items">
                        {forecasts.map((forecast)=>
                            <Card 
                            key = {forecast.id}
                            temp={kelvin2celsius(forecast.main.temp)} 
                            tempMax={kelvin2celsius(forecast.main.temp_max)}
                            tempMin={kelvin2celsius(forecast.main.temp_min)}
                            icon={getIcon(forecast.weather[0].main)}
                            feelsLike={kelvin2celsius(forecast.main.feels_like)}
                            weather = {forecast.weather[0].main}
                            selectedCity = {forecast.name}
                            onClick = {deleteCard}
                            />
                        )}
                    </div>
                </div>
          </Main>
          }/>
          
          { menu.map( l =>
                        <Route 
                            key = {`${l}`}
                            exact
                            path = {`/${l}`} 
                            component = { 
                                () => 
                                <Filter items={forecasts.filter( f=> f.name.charAt(0)===`${l}`)}/>
                        }/>
                    )}
        </Switch>
    </BrowserRouter>    
    )
}

export default Router