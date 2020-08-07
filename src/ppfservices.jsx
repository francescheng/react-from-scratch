import { hot } from 'react-hot-loader/root';
import React, { Component } from "react";
import { useParams } from "react-router-dom";
import ppfimg from "../assets/images/ppf-mockup.jpg"

function Ppf(props) {
  const { projectId } = useParams();
  return (
    <div>
    <div className="hello">
        <h3>PPF Services Website</h3>
        <p><strong>Brief:</strong> A client needed a website designed and created for his landscaping and housekeeping company PPF Services</p>
    </div>
        <img src={ppfimg} alt="PPF Services"/>

    </div>
  );
}

export default hot(Ppf);
