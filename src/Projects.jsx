import { hot } from 'react-hot-loader/root';
import React, { Component } from "react";
import Thumbnail from './thumbnail.jsx';
import './App.scss';

function Projects(props) {
  return (
    <div>
      <Thumbnail
      link=""
      image=""
      project-title="Clarify"
      category=""
      />

      <Thumbnail
      link=""
      image=""
      title="Matchbox"
      category=""
      />

      <Thumbnail
      link=""
      image=""
      title="Amibot"
      category=""
      />
    </div>
  )
}

export default hot(Projects);
