import React, { useState } from "react";
import { allContactsOportunity } from "../data";
import MiniAlert from "./MiniAlert";
import { Link } from "react-router-dom";

const Contact = () => {
  const [copy, setCopy] = useState(false);
  return (
    <section className="section contact-section">
      {copy && <MiniAlert setCopy={setCopy} />}
      <div className="section-header">
        <h2>contact</h2>
        <h1>ways to contact me</h1>
        <p>
          Feel free to get in touch with me with anything related to me or you
          can just say hi. If you have questions or suggestions, please contact
          me on below the platforms. You can click to cards to copy the url or
          send me a message from contact page.
        </p>
      </div>
      <div className="contact-cards">
        {allContactsOportunity.map(({ id, url, icon, platform, text }) => {
          return (
            <article
              key={id}
              onClick={() => {
                navigator.clipboard.writeText(url);
                setCopy(true);
              }}
              title={platform}
            >
              {icon}
              <p>{text}</p>
            </article>
          );
        })}
      </div>
      <Link className="btn white-border-btn" to="/contact">
        contact me
      </Link>
    </section>
  );
};

export default Contact;
