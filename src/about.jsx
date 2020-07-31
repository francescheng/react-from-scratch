import { hot } from 'react-hot-loader/root';
import React, { Component } from "react";

function About(props) {
  return (
    <div className="about-info">
      <h3 id="hello">Hi, I’m Frances Cheng</h3>

      <div className="info-block">
        <div className="info-title">
          <h3>I'm a:</h3>
        </div>
        <div className="info-des">
          <p>Developer, Designer, Illustrator, Photographer, and Learner</p>
        </div>
      </div>

      <div className="info-block">
        <div className="info-title">
          <h3>I've worked at:</h3>
        </div>
        <div className="info-des">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>
      </div>

      <div className="info-block">
        <div className="info-title">
          <h3>In my spare time<br/>I like to:</h3>
        </div>
        <div className="info-des">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>
      </div>

    </div>
  )
}

export default hot(About);
