import React from 'react';
import Aboutme from './components/Aboutme'
import Portfolio from './components/Portfolio';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import 'antd/dist/antd.css';
import './App.css'

function App() {
    return (
        <React.Fragment>
            <h1 className="heading" style={{paddingLeft: "1%", paddingRight: "1%"}}>William Clifford | Junior Developer</h1>
            <Aboutme />
            <Portfolio />
            <TechStack />
            <Contact />
        </React.Fragment>
    );
}

export default App;
