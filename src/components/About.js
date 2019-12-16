import React, {Component} from 'react'
import Navbar from './Navbar'
import Copyright from './Copyright'

export default class About extends Component{
    componentDidMount(){
        window.scrollTo(0,0)
    }
    
    render(){
        // left and right positioning relative to closest screen edge based on wide view
        return(
            <div>
                <Navbar/>
                <h1 className="about-hero">About Us</h1>
                <div className="spacing"></div>
                <div id="profile-container">
                    <div className="individual-profile">
                        <div className="red-circle left-circle">
                            <img className="about-photo left" alt="trangImg" src={require("../assets/TRANG.jpg")}></img>
                        </div>
                        <div className="profile-text">
                            <div className="profile-title-container">
                                <div className="text-spacing"></div>
                                <h1 className="profile-title">Trang Davis</h1>
                                <h2 className="profile-title">CPA</h2>   
                            </div>
                            <div className="text-spacing"></div>
                            <p>Trang graduated from Brigham Young University with her Bachelor’s in Accounting and Master’s in Taxation. Upon graduating from BYU, she worked at Ernst & Young (EY) for five years in its National Tax group, focusing on helping Fortune 500 clients with specialized tax projects. After leaving EY, Trang has been working at Tax Sentry – a national tax firm where she provides valuable tax preparation and consulting to individuals and medium to small businesses. Trang has served clients from a variety of industries including real estate, e-commerce, dining, construction, and medical. She particularly enjoys helping small business owners from all professions understand their businesses from the tax and financial viewpoints.</p>
                            <div className="text-spacing"></div>
                            <p>Trang loves spending time with her husband and children, especially when it involves food. She also has a passion for fitness and health and is a certified health coach!</p>
                        </div>
                    </div>
                    <div className="spacing"></div>
                    <div className="individual-profile">
                        <div className="profile-text">
                            <div className="profile-title-container">
                                <h1 className="profile-title">Brad Davis</h1>
                                <h2 className="profile-title">CPA</h2>
                            </div>
                            <div className="text-spacing"></div>
                            <p>Brad earned his Bachelor’s in Accounting from Brigham Young University and started his career in EY’s assurance practice in San Jose and Salt Lake City, UT. During his time with EY, he focused mainly on auditing business of all sizes in the biotechnology and technology industries. He especially enjoyed working with small, start-up business where he was able to see the company grow and mature over time. After leaving EY, he joined a software company in Provo, UT, where he oversees all the accounting processes, including external reporting (domestic and international reporting), sales taxes, internal controls, and income taxes. </p>
                            <div className="text-spacing"></div>
                            <p>He enjoys biking, listening to music, swimming, and hanging out with family and friends. During his time at Brigham Young University, he toured the United States, China, and Cuba as a member of the Young Ambassador show band. </p>
                        </div>    
                        <div className="red-circle right-circle">
                            <img className="about-photo right" alt="bradImg" src={require("../assets/BRAD.jpg")}></img>
                        </div>
                    </div>
                </div>
                <div className="spacing"></div>
                <Copyright/> 
            </div>
        )
    }
}