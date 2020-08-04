import { hot } from 'react-hot-loader/root';
import React, { Component } from "react";

function About(props) {
  return (
    <div className="about-info">
    <div className="hello">
      <h3>Hi, I’m Frances Cheng</h3>
    </div>

      <div className="info-block">
        <div className="info-title">
          <h3>I'm a:</h3>
        </div>
        <div className="info-des">
          <p>Developer, Designer, Illustrator, Photographer, Baking and Gardening Enthusiast, and living in the Bay Area looking for my next opportunity.</p>
        </div>
      </div>

      <div className="info-block">
        <div className="info-title">
          <h3>My skills:</h3>
        </div>
        <div className="info-des">
          <p>Technologies: Ruby on Rails, HTML/CSS, JavaScript, PostgresSQL, React.js<br/>Design: Photoshop, Illustrator, InDesign, Lightroom, XD, User Research, UI/UX design<br/>Languages: English, Mandarin, French, Japanese</p>
        </div>
      </div>

      <div className="info-block">
        <div className="info-title">
          <h3>My Background:</h3>
        </div>
        <div className="info-des">
          <p>I have a B.S. in Industrial Design and 5 years of design experience in product and graphic design. Currently I'm studying programming and computer science, and doing freelance web design and development projects. To find out more about my professional background please take a look at my <a href="https://www.linkedin.com/in/frances-cheng/">LinkedIn</a></p>
        </div>
      </div>

    </div>
  )
}

export default hot(About);
