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
            <input class="grey-contact name" type="text" id="fname" name="firstname" placeholder="First Name" required />
            <input class="grey-contact name" type="text" id="lname" name="lastname" placeholder="Last Name" required />
          </div>
          <div>
            <input class="grey-contact" type="email" id="email" name="email" placeholder="Email" required />
          </div>
          <div>
            <input class="grey-contact" type="text" id="subject" name="subject" placeholder="Subject" />
          </div>
          <div>
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
