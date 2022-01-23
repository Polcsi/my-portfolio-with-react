import React from "react";
import { skillsInfo } from "../data";

const Skills = () => {
  return (
    <section className="skills-section" name="skills">
      <div className="skills-section-overlay section">
        {" "}
        <div className="section-container skills-grid-container">
          <div className="section-title skills-title">
            <h1>Skills</h1>
          </div>
          <div className="underline"></div>
          <div className="skills-container">
            {skillsInfo.map((skill) => {
              const { id, title, progress } = skill;
              return (
                <article key={id}>
                  <div className="title">
                    <h3>{title}</h3>
                  </div>
                  <div className="percentage">
                    <span>{progress}%</span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-track"
                      style={{ width: progress + "%" }}
                    ></div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
