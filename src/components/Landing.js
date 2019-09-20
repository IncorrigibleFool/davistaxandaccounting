import React from 'react'
import Navbar from './Navbar'
import Copyright from './Copyright'
import '../styles.css'

export default function(){
    return(
        <div>
            <Navbar/>
            <div className="slideshow-container">
                <div className="main-slideshow" style={{"display": "flex", "flexDirection": "column", "justifyContent": "center", "alignItems": "center", "color": "white"}}>
                    <h1>Certified Public Accountants<br/>for you and your business</h1>
                    <p>We make life easier for business owners and individuals by providing high-quality tax and accounting services. Our professionals take care of your tax and accounting needs so that you can get on with life and focus on what is most important to you.</p>
                </div>
            </div>
            <Copyright/>
        </div>
    )
}