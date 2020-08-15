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
import ppfimage from '../assets/images/ppf-mockup.jpg';
import cat from '../assets/images/cat.jpg';
import logo from '../assets/images/logo.png';
import clarifyimg from '../assets/images/clarify-screens.jpg';
import matchimg from '../assets/images/matchbox-mockup.jpg';

function Projects(props) {
  return (
      <div className="grid">
        <div className="item a">
          <div className="content">
            <Thumbnail
            className="project"
            link="/work/ppfservices"
            image={ppfimage}
            project-title=""
            category=""
            />
          </div>
        </div>

        <div className="item b">
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

        <div className="item c">
          <div className="content">
            <Thumbnail
            className="project"
            link="/work/clarify"
            image={clarifyimg}
            title=""
            category=""
            />
          </div>
        </div>

        <div className="item d">
          <div className="content">
            <Thumbnail
            className="project"
            link="/work/matchbox"
            image={matchimg}
            title=""
            category=""
            />
          </div>
        </div>

      </div>
  )
}

export default hot(Projects);
