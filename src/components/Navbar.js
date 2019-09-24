import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {HashLink} from 'react-router-hash-link'

export default class Navbar extends Component {
    render(){
        return(
            <div className="navbar">
                <div id="nav-logo-container">
                    <h2 id="nav-logo">Nav Logo</h2>
                </div>
                <div id="nav-list">
                    <Link className="nav-link" to='/'>
                        <h3 className="nav-item">Home</h3>
                    </Link>
                    <Link className="nav-link" to='/about'>
                        <h3 className="nav-item">About</h3>
                    </Link>
                    <HashLink className="nav-link" to="/#services">
                        <h3 className="nav-item">Services</h3>
                    </HashLink>
                    <Link className="nav-link" to="/contact">
                        <h3 className="nav-item" id="nav-last-item">Contact</h3>
                    </Link>
                </div>
                
            </div>
            
        )
    }
}