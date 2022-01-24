import React, { useState } from "react";
import { motion } from "framer-motion";
import { InitialTransition, title, content, main } from "../pageTransition";
import "../css/contact.css";
import Alert from "../components/Alert";
import axios from "axios";
import loadingIcon from "../icons/loading-buffering.gif";
import Navbar from "../components/Navbar";

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
  const [isSent, setIsSent] = useState(false);

  const setAlertHook = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setEmail({ ...email, [name]: value });
  };

  const capitilizeFirstLetter = (str) => {
    const arr = str.split(" ");
    const result = arr
      .map((item) => {
        return item.charAt(0).toUpperCase() + item.slice(1);
      })
      .join(" ");
    return result;
  };

  const validataEmailAddress = (str) => {
    const pattern = new RegExp(
      "[a-zA-Z0-9_\\.\\+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-\\.]+"
    );
    if (pattern.test(str)) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      email.firstname &&
      email.lastname &&
      validataEmailAddress(email.email) &&
      email.message.length >= 12
    ) {
      setIsSent(true);
      axios
        .post(
          "/.netlify/functions/sendEmail/",
          JSON.stringify({
            firstname: capitilizeFirstLetter(email.firstname),
            lastname: capitilizeFirstLetter(email.lastname),
            email_address: email.email,
            town: capitilizeFirstLetter(email.town),
            body: email.message.replaceAll("\n", "<br>"),
          })
        )
        .then((res) => {
          if (res.data.result !== "success") {
            setAlertHook(true, "danger", "failed to send message!");
            console.log(`%cFailed to send email`, "color: red;");
          } else {
            setAlertHook(true, "success", "message sent!");
            setIsSent(false);
            setEmail({
              firstname: "",
              lastname: "",
              email: "",
              town: "",
              message: "",
            });
          }
        })
        .catch(function (error) {
          setAlertHook(true, "danger", "something went wrong!");
          console.log(`%c${error}`, "color: red;");
        });
    } else if (
      email.firstname &&
      email.lastname &&
      !validataEmailAddress(email.email) &&
      email.message
    ) {
      setAlertHook(true, "danger", "invalid email adress!");
    } else if (
      email.firstname &&
      email.lastname &&
      validataEmailAddress(email.email) &&
      email.message.length < 12
    ) {
      setAlertHook(true, "danger", "Message Should Minimum 12 Charchter Long.");
    } else {
      setAlertHook(true, "danger", "you must fill all the marked fields!");
    }
  };

  return (
    <>
      {InitialTransition()}
      <div className="contact-page">
        <Navbar
          links={[
            { title: "home", type: "route", url: "/", active: false },
            {
              title: "projects",
              type: "route",
              url: "/projects",
              active: false,
            },
            { title: "contact", type: "route", url: "/contact", active: true },
          ]}
        />
        <motion.div
          initial="initial"
          animate="animate"
          variants={content}
          className="contact-page-container"
        >
          <div className="contact-title">
            <motion.h1 variants={title}>contact me</motion.h1>
            <motion.p variants={title}>
              Contact me to learn more about my services. I will be happy to
              answer your question and help you. I will get your message in my
              email inbox.
            </motion.p>
          </div>
          <motion.form
            variants={main}
            className="contact-page-form"
            onSubmit={handleSubmit}
          >
            {alert.show && <Alert {...alert} setAlertHook={setAlertHook} />}
            <input
              type="text"
              className={
                isSent
                  ? "contact-input firstname disabled-input"
                  : "contact-input firstname "
              }
              placeholder="First Name*"
              name="firstname"
              value={email.firstname}
              onChange={handleChange}
              disabled={isSent && "disabled"}
            />
            <input
              type="text"
              className={
                isSent
                  ? "contact-input lastname disabled-input"
                  : "contact-input lastname"
              }
              placeholder="Last Name*"
              name="lastname"
              value={email.lastname}
              onChange={handleChange}
              disabled={isSent && "disabled"}
            />
            <input
              type="text"
              className={
                isSent
                  ? "contact-input email disabled-input"
                  : "contact-input email"
              }
              placeholder="Email*"
              name="email"
              value={email.email}
              onChange={handleChange}
              disabled={isSent && "disabled"}
            />
            <input
              type="text"
              className={
                isSent
                  ? "contact-input town disabled-input"
                  : "contact-input town"
              }
              placeholder="Town"
              name="town"
              value={email.town}
              onChange={handleChange}
              disabled={isSent && "disabled"}
            />
            <textarea
              className={
                isSent
                  ? "contact-input message disabled-input"
                  : "contact-input message"
              }
              placeholder="Your Message...*"
              name="message"
              value={email.message}
              onChange={handleChange}
              disabled={isSent && "disabled"}
            ></textarea>
            <button
              type="submit"
              className={
                isSent ? "btn submit-btn disabled-submit-btn" : "btn submit-btn"
              }
              disabled={isSent && "disabled"}
            >
              {isSent ? (
                <img
                  src={loadingIcon}
                  alt="loading.gif"
                  className="loading-submit"
                />
              ) : (
                "send"
              )}
            </button>
          </motion.form>
          <motion.div variants={title} className="mapouter">
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
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Contact;
