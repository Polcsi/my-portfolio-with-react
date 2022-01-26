import React, { useState } from "react";
import { Link } from "react-router-dom";
import { plans } from "../data";

const PricingPlans = () => {
  const [slideIndex, setSlideIndex] = useState(1);

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

  const onPointerEvent = (e) => {
    let isTouchEvent = e.type === "touchstart" ? true : false;
    let offset = 0;
    let initialX = isTouchEvent ? e.touches[0].clientX : e.clientX;

    document.ontouchmove = onPointerMove;
    document.ontouchend = onPointerEnd;

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
      document.ontouchmove = null;
      document.ontouchend = null;
    }
  };

  return (
    <div
      className="plans"
      onTouchStart={onPointerEvent}
      onMouseDown={onPointerEvent}
    >
      {plans.map((plan, index) => {
        const { id, name, price, info } = plan;
        let position =
          index === slideIndex
            ? "activeCard"
            : index < slideIndex
            ? "prevCard"
            : "nextCard";
        return (
          <article className={`pricing-plan ${position}`} key={id}>
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
    </div>
  );
};

export default PricingPlans;
