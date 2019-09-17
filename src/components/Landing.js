import React from 'react'
import Navbar from './Navbar'
import '../styles.css'

export default function(){
    return(
        <div>
            <div className="landing">
                <Navbar/>
                <img src={require("../assets/business.jpg")} style={{"width": "100%", "height": "100%"}}/>
            </div>
            <div>Our Mission</div>
            <p></p>
            <div>Advisors you can trust</div>
            <p></p>
            <div>Get Help Today</div>
            <p></p>
        </div>
        

    )
}