import React, { Component } from 'react'

export default class Aboutme extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dm: this.props.darkMode
        };
    }

    render() {
        return (
            <div style={{paddingLeft: "1%", paddingRight: "1%"}}>
                <section className="hello">
                    <h2 >About Me</h2>
                    <br/>
                    <p>
                        I have recently completed a Diploma of Information Technology from the web-development bootcamp at Coderacademy in Brisbane. I have experience working with different languages, libraries and frameworks, building and working with RESTFul APIs and using the AGILE methodology throughout the entire software development life cycle. I have also built a full-stack web application for a real world client. 
                        <br/><br/>
                        In August 2019 I successfully completed an internship as a junior developer at Sortal in Brisbane, during which I worked on creating back-end micro-services and front-end UI components, predominantly using React, Typescript, Mongodb, Express, Node and Docker.
                        <br/><br/>
                        My goal is to work as a web developer at a company in which I am encouraged to perform well and is conducive to skills development and internal career progression. I am open to remote work and open to relocation.</p> 
                </section>
                <br/>
                <br/>
            </div>
        )
    }
}
