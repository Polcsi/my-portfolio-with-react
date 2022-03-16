import React from "react";
import Navbar from "../components/Navbar";
import { InitialTransition, content, title } from "../pageTransition";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../css/tutoring.css";
// svgs
import Calculator from "../icons/Calculator.svg";
import Diary from "../icons/diary.svg";
import Keyboard from "../icons/keyboard.svg";
import Monitor from "../icons/monitor_browser.svg";
import ScrollIcon from "../icons/mouse_scroll.svg";
import Pencil from "../icons/pencil.svg";
import Ruler from "../icons/ruler.svg";
import Book from "../icons/book.svg";

const Tutoring = () => {
  return (
    <>
      <InitialTransition />
      <motion.section
        initial="initial"
        animate="animate"
        variants={content}
        className="tutoring-page disable-select"
      >
        <Navbar
          links={[
            { title: "home", type: "route", url: "/", active: false },
            {
              title: "projects",
              type: "route",
              url: "/projects",
            },
            {
              title: "tutoring",
              type: "route",
              url: "/tutoring",
              active: true,
            },
            { title: "contact", type: "route", url: "/contact", active: false },
          ]}
        />
        <div className="tutoring-page-container">
          <motion.div variants={title} className="tutoring-page-header">
            <div className="titles">
              <h1>home</h1>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est.
            </p>
            <Link className="green-rounded-btn" to="/contact">
              contact
            </Link>
          </motion.div>
          <section className="grapics">
            <div className="circle">
              <img
                className="grapics-img monitor"
                src={Monitor}
                alt="monitor-grapics"
              />
              <img
                className="grapics-img keyboard"
                src={Keyboard}
                alt="keyboard-grapics"
              />
              <img
                className="grapics-img calculator"
                src={Calculator}
                alt="calculator-grapics"
              />
              <img className="grapics-img book" src={Book} alt="book-grapics" />
              <img
                className="grapics-img diary"
                src={Diary}
                alt="calculator-diary"
              />
              <img
                className="grapics-img pencil"
                src={Pencil}
                alt="calculator-pencil"
              />
              <img
                className="grapics-img ruler"
                src={Ruler}
                alt="calculator-ruler"
              />
            </div>
          </section>
          <section className="scroll-indicator">
            <img src={ScrollIcon} alt="scroll_mouse" />
            <p>scroll to learn more</p>
          </section>
        </div>
      </motion.section>
    </>
  );
};

export default Tutoring;
