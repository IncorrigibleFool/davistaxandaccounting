import React, {Component} from 'react'
import Navbar from './Navbar'

export default class About extends Component{
    componentDidMount(){
        window.scrollTo(0,0)
    }
    
    render(){
        return(
            <div>
                <Navbar/>
                <div className="about-hero">About Test</div>
                <div id="profile-container">
                    <img className="about-photo" alt="trangImg" src={require("../assets/TRANG.jpg")}></img>
                    <img className="about-photo" alt="bradImg" src={require("../assets/BRAD.jpg")}></img>
                </div>  
            </div>
        )
    }
}