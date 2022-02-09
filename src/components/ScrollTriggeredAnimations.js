export const revealText = {
  offscreen: {
    opacity: 0,
    y: -20,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

export const revealInfoCard = {
  offscreen: {
    opacity: 0,
    y: -40,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      duration: 2,
      ease: "easeInOut",
    },
  },
};

export const revealSkills = {
  offscreen: {
    opacity: 0,
    x: -150,
  },
  onscreen: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 2,
      bounce: 0.3,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

export const revealSectionPreTitle = {
  offscreen: {
    opacity: 0,
    y: -50,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
      bounce: 0.5,
      ease: "easeInOut",
    },
  },
};

export const revealSectionTitle = {
  offscreen: {
    opacity: 0,
    y: -50,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3,
      duration: 1.5,
      bounce: 0.5,
      ease: "easeInOut",
    },
  },
};

export const revealCard = {
  offscreen: {
    opacity: 0,
    y: 20,
    x: -150,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      delay: 0.3,
      duration: 1,
      bounce: 0.5,
      ease: "easeInOut",
    },
  },
};
