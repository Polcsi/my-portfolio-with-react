import React from "react";
import { Link } from "react-router-dom";
import { plans } from "../data";

const PricingPlans = () => {
  return (
    <div className="plans">
      {plans.map((plan) => {
        const { id, name, price, info } = plan;
        return (
          <article className="pricing-plan" key={id}>
            <div className="pricing-card-header">
              <h3>{name}</h3>
              <h1>€{price}</h1>
              <Link to="/contact" className="pricing-plan-btn btn">
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
