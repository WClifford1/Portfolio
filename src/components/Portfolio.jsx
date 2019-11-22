import React, { Component } from 'react'
import {Collapse} from 'react-collapse';
import { Timeline, Icon } from 'antd';
import 'antd/dist/antd.css';
import './portfolioStyle.css';



export default class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            coderAc: false,
            rubyApp: false,
            railsApp: false,
            mernApp: false,
            sortal: false,
            nutritionix: false,
            nodeGoogle: false,
            index: 0,
            state: 0
        };
    }
    
    opencoderAc = (e) => {
        this.setState({ coderAc : !this.state.coderAc})
    }
    
    openrubyApp = (e) => {
        this.setState({ rubyApp : !this.state.rubyApp})
    }
    
    openrailsApp = (e) => {
        this.setState({ railsApp : !this.state.railsApp})
    }
    
    openmernApp = (e) => {
        this.setState({ mernApp : !this.state.mernApp})
    }
    
    opensortal = (e) => {
        this.setState({ sortal : !this.state.sortal})
    }

    openNutritionix = (e) => {
        this.setState({ nutritionix : !this.state.nutritionix})
    }

    openNodeGoogle = (e) => {
        this.setState({ nodeGoogle : !this.state.nodeGoogle})
    }
    
    render() {


        const {coderAc, railsApp, mernApp, sortal, nutritionix, nodeGoogle} = this.state;
        return (
            <div style={{paddingLeft: "1%", paddingRight: "1%"}}>
                <h2>Portfolio <span><h6>(Click to expand)</h6></span></h2>
                <Timeline mode="alternate">

                    <Timeline.Item onClick={() => this.openNodeGoogle()} color="green">
                        <p className="timehead" style={{color:"black", cursor:"pointer"}}><Icon className="arrow" type="caret-right" style={sortal? {transform:"rotate(90deg)"} : undefined} /> Node.js Google Calendar API app - Oct 2019</p>
                        <Collapse isOpened={nodeGoogle}>
                                <p>Github: <a rel="noopener noreferrer" target="_blank" href="https://github.com/WClifford1/Nutrition-Calculator-App">https://github.com/WClifford1/Nutrition-Calculator-App</a></p>
                                <p>Node.js booking system that uses the Google Calendar API</p>
                                <p>Bookings can be made and timeslots viewed on Postman</p>
                                <p>Created bookings will be added as an event in the users' Google Calendar</p>
                        </Collapse>
                    </Timeline.Item>
                    

                    <Timeline.Item onClick={() => this.openNutritionix()}>
                        <p className="timehead" style={{color:"black", cursor:"pointer"}}>Nutritionix API App - Sep 2019 <Icon className="arrow" type="caret-left" style={nutritionix? {transform:"rotate(-90deg)"} : undefined} /></p>
                        <Collapse isOpened={nutritionix}>
                                <p>Live Demo: <a rel="noopener noreferrer" target="_blank" href="https://sad-golick-ae9bfd.netlify.com">https://sad-golick-ae9bfd.netlify.com</a></p>
                                <p>Github: <a rel="noopener noreferrer" target="_blank" href="https://github.com/WClifford1/Nutrition-Calculator-App">https://github.com/WClifford1/Nutrition-Calculator-App</a></p>
                                <p>Responsive single page React.js app</p>
                                <p id="hi">Uses the Nutritionix API to gather nutritional information on searched foods</p>
                        </Collapse>
                    </Timeline.Item>


                    <Timeline.Item onClick={() => this.opensortal()} dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>
                        <p className="timehead" style={{color:"black", cursor:"pointer"}}><Icon className="arrow" type="caret-right" style={sortal? {transform:"rotate(90deg)"} : undefined} /> Junior Developer Internship at Sortal - Aug 2019</p>
                        <Collapse isOpened={sortal}>
                                <p><a rel="noopener noreferrer" target="_blank" href="https://sortal.io">https://sortal.io</a></p>
                                <p>Worked on back-end microservices, front-end UI components and testing</p>
                                <p>Typescript, Node.js, Express.js, React.js, MongoDB and Docker</p>
                        </Collapse>
                    </Timeline.Item>


                    <Timeline.Item onClick={() => this.openmernApp()} color="purple">
                        <p className="timehead" style={{color:"black", cursor:"pointer"}}>Wotnot Media Portfolio Web Page - Jul 2019 <Icon className="arrow" type="caret-left" style={mernApp? {transform:"rotate(-90deg)"} : undefined} /></p>
                        <Collapse isOpened={mernApp}>
                                <p><a rel="noopener noreferrer" target="_blank" href="https://festive-cori-46ce58.netlify.com">https://festive-cori-46ce58.netlify.com</a></p>
                                <p>Portfolio website for a graphic design company</p>
                                <p>React.js, Node.js, Express.js and MongoDB</p>
                                <p>Storage: AWS</p>
                                <p>Deployment: Netlify and Heroku</p>
                        </Collapse>
                    </Timeline.Item>


                    <Timeline.Item onClick={() => this.openrailsApp()}>
                        <p className="timehead" style={{color:"black", cursor:"pointer"}}><Icon className="arrow" type="caret-right" style={railsApp? {transform:"rotate(90deg)"} : undefined} /> Ruby on Rails Two-sided Marketplace App - May 2019</p>
                        <Collapse isOpened={railsApp}>
                                <p><a rel="noopener noreferrer" target="_blank" href="https://glacial-castle-71209.herokuapp.com">https://glacial-castle-71209.herokuapp.com</a></p>
                                <p>Two-sided marketplace app - users can create an account, create listings, view listings, add items to shopping cart and purchase items.</p>
                                <p>Database: PostgreSQL</p>
                                <p>User Authentication: Devise</p>
                                <p>Deployment: Heroku</p>
                                <p>Payment: Stripe</p>
                        </Collapse>
                    </Timeline.Item>
                    



                    <Timeline.Item onClick={() => this.opencoderAc()} dot={<Icon type="clock-circle-o" style={{ color:"#1890ff",fontSize: '16px' }} />}>
                        <p className="timehead" style={{color:"black", cursor:"pointer"}}>Started Coderacademy Mar 2019 <Icon className="arrow" type="caret-left" style={coderAc? {transform:"rotate(-90deg)"} : undefined} /> </p>
                            <Collapse isOpened={coderAc}>
                                <p><a rel="noopener noreferrer" target="_blank" href="https://www.coderacademy.edu.au">https://www.coderacademy.edu.au</a></p>
                                <p>Full-time Web development bootcamp</p>
                                <p>Diploma of Information Technology</p>
                            </Collapse>
                    </Timeline.Item>
                </Timeline>
            </div>
        )
    }
}