import React from 'react';
import '../css/Search.css'

function Search(props) {
    return(
        <div className = "form">
            <form action="/action_page.php">
                <input type="text" id="lname" name="lastname" placeholder="Toluca.."/>
                {/* <label for="country">State</label>
                <select id="country" name="country">
                    <option value="australia">Toluca</option>
                    <option value="canada">Guadalajara</option>
                    <option value="usa">Ciudad de México</option>
                </select> */}
                <input type="submit" value="Search"/>
            </form>
        </div>
    )
}

export default Search;