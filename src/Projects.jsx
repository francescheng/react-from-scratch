import { hot } from 'react-hot-loader/root';
import React, { Component } from "react";
import Thumbnail from './thumbnail.jsx';
import {
  Route,
  Switch,
  useParams,
  useRouteMatch,
} from "react-router-dom";

import Ppf from "./ppfservices.jsx";
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
            link="/work/ppfservices"
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
            link="/work/odaiba"
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
            link="/work/clarify"
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
            link="/work/matchbox"
            image={selfie}
            title=""
            category=""
            />
          </div>
        </div>

      </div>
  )
}

export default hot(Projects);
