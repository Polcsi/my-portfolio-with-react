import React from "react";
import { skillsInfo } from "../data";

const Skills = () => {
  React.useEffect(() => {
    var lazyloadImages;

    var lazyloadThrottleTimeout;
    lazyloadImages = document.querySelectorAll(".lazy");

    function lazyload() {
      if (lazyloadThrottleTimeout) {
        clearTimeout(lazyloadThrottleTimeout);
      }

      lazyloadThrottleTimeout = setTimeout(function () {
        var scrollTop = window.pageYOffset;
        lazyloadImages.forEach(function (img) {
          if (img.offsetTop < window.innerHeight + scrollTop + 600) {
            console.log("Load Image");
            img.src = img.dataset.src;
            img.classList.remove("lazy");
          }
        });
      }, 200);
    }

    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
    return (_) => {
      console.log("clear");
      document.removeEventListener("scroll", lazyload);
      window.removeEventListener("resize", lazyload);
      window.removeEventListener("orientationChange", lazyload);
    };
  }, []);

  return (
    <section className="skills-section lazy" name="skills">
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
