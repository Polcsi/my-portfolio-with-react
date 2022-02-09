import React from "react";
import PricingPlans from "../components/PricingPlans";
import { motion } from "framer-motion";
import {
  revealSectionPreTitle,
  revealSectionTitle,
} from "./ScrollTriggeredAnimations";

const Pricing = () => {
  return (
    <section className="pricing-section section" name="pricing">
      <div className="section-container">
        <motion.div
          className="section-header"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 variants={revealSectionPreTitle}>pricing</motion.h2>
          <motion.h1 variants={revealSectionTitle}>plans i offer</motion.h1>
        </motion.div>
        <PricingPlans />
      </div>
    </section>
  );
};

export default Pricing;
