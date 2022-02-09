import React from "react";
import { skillsInfo } from "../data";
import { useGlobalContext } from "../context";
import { revealText, revealSkills } from "./ScrollTriggeredAnimations";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const Skills = () => {
  const { checkSize } = useGlobalContext();

  React.useEffect(() => {
    if (!checkSize(window.innerWidth, window.innerHeight)) {
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
    }
  }, [checkSize]);

  const animationDuration = 2000;
  const frameDuration = 1000 / 60;
  const totalFrames = Math.round(animationDuration / frameDuration);
  const easeOutQuad = (t) => t * (2 - t);

  const animateCountUp = (el) => {
    let frame = 0;
    const countTo = el.getAttribute("datatarget");
    const counter = setInterval(() => {
      frame++;
      const progress = easeOutQuad(frame / totalFrames);
      const currentCount = Math.round(countTo * progress);

      if (parseInt(el.innerHTML, 10) !== currentCount) {
        el.style.width = currentCount + "%";
      }

      if (frame === totalFrames) {
        clearInterval(counter);
      }
    }, frameDuration);
  };

  const runAnimations = () => {
    const countupEls = document.querySelectorAll(".counterSkills");
    countupEls.forEach(animateCountUp);
  };

  function change(isVisible) {
    if (isVisible) {
      runAnimations();
    }
  }

  return (
    <section className="skills-section lazy" name="skills">
      <div className="skills-section-overlay section">
        {" "}
        <motion.div
          className="section-container skills-grid-container"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            variants={revealText}
            className="section-title skills-title"
          >
            <h1>Skills</h1>
          </motion.div>
          <motion.div variants={revealText} className="underline"></motion.div>
          <VisibilitySensor
            partialVisibility
            onChange={change}
            offset={{ bottom: 50 }}
          >
            {({ isVisible }) => (
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.1 }}
                className="skills-container disable-select"
              >
                {skillsInfo.map((skill) => {
                  const { id, title, progress } = skill;
                  return (
                    <motion.article variants={revealSkills} key={id}>
                      <div className="title">
                        <h3>{title}</h3>
                      </div>
                      <div className="percentage">
                        <div style={{ height: 30 }}>
                          {isVisible ? (
                            <CountUp
                              duration={2}
                              start={0}
                              suffix=" %"
                              end={progress}
                            />
                          ) : (
                            progress + "%"
                          )}
                        </div>
                      </div>
                      <div className="progress-bar">
                        <div
                          id="progressTrackRef"
                          datatarget={progress}
                          className="progress-track counterSkills"
                          style={{
                            width: isVisible ? 0 + "%" : 1 + "%",
                          }}
                        ></div>
                      </div>
                    </motion.article>
                  );
                })}
              </motion.div>
            )}
          </VisibilitySensor>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
