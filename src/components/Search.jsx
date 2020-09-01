import React from 'react';
import '../css/Search.css';
import { func } from 'prop-types';

function Search({onSubmit}) {


    const [value, setValue] = React.useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(value)
        setValue('')
        
    }
    return(
        <div className = "form">
            <form onSubmit={ e => handleSubmit(e)}>
                <input type="text"  value={ value } onChange={ e => setValue(e.target.value) } placeholder="Toluca.."/>
                <input type="submit" value="Get Forecast"/>
            </form>
        </div>
    )
}

Search.propTypes = {
    onSubmit: func.isRequired,
  }

export default Search;