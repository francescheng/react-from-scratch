import { hot } from 'react-hot-loader/root';
import React, { Component } from "react";
import { useParams } from "react-router-dom";
import ppfimg from "../assets/images/ppf-mockup.jpg"

function Ppf(props) {
  const { projectId } = useParams();
  return (
    <div>
      <div className="img-desc">
        <img src={ppfimg} alt="PPF Services"/>
        <div className="desc">
          <h3>PPF Services</h3>
          <p>A client needed a website designed and created for his landscaping and housekeeping company PPF Services so they could stand out from the competition and so potential customers could request quotes.</p>
          <div className="tech">
          <p>HTML</p>
          <p>SASS</p>
          <p>JavaScript ES6</p>
          <p>Jekyll</p>
          <p>Figma</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default hot(Ppf);
