import { hot } from 'react-hot-loader/root';
import React, { Component} from "react";
import ScriptTag from 'react-script-tag';
import "../assets/stylesheets/application.scss";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Projects from "./Projects.jsx";
import Personal from "./personal.jsx";
import About from "./about.jsx";
import Contact from "./contact.jsx";
import temp from '../assets/images/clarify.png';


class App extends Component{
  render(){
    return(
      <HashRouter>
        <div className="App">
          <div className="container">
          <div className="page-content">
            <div className="header">
              <div className="logo">
                <img src={temp} alt="temp logo"/>
              </div>
               <ul className="navbar">
                <li><NavLink to="/">Projects</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
               </ul>
            </div>
            <div className="content">
              <Route exact path="/" component={Projects}/>
              <Route path="/about" component={About}/>
              <Route path="/contact" component={Contact}/>
            </div>
          </div>
            <footer id="footer">
              <ul>
                <li>Github</li>
                <li>Twitter</li>
                <li>LinkedIn</li>
              </ul>
            </footer>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default hot(App);
