import React, { useState } from "react";
import "../css/contact.css";
import Alert from "../components/Alert";

const Contact = () => {
  const [email, setEmail] = useState({
    firstname: "",
    lastname: "",
    email: "",
    town: "",
    message: "",
  });
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: "",
  });

  const setAlertHook = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setEmail({ ...email, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      email.firstname &&
      email.lastname &&
      email.email &&
      email.message.length >= 12
    ) {
      setAlertHook(true, "success", "message sent!");
      setEmail({
        firstname: "",
        lastname: "",
        email: "",
        town: "",
        message: "",
      });
    } else if (
      email.firstname &&
      email.lastname &&
      email.email &&
      email.message.length < 12
    ) {
      setAlertHook(true, "danger", "Message Should Minimum 12 Charchter Long.");
    } else {
      setAlertHook(true, "danger", "you must fill all the marked fields!");
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
        {alert.show && <Alert {...alert} setAlertHook={setAlertHook} />}
        <input
          type="text"
          className="contact-input firstname"
          placeholder="First Name*"
          name="firstname"
          value={email.firstname}
          onChange={handleChange}
        />
        <input
          type="text"
          className="contact-input lastname"
          placeholder="Last Name*"
          name="lastname"
          value={email.lastname}
          onChange={handleChange}
        />
        <input
          type="email"
          className="contact-input email"
          placeholder="Email*"
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
