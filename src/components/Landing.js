import React from 'react'
import Navbar from './Navbar'
import '../styles.css'


export default function(){
    return(
        <div className="landing">
            <Navbar/>
            <img src={require("../assets/business.jpg")} style={{"width": "100%", "height": "100%"}}/>
        </div>
    )
}