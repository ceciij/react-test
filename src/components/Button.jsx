import React from 'react'

function Button(onClick) {

    const handleClick = (e) => {
        e.preventDefault()
        console.log('le picaste')
        //onClick('this is the id')
    }

    return(
        <button value="X" onClick = {handleClick}>X</button>
    )
}

export default Button;