import { hot } from 'react-hot-loader/root';
import React, { Component } from "react";
import { useParams } from "react-router-dom";
import matchbox from "../assets/images/matchbox-mockup.jpg"
import home from "../assets/images/matchbox-home.png"
import figma from "../assets/images/matchboxfigma.png"
import profile from "../assets/images/matchbox-profile.png"
import dashboard from "../assets/images/dashboard.png"
import search from "../assets/images/matchbox-search.png"

function Matchbox(props) {
  const { projectId } = useParams();
  return (
    <div>
      <div className="img-desc">
      <img src={matchbox} alt="Matchbox web app"/>
        <div className="desc">
          <h3>Matchbox</h3>
          <p>Matchbox was created as a one week group project in which my role was the front-end developer. The concept of the site was to create a web app for professionals who want to quickly connect with other professionals by booking coffee or lunch appointments.</p>
          <div className="tech">
            <p>Ruby on Rails</p>
            <p>PostgreSQL</p>
            <p>Pundit</p>
            <p>Devise</p>
            <p>Bootstrap</p>
            <p>PgSearch</p>
            <p>Figma</p>
          </div>
        </div>
      </div>

      <div className="img-desc">
        <div className="desc">
          <h3>Challenges</h3>
          <ol>
            <li>Creating an easy to navigate dashboard to show appointments and booking statuses</li>
            <br/>
            <li>Designing an intuitive flow in order to book an appointment with someone else, or to accept a booking</li>
            <br/>
            <li>Creating a working prototype within one week</li>
          </ol>
        </div>
        <img src={home} alt="Matchbox homepage"/>
      </div>

      <img class="full-img" src={figma} alt="Matchbox Figma screens"/>
      <img class="full-img" src={profile} alt="Matchbox profile page"/>
      <img class="full-img" src={dashboard} alt="Matchbox dashboard"/>
      <img class="full-img" src={search} alt="Matchbox search results"/>

    </div>
  );
}

export default hot(Matchbox);
