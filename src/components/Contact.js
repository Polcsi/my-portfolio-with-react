import React, { useState } from "react";
import { allContactsOportunity } from "../data";
import MiniAlert from "./MiniAlert";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  revealSectionPreTitle,
  revealSectionTitle,
} from "./ScrollTriggeredAnimations";

const Contact = () => {
  const [copy, setCopy] = useState(false);
  return (
    <section className="section contact-section">
      {copy && <MiniAlert setCopy={setCopy} />}
      <motion.div
        className="section-header"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 variants={revealSectionPreTitle}>contact</motion.h2>
        <motion.h1 variants={revealSectionTitle}>ways to contact me</motion.h1>
        <motion.p variants={revealSectionTitle}>
          Feel free to get in touch with me with anything related to me or you
          can just say hi. If you have questions or suggestions, please contact
          me on below the platforms. You can click to cards to copy the url or
          send me a message from contact page.
        </motion.p>
      </motion.div>
      <div className="contact-cards">
        {allContactsOportunity.map(
          ({ id, url, icon, platform, text }, index) => {
            return (
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.2,
                  duration: 1,
                  ease: "easeInOut",
                }}
                viewport={{ once: true, amount: 0.3 }}
                key={id}
                onClick={() => {
                  navigator.clipboard.writeText(url);
                  setCopy(true);
                }}
                title={platform}
                className="disable-select"
              >
                {icon}
                <p>{text}</p>
              </motion.article>
            );
          }
        )}
      </div>
      <Link className="btn white-border-btn" to="/contact">
        contact me
      </Link>
    </section>
  );
};

export default Contact;
