import { hot } from 'react-hot-loader/root';
import React, { Component} from "react";
import "./App.scss";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Projects from "./Projects.jsx";
import Personal from "./personal.jsx";
import About from "./about.jsx";
import Contact from "./contact.jsx";

class App extends Component{
  render(){
    return(
      <HashRouter>
        <div className="App">
          <div className="container">
             <ul className="header">
              <li><NavLink to="/">Projects</NavLink></li>
              <li><NavLink to="/personal">Personal</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
             </ul>
             <div className="content">
              <Route exact path="/" component={Projects}/>
              <Route path="/personal" component={Personal}/>
              <Route path="/about" component={About}/>
              <Route path="/contact" component={Contact}/>
             </div>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default hot(App);
