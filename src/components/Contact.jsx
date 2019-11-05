import React, { Component } from 'react'
import { Typography } from 'antd';
import "../styles/contact.css"

export default class Contact extends Component {

    
    render() {
        const { Paragraph } = Typography
        return (
            <div id='contact' style={{paddingLeft: "1%", paddingRight: "1%"}}>
                <h2>Contact</h2>
                <a className="copyText" style={{color:"black"}} href="https://www.linkedin.com/in/williamdavidclifford" >https://www.linkedin.com/in/williamdavidclifford</a><Paragraph className="copyButton" style={{display:"inline"}} copyable={{ text: "https://www.linkedin.com/in/williamdavidclifford" }}></Paragraph>                
                <br/>
                <br/>
                <a className="copyText" style={{color:"black"}} href="https://github.com/WClifford1" >https://github.com/WClifford1</a><Paragraph className="copyButton" style={{display:"inline"}} copyable={{ text: "https://github.com/WClifford1" }}></Paragraph>
                <br/>
                <br/>
                <a className="copyText" style={{color:"black"}} href="mailto:williamdavidclifford@gmail.com" >williamdavidclifford@gmail.com</a><Paragraph className="copyButton" style={{display:"inline"}} copyable={{ text: "williamdavidclifford@gmail.com" }}></Paragraph>
                <br/>
                <br/>
            </div>
        )
    }
}



