import React, {Component} from 'react'

export default class Slideshow extends Component{
    constructor(){
        super()
        this.state = {
            slide1: "active",
            slide2: null,
            slide3: null,
        }
    }
    
    render(){
        return(
            <div className="slideshow-container">
                <div className="slideshow-item" style={{"display": "flex", "flexDirection": "column", "justifyContent": "center", "alignItems": "center", "color": "white"}}>
                    <h1>Certified Public Accountants<br/>for you and your business</h1>
                    <p>We make life easier for business owners and individuals by providing high-quality tax and accounting services. Our professionals take care of your tax and accounting needs so that you can get on with life and focus on what is most important to you.</p>
                </div>
                <div className="slideshow-item active" style={{"backgroundColor": "red"}}>
                    <h1>Test</h1>
                </div>
                <div>
                    <h1 className="slideshow-item " style={{"backgroundColor": "blue"}}>Test2</h1>
                </div>
            </div>
        )
    }
}