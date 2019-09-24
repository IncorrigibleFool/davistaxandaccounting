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
        },10000)
    }
    
    render(){
        
        return(
            <div className="slideshow-container">
                <div className="slideshow-color"></div>
                <div className={`slideshow-item1 ${this.state.slide1}`} style={{"display": "flex", "flexDirection": "column", "justifyContent": "center", "alignItems": "center", "color": "white"}}>
                    <h1>CERTIFIED PUBLIC ACCOUNTANTS<br/>FOR YOU AND YOUR BUSINESS</h1>
                    <p>We make life easier for business owners and individuals by providing high-quality tax and accounting services. Our professionals take care of your tax and accounting needs so that you can get on with life and focus on what is most important to you.</p>
                </div>
                <div className={`slideshow-item2 ${this.state.slide2}`}>
                    <h1>ADVISORS YOU CAN TRUST</h1>
                    <p>When it comes to your finances, you want a business partner who will look out for your best interests and keep you and your assets safe. With Davis Tax & Accounting, you can rest easy, knowing that your finances are in good hands.</p>
                </div>
                <div className={`slideshow-item3 ${this.state.slide3}`}>
                    <h1>GET HELP TODAY</h1>
                    <p>Contact us today to receive a free initial consultation.</p>
                </div>
            </div>
        )
    }
}