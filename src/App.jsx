import { hot } from 'react-hot-loader/root';
import React, { Component} from "react";
import "./App.scss";

class App extends Component{
  render(){
    return(
      <div className="App">
         <h1>Simple SPA</h1>
         <ul className="header">
           <li><a href="/">Projects</a></li>
           <li><a href="/personal">Personal</a></li>
           <li><a href="/about">About</a></li>
           <li><a href="/contact">Contact</a></li>
         </ul>
         <div className="content">

         </div>
      </div>
    );
  }
}

export default hot(App);
