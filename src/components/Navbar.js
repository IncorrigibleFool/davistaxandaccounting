import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {HashLink} from 'react-router-hash-link'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPhone} from '@fortawesome/free-solid-svg-icons'

export default class Navbar extends Component {
    render(){
        return(
            <div className="navbar">
                <div id="nav-logo-container">
                    <HashLink className="nav-link" smooth to="/#home">
                        <h2 id="nav-logo">Nav Logo</h2>
                    </HashLink>
                </div>
                <div id="nav-list">
                    <Link className="nav-link" to='/about'>
                        <h3 className="nav-item">About</h3>
                    </Link>
                    <HashLink className="nav-link" smooth to="/#services">
                        <h3 className="nav-item">Services</h3>
                    </HashLink>
                    <Link className="nav-link" to="/contact">
                        <h3 className="nav-item">Contact</h3>
                    </Link>
                    <h3 id="nav-last-item" className="nav-item">
                        <FontAwesomeIcon icon={faPhone}/>
                        (303) 363-2251
                    </h3>
                </div>
            </div>
            
        )
    }
}