import { hot } from 'react-hot-loader/root';
import React, { Component} from "react";
import ScriptTag from 'react-script-tag';
import "../assets/stylesheets/style.scss";
import {
  Route,
  Link,
  Switch
} from "react-router-dom";

import Projects from "./Projects.jsx";
import Personal from "./personal.jsx";
import About from "./about.jsx";
import Contact from "./contact.jsx";
import Clarify from "./clarify.jsx"
import Ppf from "./ppfservices.jsx";
import Matchbox from "./matchbox.jsx";
import Odaiba from "./odaiba.jsx";

import logo from '../assets/images/logo.png';
import succ1 from '../assets/images/succulents-01.png'
import succ2 from '../assets/images/succulents-02.png'
import succ3 from '../assets/images/succulents-03.png'
import succ4 from '../assets/images/succulents-04.png'
import succ5 from '../assets/images/succulents-05.png'
import succ6 from '../assets/images/succulents-06.png'

class App extends Component{

  render(){
    return(
        <div className="App">
          <div className="container">
          <div className="page-content">
            <div className="header">
              <div className="logo-container">
                <Link to="/work"><img src={logo} className="logo" alt="logo"/></Link>
              </div>
               <ul className="navbar">
                <li><Link to="/work">WORK</Link></li>
                <li><Link to="/about">ABOUT</Link></li>
                <li><Link to="/contact">CONTACT</Link></li>
               </ul>
            </div>
            <div className="content">
            <Switch>
              <Route exact path="/" component={Projects}/>
              <Route exact path="/work" component={Projects}/>
              <Route path="/about" component={About}/>
              <Route path="/contact" component={Contact}/>
              <Route exact path="/work/ppfservices" component={Ppf}/>
              <Route exact path="/work/odaiba" component={Odaiba}/>
              <Route exact path="/work/clarify" component={Clarify}/>
              <Route exact path="/work/matchbox" component={Matchbox}/>
            </Switch>
            </div>
            <ScriptTag type="text/javascript" src="application.js" />
          </div>
            <footer id="footer">
            <div className="zigzag"></div>
            <div className="footer-info">
              <div className="icons">
                <img src={succ1} alt=""/>
                <img src={succ2} alt=""/>
                <img src={succ3} alt=""/>
                <img src={succ4} alt=""/>
                <img src={succ5} alt=""/>
              </div>
              <div className="footer-links">
                <div>
                  <a href="https://github.com/francescheng" target="_blank">Github</a>
                </div>
                <div>
                  <a href="https://www.linkedin.com/in/frances-cheng/" target="_blank">LinkedIn</a>
                </div>
                <div>
                  <a href="https://www.francescheng.photo/" target="_blank">Personal</a>
                </div>
              </div>
            </div>
            </footer>
          </div>
        </div>
    );
  }
}

export default hot(App);
