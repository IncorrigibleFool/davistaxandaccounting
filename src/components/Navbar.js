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

    componentWillUnmount(){
        window.removeEventListener('scroll', this.scrollEvent)
    }
    
    render(){
        return(
            <div className={`navbar ${this.state.scroll} ${this.state.unscroll}`}>
                <div id="nav-logo-container">
                    <HashLink className={`nav-link ${this.state.navLink}`} smooth to="/#home">
                        {this.state.unscroll === null && this.state.scroll === null && <img id="nav-logo" alt="company logo" src={require("../assets/davis-logo-whitescale.png")}/>}
                        {this.state.navLink === "nav-link-scrolled" && <img id="nav-logo" alt="company logo" src={require("../assets/davis-logo.png")}/>}
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