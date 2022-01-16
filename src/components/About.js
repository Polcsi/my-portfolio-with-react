import React from "react";
import { info } from "../data";

const About = () => {
  return (
    <section className="about-section section" name="about">
      <div className="section-title">
        <h1>About me</h1>
      </div>
      <div className="about-text">
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren
        </p>
      </div>
      <div className="info">
        {info.map((item) => {
          const { id, icon, title, text } = item;
          return (
            <article key={id}>
              <img className="info-icon" src={icon} alt={`${title}-svg`} />
              <h2 className="info-title">{title}</h2>
              <p className="info-text">{text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default About;
