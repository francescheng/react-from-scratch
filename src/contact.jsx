import { hot } from 'react-hot-loader/root';
import React, { Component } from "react";

function Contact(props) {
  return (
    <div>
      <div class="grey-form">
        <h3>Contact me at <span id="red-email">francesvcheng@gmail.com</span><br/>or send a message below</h3>
        <form name="contact" method="POST" action="/thanks/">
          <input type="hidden" name="form-name" value="contact" />
          <div class="names">
            <div class="name">
              <h3>First Name</h3>
              <input class="grey-contact" type="text" id="fname" name="firstname" placeholder="First Name" required />
            </div>
            <div class="name">
              <h3>Last Name</h3>
              <input class="grey-contact" type="text" id="lname" name="lastname" placeholder="Last Name" required />
            </div>
          </div>
          <div>
            <h3>Email</h3>
            <input class="grey-contact" type="email" id="email" name="email" placeholder="Email" required />
          </div>
          <div>
            <h3>Subject</h3>
            <input class="grey-contact" type="text" id="subject" name="subject" placeholder="Subject" />
          </div>
          <div>
            <h3>Message</h3>
            <textarea class="grey-message" name="message" placeholder="Your Message" required></textarea>
          </div>
          <div id="submit-button">
          <input class="solid-grey-button" type="submit" value="Submit" />
          </div>
        </form>
      </div>

    </div>
  )
}

export default hot(Contact);
