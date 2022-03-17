import React from "react";
import Navbar from "../components/Navbar";
import {
  InitialTransition,
  content,
  title,
  secondaryTitle,
  main,
  showTutoringGrapics,
  showSingleGrapics,
} from "../pageTransition";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../css/tutoring.css";
import Contact from "../components/Contact";
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
          <div className="tutoring-page-header">
            <motion.div variants={title} className="titles">
              <h1>home</h1>
            </motion.div>
            <motion.p variants={secondaryTitle}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est.
            </motion.p>
            <motion.div variants={secondaryTitle}>
              <Link className="green-rounded-btn" to="/contact">
                contact
              </Link>
            </motion.div>
          </div>
          <motion.img
            variants={showSingleGrapics}
            custom={1}
            className="small-screen-monitor"
            src={Monitor}
            alt="monitor-alt"
          />
          <section className="grapics">
            <motion.div className="circle" variants={showTutoringGrapics}>
              <motion.img
                variants={showSingleGrapics}
                custom={1}
                className="grapics-img monitor"
                src={Monitor}
                alt="monitor-grapics"
              />
              <motion.img
                variants={showSingleGrapics}
                custom={2}
                className="grapics-img keyboard"
                src={Keyboard}
                alt="keyboard-grapics"
              />
              <motion.img
                variants={showSingleGrapics}
                custom={3}
                className="grapics-img calculator"
                src={Calculator}
                alt="calculator-grapics"
              />
              <motion.img
                variants={showSingleGrapics}
                custom={4}
                className="grapics-img book"
                src={Book}
                alt="book-grapics"
              />
              <motion.img
                variants={showSingleGrapics}
                custom={5}
                className="grapics-img diary"
                src={Diary}
                alt="calculator-diary"
              />
              <motion.img
                variants={showSingleGrapics}
                custom={6}
                className="grapics-img pencil"
                src={Pencil}
                alt="calculator-pencil"
              />
              <motion.img
                variants={showSingleGrapics}
                custom={7}
                className="grapics-img ruler"
                src={Ruler}
                alt="calculator-ruler"
              />
            </motion.div>
          </section>
          <motion.section variants={main} className="scroll-indicator">
            <img src={ScrollIcon} alt="scroll_mouse" />
            <p>scroll to learn more</p>
          </motion.section>
        </div>
        <Contact />
      </motion.section>
    </>
  );
};

export default Tutoring;
