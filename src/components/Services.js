import React from "react";
import { services } from "../data";
import { achievements } from "../data";

const Services = () => {
  return (
    <section className="services-section section" name="services">
      <div className="section-container services-container-grid">
        <div className="services-section-header section-header">
          <h2>services</h2>
          <h1>what i am great at</h1>
        </div>
        <div className="service-cards disable-select">
          {services.map((item) => {
            const { id, title, icon, projects } = item;
            return (
              <article className="service-card" key={id}>
                <img src={icon} alt={title + "_icon"} />
                <h1>{title}</h1>
                <p>{projects} Projects</p>
              </article>
            );
          })}
        </div>
        <div className="achievements disable-select">
          {achievements.map((item) => {
            const { id, title, count } = item;
            return (
              <article className="achievement" key={id}>
                <h1>{count} +</h1>
                <p>{title}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
