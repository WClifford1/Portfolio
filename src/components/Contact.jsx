import React, { Component } from 'react'
import { Typography } from 'antd';

export default class Contact extends Component {

    
    render() {
        const { Paragraph } = Typography
        return (
            <div style={{paddingLeft: "1%", paddingRight: "1%"}}>
                <h2>Contact</h2>
                <a style={{color:"black"}} href="https://www.linkedin.com/in/williamdavidclifford" >https://www.linkedin.com/in/williamdavidclifford</a><Paragraph style={{display:"inline"}} copyable={{ text: "https://www.linkedin.com/in/williamdavidclifford" }}></Paragraph>                
                <br/>
                <br/>
                <a style={{color:"black"}} href="https://github.com/WClifford1" >https://github.com/WClifford1</a><Paragraph style={{display:"inline"}} copyable={{ text: "https://github.com/WClifford1" }}></Paragraph>
                <br/>
                <br/>
                <a style={{color:"black"}} href="mailto:williamdavidclifford@gmail.com" >williamdavidclifford@gmail.com</a><Paragraph style={{display:"inline"}} copyable={{ text: "williamdavidclifford@gmail.com" }}></Paragraph>
                <br/>
                <br/>
            </div>
        )
    }
}