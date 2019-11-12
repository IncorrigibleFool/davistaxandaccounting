import React from 'react'
import Navbar from './Navbar'

export default function About(){
    return(
        <div>
            <Navbar/>
            <div className="about-hero">About Test</div>
            <img src={require("../assets/TRANG.jpg")}></img>
            <img src={require("../assets/BRAD.jpg")}></img>
        </div>
    )
}