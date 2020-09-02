import { hot } from 'react-hot-loader/root';
import React, { Component } from "react";
import { useParams } from "react-router-dom";
import clarify from "../assets/images/clarify-screens.jpg"

function Clarify(props) {
  const { projectId } = useParams();
  return (
    <div>
      <div className="img-desc">
      <img src={clarify} alt="PPF Services"/>
        <div className="desc">
          <h3>Clarify</h3>
          <p>Clarify was a group project designed and developed in two weeks (you can view my presentation below). My responsibilities on this project were keeping the group organized and on track, and some front-end development.</p>
          <div className="tech">
            <p>Ruby on Rails</p>
            <p>PostgreSQL</p>
            <p>Scandit API</p>
            <p>Pundit</p>
            <p>Devise</p>
            <p>Bootstrap</p>
          </div>
        </div>
      </div>
      <div className="img-desc">
        <div className="desc">
          <h3>User Stories</h3>
          <p>The purpose of Clarify is to allow consumers to make educated purchasing decisions by scanning or searching for a product, and then getting a detailed rundown of the ingredients. Users are able to set skin concern flags, ingredients to avoid, favorite products, and compare products with one another.</p>
        </div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/hV3tRDmsq-A?start=1711" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  );
}

export default hot(Clarify);
