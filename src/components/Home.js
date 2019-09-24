import React from 'react'
import Navbar from './Navbar'
import Slideshow from './Slideshow'
import Services from './Services'
import Copyright from './Copyright'
import '../styles.css'

export default function(){
    return(
        <div>
            <Navbar/>
            <Slideshow/>
            <Services/>
            <Copyright/>
        </div>
    )
}