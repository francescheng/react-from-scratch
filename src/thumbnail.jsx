import { hot } from 'react-hot-loader/root';
import React, { Component } from "react";
import { NavLink, Route, Switch } from 'react-router-dom';
import Ppf from './ppfservices.jsx';

function Thumbnail(props) {
  return (
    <fragment className="project">
      <NavLink to={props.link}>
        <div className="project-image">
          <img src={props.image} alt="Project Image"/>
        </div>
        <div className="project-title">{props.title}</div>
        <div className="project-category">{props.category}</div>
      </NavLink>
    </fragment>
  );
}

export default hot(Thumbnail);
