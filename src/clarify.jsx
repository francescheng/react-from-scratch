import { hot } from 'react-hot-loader/root';
import React, { Component } from "react";
import { useParams } from "react-router-dom";
import clarify from "../assets/images/clarify-screens.jpg"
import figma from "../assets/images/clarify_figma.png"
import home from "../assets/images/clarify-home.png"
import profile from "../assets/images/profile.png"
import flags from "../assets/images/flags.png"
import shelf from "../assets/images/shelf.png"
import compare from "../assets/images/compare.png"
import scandit from "../assets/images/scandit.png"
import review from "../assets/images/review.png"
import related from "../assets/images/related.png"

function Clarify(props) {
  const { projectId } = useParams();
  return (
    <div>
      <div className="img-desc">
      <img src={clarify} alt="Clarify phone app"/>
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
            <p>PgSearch</p>
            <p>Figma</p>
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
      <div className="imgs">
        <img class="screens" src={home} alt="Clarify home screen"/>
        <img class="screens" src={profile} alt="Clarify Profile"/>
        <img class="screens" src={flags} alt="Set Skincare Flags"/>
        <img class="screens" src={shelf} alt="Clarify My Shelf"/>
        <img class="screens" src={compare} alt="Compare related products"/>
        <img class="screens" src={scandit} alt="Scan barcode"/>
        <img class="screens" src={review} alt="user review"/>
        <img class="screens" src={related} alt="Related products"/>
      </div>

      <div className="full-desc">
        <h3>Challenges</h3>
        <ol>
          <li>Linking the functionalities in a way that it is intuitive and easy-to-use (for example adding skin concerns and viewing them on product pages)</li>
          <li>Understanding the core problems we were trying to address and creating a compelling user journey</li>
          <li>Avoiding feature creep and bloat</li>
        </ol>
      </div>
      <img class="full-img" src={figma} alt="Clarify Figma screens"/>
    </div>
  );
}

export default hot(Clarify);
