import { motion } from "framer-motion";

const blackBox = {
  initial: {
    height: "100vh",
    width: "100%",
    top: 0,
    left: "100%",
  },
  animate: {
    height: 0,
    transition: {
      duration: 1,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

export const content = {
  animate: {
    transition: { staggerChildren: 0.1, delayChildren: 1 },
  },
};

export const title = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

export const secondaryTitle = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

export const main = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

export const InitialTransition = () => {
  return (
    <div className="absolute">
      <motion.div
        className="bg-black"
        initial="initial"
        animate="animate"
        variants={blackBox}
        onAnimationStart={() => document.body.classList.add("overflow-hidden")}
        onAnimationComplete={() =>
          document.body.classList.remove("overflow-hidden")
        }
      />
    </div>
  );
};
