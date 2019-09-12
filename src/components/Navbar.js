import React, {Component} from 'react'

export default class Navbar extends Component {
    render(){
        return(
            <div className="navbar">
                <div>
                    <h2 id="nav-logo">Nav Logo</h2>
                </div>
                <div id="nav-list">
                    <h3 className="nav-item">Home</h3>
                    <h3 className="nav-item">About</h3>
                    <h3 className="nav-item">Services</h3>
                    <h3 className="nav-item" id="nav-last-item">Contact</h3>
                </div>
                
            </div>
            
        )
    }
}