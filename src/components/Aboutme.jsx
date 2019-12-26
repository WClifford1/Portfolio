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
          <br />
          <h2>About Me</h2>
          <p>
            I am currently working as a Junior Full Stack Developer at <a rel="noopener noreferrer" target="_blank" href="https://outfit.io/">Outfit.io</a>, predominantly using Ruby on Rails, React.js and PostgreSQL.<br /><br />
            In 2019 I gained a Diploma of Information Technology from
            the web-development bootcamp at Coderacademy and completed a Junior Developer
            internship at Sortal in Brisbane. During my internship I worked on back-end
            micro-services and front-end UI components using
            Typescript, React.js, Node.js, MongoDB and Docker.
            <br /><br />
            I enjoy being a part of a team, following best practices, improving my skills and learning new things.
          </p>
        </section>
        <br />
      </div>
    );
  }
}
