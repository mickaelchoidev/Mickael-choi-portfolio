import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import "./HomeButtons.css";

const HomeButtons = () => {
  const elementVariants = {
    initial: { x: "-100%", opacity: 0 },
    in: { x: 0, opacity: 1 },
    out: { x: "100%", opacity: 1 },
  };
  const elementTransition = {
    delay: 0,
    duration: 1,
    transition: "easeInOut",
  };
  return (
    <motion.div
      className="Home-buttons"
      initial="initial"
      animate="in"
      exit="out"
      variants={elementVariants}
      transition={elementTransition}
    >
      {/* <Link to="/about" className="Home-link">
        <button type="button" className="Home-button">
          About me
        </button>
      </Link> */}
      {/* <Link to="/projects" className="Home-link">
        <button type="button" className="Home-button">
          My projects
        </button>
      </Link> */}
      <Link to="/contact" className="Home-link">
        <button type="button" className="Home-button">
          Contact me
        </button>
      </Link>
    </motion.div>
  );
};

export default HomeButtons;
