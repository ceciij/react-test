import React from 'react'
import {Link} from 'react-router-dom';


// items = ['M', 'G', 'Z']

function Menu({ items }) {
    return(
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/forecasts">Forecasts</Link>
            </li>
            {items.map( i =>
              <li key={`${i}`}>
                  <Link to={`${i}`}>{i}</Link>
              </li>
              )}
          </ul>
        </nav>
    )
}

export default Menu;