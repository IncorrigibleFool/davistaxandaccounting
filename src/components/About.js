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
                    <div className="red-circle left-shadow">
                        <img className="about-photo left" alt="trangImg" src={require("../assets/TRANG.jpg")}></img>
                    </div>
                    <div className="red-circle right-shadow">
                        <img className="about-photo right" alt="bradImg" src={require("../assets/BRAD.jpg")}></img>
                    </div>
                </div>  
            </div>
        )
    }
}