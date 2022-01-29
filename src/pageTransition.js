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
const blackBoxWait = {
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
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 2,
      duration: 2,
      ease: "easeInOut",
    },
  },
};
const drawLines = {
  initial: {
    opacity: 0,
    pathLength: 0,
  },
  animate: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};
const showCodeIcon = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 2,
      duration: 2,
      ease: "easeInOut",
    },
  },
};
const circles = {
  initial: {
    opacity: 0,
    pathLength: 0,
    r: 1,
  },
  animate: (i) => {
    const delay = 1 + i * 0.4;
    return {
      opacity: 1,
      pathLength: 1,
      r: 7,
      transition: {
        delay: 1,
        duration: delay,
        ease: [0.87, 0, 0.13, 1],
      },
    };
  },
};

export const InitialTextTransition = () => {
  return (
    <div className="absolute">
      <motion.div
        className="
      bg-black"
        initial="initial"
        animate="animate"
        variants={blackBoxWait}
        onAnimationStart={() => document.body.classList.add("overflow-hidden")}
        onAnimationComplete={() =>
          document.body.classList.remove("overflow-hidden")
        }
      >
        <motion.div className="flex" variants={textContainer}>
          <motion.svg
            className="transition-logo"
            id="logo"
            xmlns="http://www.w3.org/2000/svg"
            width="223"
            height="191"
            viewBox="0 0 223 191"
          >
            <motion.path
              variants={showCodeIcon}
              id="Icon_awesome-code"
              data-name="Icon awesome-code"
              d="M38.087,68.946l-8.33-2.386a1.617,1.617,0,0,1-1.12-2.008L47.278,1.17A1.644,1.644,0,0,1,49.312.065l8.33,2.386a1.617,1.617,0,0,1,1.12,2.008L40.122,67.841A1.64,1.64,0,0,1,38.087,68.946ZM22.52,53.822l5.94-6.255a1.6,1.6,0,0,0-.109-2.318L15.979,34.505,28.351,23.762a1.592,1.592,0,0,0,.109-2.318l-5.94-6.255a1.655,1.655,0,0,0-2.321-.067L.521,33.319a1.593,1.593,0,0,0,0,2.359L20.2,53.889a1.643,1.643,0,0,0,2.321-.067ZM67.2,53.9,86.879,35.692a1.593,1.593,0,0,0,0-2.359L67.2,15.108a1.669,1.669,0,0,0-2.321.067l-5.94,6.255a1.6,1.6,0,0,0,.109,2.318L71.421,34.505,59.049,45.249a1.592,1.592,0,0,0-.109,2.319l5.94,6.255A1.656,1.656,0,0,0,67.2,53.9Z"
              transform="translate(67.8 91.497)"
              fill="#fff"
            />
            <g
              id="Rectangle_47"
              data-name="Rectangle 47"
              fill="none"
              stroke="#fff"
              strokeWidth="14"
            >
              <rect width="223" height="191" rx="36" stroke="none" />
              <motion.rect
                variants={drawLines}
                x="7"
                y="7"
                width="209"
                height="177"
                rx="29"
                fill="none"
              />
            </g>
            <motion.line
              variants={drawLines}
              id="Line_5"
              data-name="Line 5"
              x2="206.5"
              transform="translate(4.75 63.46)"
              fill="none"
              stroke="#fff"
              strokeWidth="14"
            />
            <motion.circle
              variants={circles}
              id="Ellipse_1"
              data-name="Ellipse 1"
              cx="7"
              cy="7"
              r="7"
              transform="translate(26 31)"
              fill="#fff"
              custom={1}
            />
            <motion.text
              variants={text}
              id="Polcsi"
              transform="translate(118 42)"
              fill="#fff"
              fontSize="15"
              fontFamily="GoodTimes, Good Times"
            >
              <tspan x="0" y="0">
                Polcsi
              </tspan>
            </motion.text>
            <motion.circle
              variants={circles}
              id="Ellipse_6"
              data-name="Ellipse 6"
              cx="7"
              cy="7"
              r="7"
              transform="translate(45 31)"
              fill="#fff"
              custom={2}
            />
            <motion.circle
              variants={circles}
              id="Ellipse_7"
              data-name="Ellipse 7"
              cx="7"
              cy="7"
              r="7"
              transform="translate(64 31)"
              fill="#fff"
              custom={3}
            />
          </motion.svg>
          <h2 className="white-text">
            polcsi<span className="uppercase">code</span>
          </h2>
        </motion.div>
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
