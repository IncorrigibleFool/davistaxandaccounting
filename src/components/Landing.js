import React from 'react'
import Navbar from './Navbar'
import '../styles.css'

export default function(){
    return(
        <div>
            <Navbar/>
            <div className="slideshow-container">
                <div className="main-slideshow">
                    {/* <img className="slideshow-pic-1" src={require("../assets/business.jpg")} style={{"width": "50%", "height": "50%"}}/> */}
                </div>
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