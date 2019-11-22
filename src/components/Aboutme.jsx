import React, { Component } from "react";

export default class Aboutme extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dm: this.props.darkMode
    };
  }

  render() {
    return (
      <div style={{ paddingLeft: "1%", paddingRight: "1%" }}>
        <section className="hello">
          <h2>About Me</h2>
          <br />
          <p>
            I have recently completed a Diploma of Information Technology from
            the web-development bootcamp at Coderacademy in Brisbane, during which I gained
            experience building RESTFul APIs using multiple languages, libraries
            and frameworks and using the AGILE methodology throughout the
            software development lifecycle.
            <br /><br /> I have completed a Junior Developer
            internship at Sortal in Brisbane, during which I worked on back-end
            micro-services and front-end UI components, predominantly using
            Typescript, React.js, Node.js, MongoDB and Docker.
            <br /><br />I am currently seeking to work as a Junior Developer in a role
            in which I am encouraged to perform well and which contributes to my
            professional development and career progression. Please do not
            hesitate to contact me if there is any further information I that
            can provide or any coding challenges that I can complete to
            demonstrate my suitability, thank you.
          </p>
        </section>
        <br />
        <br />
      </div>
    );
  }
}
