import React, { useState } from "react";
import "../css/contact.css";

const Contact = () => {
  const [email, setEmail] = useState({
    firstname: "",
    lastname: "",
    email: "",
    town: "",
    message: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setEmail({ ...email, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.firstname && email.lastname && email.email && email.message) {
      setEmail({
        firstname: "",
        lastname: "",
        email: "",
        town: "",
        message: "",
      });
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-title">
        <h1>contact me</h1>
        <p>
          Contact me to learn more about my services. I will be happy to answer
          your question and help you. I will get your message in my email inbox.
        </p>
      </div>
      <form className="contact-page-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="contact-input firstname"
          placeholder="First Name*"
          required
          name="firstname"
          value={email.firstname}
          onChange={handleChange}
        />
        <input
          type="text"
          className="contact-input lastname"
          placeholder="Last Name*"
          required
          name="lastname"
          value={email.lastname}
          onChange={handleChange}
        />
        <input
          type="email"
          className="contact-input email"
          placeholder="Email*"
          required
          name="email"
          value={email.email}
          onChange={handleChange}
        />
        <input
          type="text"
          className="contact-input town"
          placeholder="Town"
          name="town"
          value={email.town}
          onChange={handleChange}
        />
        <textarea
          className="contact-input message"
          placeholder="Your Message...*"
          required
          name="message"
          value={email.message}
          onChange={handleChange}
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
