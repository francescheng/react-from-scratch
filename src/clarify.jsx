import { hot } from 'react-hot-loader/root';
import React, { Component } from "react";
import { useParams } from "react-router-dom";

function Clarify(props) {
  const { projectId } = useParams();
  return (
    <div>
      <div className="img-desc">
        <div className="desc">
          <h3>Clarify</h3>
          <p>Clarify was a group project designed and developed in two weeks (you can view my presentation below). My responsibilities on this project were keeping the group organized and on track, and some front-end development.</p>
          <div className="tech">
          <p>HTML</p>
          <p>SASS</p>
          <p>JavaScript ES6</p>
          <p>Ruby on Rails</p>
          <p>PostgreSQL</p>
          </div>
        </div>
        <img src="" alt=""/>
      </div>
    </div>
  );
}

export default hot(Clarify);
