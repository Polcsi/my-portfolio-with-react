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
const blackBoxWithText = {
  initial: {
    height: "100vh",
    width: "100%",
    top: 0,
    left: "100%",
  },
  animate: {
    height: 0,
    transition: {
      when: "afterChildren",
      duration: 1,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

const textContainer = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 0,
    transition: {
      duration: 0.25,
      when: "afterChildren",
    },
  },
};

const text = {
  initial: {
    y: 40,
  },
  animate: {
    y: 80,
    transition: {
      duration: 1.5,
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

export const initialTextTransition = () => {
  return (
    <div className="absolute">
      <motion.div
        className="
      bg-black"
        initial="initial"
        animate="animate"
        variants={blackBoxWithText}
        onAnimationStart={() => document.body.classList.add("overflow-hidden")}
        onAnimationComplete={() =>
          document.body.classList.remove("overflow-hidden")
        }
      >
        <motion.svg variants={textContainer} className="z-50 flex">
          <pattern
            id="pattern"
            patternUnits="userSpaceOnUse"
            width={750}
            height={800}
            className="text-white"
          >
            <rect className="text-white w-full h-full fill-current" />
            <motion.rect
              variants={text}
              className="w-full h-full text-gray-600 fill-current"
            />
          </pattern>
          <text
            className="text-4xl font-bold"
            textAnchor="middle"
            x="50%"
            y="50%"
            style={{ fill: "url(#pattern)" }}
          >
            polcsiCode
          </text>
        </motion.svg>
      </motion.div>
    </div>
  );
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
