import React, {Component} from 'react'
import Navbar from './Navbar'

export default class Contact extends Component{
    componentDidMount(){
        window.scrollTo(0,0)
    }
    
    render(){
        return(
            <div>
                <Navbar/>
                <h1 className="contact-hero">Contact</h1>
            </div>
        )
    }
}