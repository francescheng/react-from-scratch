import { hot } from 'react-hot-loader/root';
import React, { Component } from "react";
import Thumbnail from './thumbnail.jsx';
import img from '../assets/images/mushroom.jpg';
import cat from '../assets/images/cat.jpg';
import logo from '../assets/images/logo.png';
import manny from '../assets/images/manny.jpg';
import selfie from '../assets/images/selfie.jpg';
import face from '../assets/images/face.jpg';

function Projects(props) {
  return (
    <div className="grid">

    <div className="item">
      <div className="content">
        <Thumbnail
        className="project"
        link=""
        image={img}
        project-title=""
        category=""
        />
      </div>
    </div>

    <div className="item">
      <div className="content">
        <Thumbnail
        className="project"
        link=""
        image={cat}
        title=""
        category=""
        />
      </div>
    </div>

    <div className="item">
      <div className="content">
        <Thumbnail
        className="project"
        link=""
        image={manny}
        title=""
        category=""
        />
      </div>
    </div>

    <div className="item">
      <div className="content">
        <Thumbnail
        className="project"
        link=""
        image={selfie}
        title=""
        category=""
        />
      </div>
    </div>

    <div className="item">
      <div className="content">
        <Thumbnail
        className="project"
        link=""
        image={face}
        title=""
        category=""
        />
      </div>
    </div>

    </div>
  )
}

export default hot(Projects);
