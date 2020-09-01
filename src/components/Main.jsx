import React from 'react'
import '../css/Main.css'
function Main(props) {
    return(
        <main className="Main">{props.children}</main>
    )
}

export default Main;