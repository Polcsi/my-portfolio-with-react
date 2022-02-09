import React from "react";
import { info } from "../data";
import { motion } from "framer-motion";
import { revealText, revealInfoCard } from "./ScrollTriggeredAnimations";

const About = () => {
  return (
    <section className="section-container about-section section" name="about">
      <motion.div
        className="about-section-grid"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
      >
        {" "}
        <motion.div className="section-title" variants={revealText}>
          <h1>About me</h1>
        </motion.div>
        <motion.div className="about-text" variants={revealText}>
          <p>
            Hi my name is Bence Pollák. I live a little village from south part
            of Hungary. On middle school when I started to learn programming I
            felt that I wanna deal with it in the future. So I started teaching
            myself how to code from the internet and bunch of books I bought.
            After grammer school I went to university where I started to learn
            IT Enginnering to become a programmer. So I am still attend to
            university I am in the foruth semester. I am so exited to start
            working as a programmer. When I found out what kind of app I would
            like to develop then I became unstoppable to learn everything about
            it. And if you didn't guess what kind of programmer I want to be. It
            is web development. Creating Web Application is my favorite part of
            building coding projects. If you have questions you can contact me
            on social media. You find the links in the contact section bottom of
            the page.
          </p>
        </motion.div>
        <motion.div
          className="info"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.3 }}
        >
          {info.map((item) => {
            const { id, icon, title, text } = item;
            return (
              <motion.article variants={revealInfoCard} key={id}>
                <img className="info-icon" src={icon} alt={`${title}-svg`} />
                <h2 className="info-title">{title}</h2>
                <p className="info-text">{text}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
