import React from 'react'
import Navbar from './Navbar'
import Slideshow from './Slideshow'
import Copyright from './Copyright'
import '../styles.css'

export default function(){
    return(
        <>
        <Navbar/>
        <div>
            <Slideshow/>
            <Copyright/>
        </div>
        </>
    )
}