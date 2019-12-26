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
            mernApp: false,
            sortal: false,
            nutritionix: false,
            nodeGoogle: false,
            outfit: false,
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
    
    openOutfit = (e) => {
        this.setState({ outfit : !this.state.outfit})
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


        const {coderAc, mernApp, sortal, nutritionix, nodeGoogle, outfit} = this.state;
        return (
            <div style={{paddingLeft: "1%", paddingRight: "1%"}}>
                <h2>Portfolio <span><h6>(Click to expand)</h6></span></h2>
                <Timeline mode="alternate">


                <Timeline.Item onClick={() => this.openOutfit()} color="green">
                        <p className="timehead" style={{color:"black", cursor:"pointer"}}><Icon className="arrow" type="caret-right" style={outfit? {transform:"rotate(90deg)"} : undefined} /> Outfit.io - Junior Fullstack Developer Dec 2019 - Present</p>
                        <Collapse isOpened={outfit}>
                                <p>Junior Fullstack Developer</p>
                                <p>Tech Stack: Ruby on Rails, React.js, PostgreSQL</p>
                                <p><a rel="noopener noreferrer" target="_blank" href="https://outfit.io/">https://outfit.io/</a></p>
                        </Collapse>
                    </Timeline.Item>
                    

                    <Timeline.Item onClick={() => this.openNodeGoogle()} color="brown">
                        <p className="timehead" style={{color:"black", cursor:"pointer"}}>Node.js Google Calendar API app - Oct 2019 <Icon className="arrow" type="caret-left" style={nodeGoogle? {transform:"rotate(-90deg)"} : undefined} /></p>
                        <Collapse isOpened={nodeGoogle}>
                                <p>OAuth2 Node.js booking system that uses the Google Calendar API</p>
                                <p>Available timeslots can be viewed and bookings made on Postman</p>
                                <p>Created bookings will be added as an event in the users' Google Calendar</p>
                                <p>Github: <a rel="noopener noreferrer" target="_blank" href="https://github.com/WClifford1/googleCalendarNodeJS">https://github.com/WClifford1/googleCalendarNodeJS</a></p>
                        </Collapse>
                    </Timeline.Item>
                    

                    <Timeline.Item onClick={() => this.openNutritionix()}>
                        <p className="timehead" style={{color:"black", cursor:"pointer"}}><Icon className="arrow" type="caret-right" style={nutritionix? {transform:"rotate(90deg)"} : undefined} /> Nutritionix API App - Sep 2019</p>
                        <Collapse isOpened={nutritionix}>
                                <p>Responsive single page React.js app</p>
                                <p id="hi">Uses the Nutritionix API to display nutritional information on searched foods</p>
                                <p>Github: <a rel="noopener noreferrer" target="_blank" href="https://github.com/WClifford1/Nutrition-Calculator-App">https://github.com/WClifford1/Nutrition-Calculator-App</a></p>
                                <p>Live Demo: <a rel="noopener noreferrer" target="_blank" href="https://sad-golick-ae9bfd.netlify.com">https://sad-golick-ae9bfd.netlify.com</a></p>
                        </Collapse>
                    </Timeline.Item>


                    <Timeline.Item onClick={() => this.opensortal()} dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>
                        <p className="timehead" style={{color:"black", cursor:"pointer"}}>Junior Developer Internship at Sortal - Aug 2019 <Icon className="arrow" type="caret-left" style={sortal? {transform:"rotate(-90deg)"} : undefined} /></p>
                        <Collapse isOpened={sortal}>
                                <p>Worked on back-end microservices, front-end UI components and testing</p>
                                <p>Typescript, Node.js, Express.js, React.js, MongoDB and Docker</p>
                                <p><a rel="noopener noreferrer" target="_blank" href="https://sortal.io">https://sortal.io</a></p>
                        </Collapse>
                    </Timeline.Item>


                    <Timeline.Item onClick={() => this.openmernApp()} color="purple">
                        <p className="timehead" style={{color:"black", cursor:"pointer"}}><Icon className="arrow" type="caret-right" style={mernApp? {transform:"rotate(90deg)"} : undefined} /> Wotnot Media Portfolio Web Page - Jul 2019</p>
                        <Collapse isOpened={mernApp}>
                                <p>Portfolio website for a graphic design company</p>
                                <p>React.js, Node.js, Express.js and MongoDB</p>
                                <p>Storage: AWS</p>
                                <p>Deployment: Netlify and Heroku</p>
                                <p><a rel="noopener noreferrer" target="_blank" href="https://festive-cori-46ce58.netlify.com">https://festive-cori-46ce58.netlify.com</a></p>
                                <p>Github: <a rel="noopener noreferrer" target="_blank" href="https://github.com/WClifford1/wotnot-media">https://github.com/WClifford1/wotnot-media</a></p>
                        </Collapse>
                    </Timeline.Item>
                    

                    <Timeline.Item onClick={() => this.opencoderAc()} dot={<Icon type="clock-circle-o" style={{ color:"#1890ff",fontSize: '16px' }} />}>
                        <p className="timehead" style={{color:"black", cursor:"pointer"}}>Started Coderacademy Mar 2019 <Icon className="arrow" type="caret-left" style={coderAc? {transform:"rotate(-90deg)"} : undefined} /> </p>
                            <Collapse isOpened={coderAc}>
                                <p>Full-time Web development bootcamp</p>
                                <p>Diploma of Information Technology</p>
                                <p><a rel="noopener noreferrer" target="_blank" href="https://www.coderacademy.edu.au">https://www.coderacademy.edu.au</a></p>
                            </Collapse>
                    </Timeline.Item>
                </Timeline>
            </div>
        )
    }
}