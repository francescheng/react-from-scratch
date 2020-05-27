import { hot } from 'react-hot-loader/root';
import React, { Component } from "react";
import Thumbnail from './thumbnail.jsx';
import './App.scss';
import img from './images/mushroom.jpg';

function Projects(props) {
  return (
    <div>
      <Thumbnail
      link=""
      image={img}
      project-title=""
      category=""
      />

      <Thumbnail
      link=""
      image={img}
      title=""
      category=""
      />

      <Thumbnail
      link=""
      image={img}
      title=""
      category=""
      />
    </div>
  )
}

export default hot(Projects);
