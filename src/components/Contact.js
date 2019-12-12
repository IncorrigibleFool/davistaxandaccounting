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
                <div className="contact-hero">Contact Test</div>
            </div>
        )
    }
}