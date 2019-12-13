import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {HashLink} from 'react-router-hash-link'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPhone} from '@fortawesome/free-solid-svg-icons'

export default class Navbar extends Component {
    state = {
        scroll: null,
        unscroll: null,
        navLink: null
    }
    
    componentDidMount(){
        window.addEventListener('scroll', this.scrollEvent)
    }

    scrollEvent = () => {
        if (window.scrollY > 200){
            this.setState({
                scroll: "nav-scrolled",
                unscroll: null,
                navLink: "nav-link-scrolled"
            })
        }
        else if(window.scrollY <= 200 && this.state.scroll === "nav-scrolled"){
            this.setState({
                scroll: null,
                unscroll: "nav-unscrolled",
                navLink: "nav-link-scrolled"
            })
        }
        else if(window.scrollY < 90){
            this.setState({
                scroll: null,
                unscroll: null,
                navLink: null
            })
        }
    } 
    
    render(){
        return(
            <div className={`navbar ${this.state.scroll} ${this.state.unscroll}`}>
                <div id="nav-logo-container">
                    <HashLink className={`nav-link ${this.state.navLink}`} smooth to="/#home">
                        <h2 id="nav-logo">Nav Logo</h2>
                    </HashLink>
                </div>
                <div id="nav-list">
                    <Link className={`nav-link ${this.state.navLink}`} to='/about'>
                        <h3 className="nav-item">About</h3>
                    </Link>
                    <HashLink className={`nav-link ${this.state.navLink}`} smooth to="/#services">
                        <h3 className="nav-item">Services</h3>
                    </HashLink>
                    <Link className={`nav-link ${this.state.navLink}`} to="/contact">
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