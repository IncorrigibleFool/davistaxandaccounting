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
                <h1 className="about-hero">About Us</h1>
                <div className="spacing"></div>
                <div id="profile-container">
                    <div className="individual-profile">
                        <div className="red-circle left-shadow">
                            <img className="about-photo left" alt="trangImg" src={require("../assets/TRANG.jpg")}></img>
                        </div>
                        <div className="profile-text">
                            <div>Trang Davis</div>
                            <div>CPA</div>   
                        </div>
                    </div>
                    <div className="spacing"></div>
                    <div className="individual-profile">
                        <div className="profile-text">
                            <div>Brad Davis</div>
                            <div>CPA</div>
                        </div>    
                        <div className="red-circle right-shadow">
                            <img className="about-photo right" alt="bradImg" src={require("../assets/BRAD.jpg")}></img>
                        </div>
                    </div>
                </div>  
            </div>
        )
    }
}