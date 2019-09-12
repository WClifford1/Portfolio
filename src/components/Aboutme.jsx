import React, { Component } from 'react'
import './aboutmestyle.css'

export default class Aboutme extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dm: this.props.darkMode
        };
    }

    isItDarkMode = () => {
        if (this.state.darkMode) {
            console.log('darkmodeee')
        }
    }

    render() {
        return (
            <div style={{paddingLeft: "1%", paddingRight: "1%"}}>
                <section className="hello">
                    <h2 >About Me</h2>
                    
                    <p>
I am currently based in Brisbane and I have recently completed a Diploma of Information Technology from the web-development bootcamp at Coderacademy. During my study I have gained experience working with multiple languages, libraries and frameworks, practiced using the AGILE methodology throughout the whole software development life cycle and learned about the industry standards and expectations that are relevant to a junior developer.
I am have also recently completed an internship as a junior developer at Sortal, during which I worked on back-end micro-services and front-end UI components, predominantly using Typescript, Mongodb, Express, React, Node and Docker.
My goal is to work as a junior developer in an environment where I am encouraged to perform well and which is conducive to my pursuit of career progression. I am open to remote work and open to relocation.</p> 
                </section>
                <br/>
                <br/>
            </div>
        )
    }
}
