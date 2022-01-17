import React from "react";
import PricingPlans from "../components/PricingPlans";

const Pricing = () => {
  return (
    <section className="pricing-section section" name="pricing">
      <div className="section-header">
        <h2>pricing</h2>
        <h1>plans i offer</h1>
      </div>
      <PricingPlans />
    </section>
  );
};

export default Pricing;
