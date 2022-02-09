import React from "react";
import { services } from "../data";
import { achievements } from "../data";
import { motion } from "framer-motion";
import {
  revealSectionPreTitle,
  revealSectionTitle,
} from "./ScrollTriggeredAnimations";

const Services = () => {
  return (
    <section className="services-section section" name="services">
      <div className="section-container services-container-grid">
        <motion.div
          className="services-section-header section-header"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 variants={revealSectionPreTitle}>services</motion.h2>
          <motion.h1 variants={revealSectionTitle}>
            what i am great at
          </motion.h1>
        </motion.div>
        <div className="service-cards disable-select">
          {services.map((item, index) => {
            const { id, title, icon, projects } = item;
            return (
              <motion.article
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  delay: index * 0.4,
                  duration: 1,
                  bounce: 0.5,
                  ease: "easeInOut",
                }}
                viewport={{ once: true, amount: 0.3 }}
                className="service-card"
                key={id}
              >
                <img src={icon} alt={title + "_icon"} />
                <h1>{title}</h1>
                <p>{projects} Projects</p>
              </motion.article>
            );
          })}
        </div>
        <div className="achievements disable-select">
          {achievements.map((item, index) => {
            const { id, title, count } = item;
            return (
              <motion.article
                className="achievement"
                key={id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  delay: index * 0.4,
                  duration: 1,
                  bounce: 0.5,
                  ease: "easeInOut",
                }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <h1>{count} +</h1>
                <p>{title}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
