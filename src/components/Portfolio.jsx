import React, { Component } from 'react'
import 'antd/dist/antd.css';
import './portfolioStyle.css';
import { Timeline, Icon } from 'antd';
import {Collapse} from 'react-collapse';


export default class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            coderAc: false,
            rubyApp: false,
            railsApp: false,
            mernApp: false,
            sortal: false,
            grad: false
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

    opengrad = (e) => {
        this.setState({ grad : !this.state.grad})
    }

    opensortal = (e) => {
        this.setState({ sortal : !this.state.sortal})
    }
// dfdfgh?


    render() {
        const {coderAc, rubyApp, railsApp, mernApp, sortal, grad} = this.state;
        return (
            <div style={{paddingLeft: "1%", paddingRight: "1%"}}>
                <h2>Portfolio</h2>
                <Timeline mode="alternate">


                    <Timeline.Item onClick={() => this.opensortal()} color="green">
                        <p className="timehead" style={{color:"black", cursor:"pointer"}}><Icon className="arrow" type="caret-right" style={sortal? {transform:"rotate(90deg)"} : undefined} /> Started internship with Sortal Aug 2019</p>
                    <Collapse isOpened={sortal}>
                                <p>Junior developer internship position</p>
                                <p>Typescript, Docker, MERN stack</p>
                                <p>Front-end and back-end projects</p>
                                <p>Testing</p>
                                <a rel="noopener noreferrer" target="_blank" href="https://sortal.io">https://sortal.io</a>
                                <br />
                                <br />
                        </Collapse>
                    </Timeline.Item>


                    <Timeline.Item onClick={() => this.openmernApp()} dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>
                        <p className="timehead" style={{color:"black", cursor:"pointer"}}>Created Wotnot Media portfolio web app Jul 2019 <Icon className="arrow" type="caret-left" style={mernApp? {transform:"rotate(270deg)"} : undefined} /></p>
                        <Collapse isOpened={mernApp}>
                                <p>Portfolio site for graphic design company</p>
                                <p>Has working contact forms and admin dashboard</p>
                                <p>Front-end: React</p>
                                <p>Back-end: Node.js and Express</p>
                                <p>Database: Mongodb</p>
                                <p>Storage: AWS</p>
                                <p>Deployment: Netlify and Heroku</p>
                                <a rel="noopener noreferrer" target="_blank" href="https://festive-cori-46ce58.netlify.com">https://festive-cori-46ce58.netlify.com</a>
                                <br />
                                <br />
                        </Collapse>
                    </Timeline.Item>


                    <Timeline.Item onClick={() => this.openrailsApp()}>
                        <p className="timehead" style={{color:"black", cursor:"pointer"}}><Icon className="arrow" type="caret-right" style={railsApp? {transform:"rotate(90deg)"} : undefined} /> Created Ruby on Rails two-sided marketplace app May 2019</p>
                        <Collapse isOpened={railsApp}>
                                <p>Ruby on Rails two-sided marketplace app</p>
                                <p>Database: PostgreSQL</p>
                                <p>Deployment Platform: Heroku</p>
                                <p>User Authentication: Devise</p>
                                <p>Payment: Stripe</p>
                                <a rel="noopener noreferrer" target="_blank" href="https://glacial-castle-71209.herokuapp.com">https://glacial-castle-71209.herokuapp.com</a>
                                <br />
                                <br />
                        </Collapse>
                    </Timeline.Item>
                    

                    <Timeline.Item onClick={() => this.openrubyApp()} color="red">
                        <p className="timehead" style={{color:"black", cursor:"pointer"}}>Created first terminal app Mar 2019 <Icon className="arrow" type="caret-left" style={rubyApp? {transform:"rotate(270deg)"} : undefined} /></p>
                        <Collapse isOpened={rubyApp}>
                                <p>Simple Ruby terminal app</p>
                                <p>Demonstrate basic CRUD functionality</p>
                                <a rel="noopener noreferrer" target="_blank" href="https://github.com/WClifford1/Ruby-Terminal-Assessment">https://github.com/WClifford1/Ruby-Terminal-Assessment</a>
                                <br />
                                <br />
                        </Collapse>
                    </Timeline.Item>


                    <Timeline.Item onClick={() => this.opencoderAc()} dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>
                        <p className="timehead" style={{color:"black", cursor:"pointer"}}><Icon className="arrow" type="caret-right" style={coderAc? {transform:"rotate(90deg)"} : undefined} /> Started Coderacademy Mar 2019</p>
                            <Collapse isOpened={coderAc}>
                                <p>Web development bootcamp</p>
                                <p>Diploma of Information Technology</p>
                                <a rel="noopener noreferrer" target="_blank" href="https://www.coderacademy.edu.au">https://www.coderacademy.edu.au</a>
                            </Collapse>
                    </Timeline.Item>
                </Timeline>
                <br/>
                <br/>
            </div>
        )
    }
}

// npm install --save react react-motion react-collapse