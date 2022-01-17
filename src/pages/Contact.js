import React from "react";
import "../css/contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-title">
        <h1>contact me</h1>
        <p>
          Contact me to learn more about my services. I will be happy to answer
          your question and help you. I will get your message in my email inbox.
        </p>
      </div>
      <form className="contact-page-form">
        <input
          type="text"
          className="contact-input firstname"
          placeholder="First Name*"
          required
        />
        <input
          type="text"
          className="contact-input lastname"
          placeholder="Last Name*"
          required
        />
        <input
          type="email"
          className="contact-input email"
          placeholder="Email*"
          required
        />
        <input type="text" className="contact-input town" placeholder="Town" />
        <textarea
          className="contact-input message"
          placeholder="Your Message...*"
          required
        ></textarea>
        <button type="submit" className="btn submit-btn">
          send
        </button>
      </form>
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe
            title="map"
            width="612"
            height="560"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=hungary%20p%C3%A9cs&t=&z=11&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
