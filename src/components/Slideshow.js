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

    componentDidMount(){
        setInterval(() => {
            if(this.state.slide1 === "active"){
                this.setState({
                    slide1: null,
                    slide2: "active"
                })
                return
            }
            if(this.state.slide2 === "active"){
                this.setState({
                    slide2: null,
                    slide3: "active"
                })
                return
            }
            if(this.state.slide3 === "active"){
                this.setState({
                    slide3: null,
                    slide1: "active"
                })
                return
            }
        },8000)
    }
    
    render(){
        
        return(
            <div className="slideshow-container">
                <div className="slideshow-color"></div>
                <div className={`slideshow-item1 ${this.state.slide1}`} style={{"display": "flex", "flexDirection": "column", "justifyContent": "center", "alignItems": "center", "color": "white"}}>
                    <h1>Certified Public Accountants<br/>for you and your business</h1>
                    <p>We make life easier for business owners and individuals by providing high-quality tax and accounting services. Our professionals take care of your tax and accounting needs so that you can get on with life and focus on what is most important to you.</p>
                </div>
                <div className={`slideshow-item2 ${this.state.slide2}`}>
                    <h1>Test</h1>
                </div>
                <div className={`slideshow-item3 ${this.state.slide3}`}>
                    <h1 >Test2</h1>
                </div>
            </div>
        )
    }
}