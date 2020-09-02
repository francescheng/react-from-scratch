import { hot } from 'react-hot-loader/root';
import React, { Component } from "react";

function Contact(props) {
  return (
    <div>
      <div className="grey-form">
      <div className="hello">
        <h3>Contact me at <a id="red-email" href="mailto:francesvcheng@gmail.com">francesvcheng@gmail.com</a><br/>or send a message below</h3>
      </div>
        <form name="contact" method="POST">
          <input type="hidden" name="form-name" value="contact" />
          <div className="names">
            <div className="name">
              <h3>First Name</h3>
              <input className="grey-contact" type="text" id="fname" name="firstname" required />
            </div>
            <div className="name">
              <h3>Last Name</h3>
              <input className="grey-contact" type="text" id="lname" name="lastname" required />
            </div>
          </div>
          <div>
            <h3>Email</h3>
            <input className="grey-contact" type="email" id="email" name="email" required />
          </div>
          <div>
            <h3>Subject</h3>
            <input className="grey-contact" type="text" id="subject" name="subject" />
          </div>
          <div>
            <h3>Message</h3>
            <textarea className="grey-message" name="message" required></textarea>
          </div>
          <div id="submit-button">
          <input className="solid-grey-button" type="submit" value="Submit" />
          </div>
        </form>
      </div>

    </div>
  )
}

export default hot(Contact);
