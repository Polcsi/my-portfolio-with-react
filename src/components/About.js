import React from "react";
import { info } from "../data";

const About = () => {
  return (
    <section className="about-section section" name="about">
      <div className="section-container about-section-grid">
        {" "}
        <div className="section-title">
          <h1>About me</h1>
        </div>
        <div className="about-text">
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
      </div>
    </section>
  );
};

export default About;
