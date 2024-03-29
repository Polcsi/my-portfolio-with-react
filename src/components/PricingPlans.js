import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { plans } from "../data";
import { useGlobalContext } from "../context";
import { useResize } from "../useResize";
import { motion } from "framer-motion";

const PricingPlans = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const { dimensions, addTouchEventListener, checkSize } = useGlobalContext();

  useResize();

  const slideLeft = () => {
    if (slideIndex - 1 >= 0) {
      setSlideIndex(slideIndex - 1);
    }
  };

  const slideRight = () => {
    if (slideIndex + 1 <= plans.length - 1) {
      setSlideIndex(slideIndex + 1);
    }
  };

  useEffect(() => {
    if (
      addTouchEventListener ||
      checkSize(dimensions.width, dimensions.height)
    ) {
      let slider = setInterval(() => {
        if (slideIndex + 1 <= plans.length - 1) {
          setSlideIndex(slideIndex + 1);
        } else {
          setSlideIndex(0);
        }
      }, 5000);
      return () => clearInterval(slider);
    }
  }, [
    slideIndex,
    addTouchEventListener,
    dimensions.width,
    dimensions.height,
    checkSize,
  ]);

  const onPointerEvent = (e) => {
    if (
      addTouchEventListener ||
      checkSize(dimensions.width, dimensions.height)
    ) {
      let isTouchEvent = e.type === "touchstart" ? true : false;
      let offset = 0;
      let initialX = isTouchEvent ? e.touches[0].clientX : e.clientX;

      if (isTouchEvent) {
        document.ontouchmove = onPointerMove;
        document.ontouchend = onPointerEnd;
      } else {
        document.onmousemove = onPointerMove;
        document.onmouseup = onPointerEnd;
      }

      function onPointerMove(e) {
        offset = (isTouchEvent ? e.touches[0].clientX : e.clientX) - initialX;
        if (offset <= -100) {
          slideRight();
          return;
        }
        if (offset >= 100) {
          slideLeft();
          return;
        }
      }

      function onPointerEnd() {
        if (isTouchEvent) {
          document.ontouchmove = null;
          document.ontouchend = null;
        } else {
          document.onmousemove = null;
          document.onmouseup = null;
        }
      }
    } else {
      return;
    }
  };

  if (addTouchEventListener || checkSize(dimensions.width, dimensions.height)) {
    return (
      <motion.div
        className="plans"
        onTouchStart={onPointerEvent}
        onMouseDown={onPointerEvent}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          delay: 0.2,
          duration: 1,
          bounce: 0.5,
          ease: "easeInOut",
        }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {plans.map((plan, index) => {
          const { id, name, price, info } = plan;
          let position =
            index === slideIndex
              ? "activeCard"
              : index < slideIndex
              ? slideIndex - 1 === index
                ? "prevCard"
                : "hideLeftCard"
              : slideIndex + 1 === index
              ? "nextCard"
              : "hideRightCard";
          return (
            <article
              className={`pricing-plan disable-select ${position}`}
              key={id}
            >
              <div className="pricing-card-header">
                <h3>{name}</h3>
                <h1>€{price}</h1>
                <Link to="/contact" className="primary-green-btn btn">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  contact
                </Link>
              </div>
              <ul className="pricing-card-details">
                {info.map((item, index) => {
                  return <li key={index}>{item}</li>;
                })}
              </ul>
            </article>
          );
        })}
      </motion.div>
    );
  } else {
    return (
      <div className="plans">
        {plans.map((plan, index) => {
          const { id, name, price, info } = plan;
          return (
            <motion.article
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.7,
                duration: 1,
                bounce: 0.5,
                ease: "easeInOut",
              }}
              viewport={{ once: true, amount: 0.3 }}
              className="pricing-plan disable-select"
              key={id}
            >
              <div className="pricing-card-header">
                <h3>{name}</h3>
                <h1>€{price}</h1>
                <Link to="/contact" className="primary-green-btn btn">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  contact
                </Link>
              </div>
              <ul className="pricing-card-details">
                {info.map((item, index) => {
                  return <li key={index}>{item}</li>;
                })}
              </ul>
            </motion.article>
          );
        })}
      </div>
    );
  }
};

export default PricingPlans;
