import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import "./HomeButtons.css";

const HomeButtons = () => {
  const aboutVariants = {
    initial: { y: "-50%", opacity: 0 },
    in: { y: 0, opacity: 1 },
    out: { y: "-50%", opacity: 0 },
  };
  const elementTransition = {
    delay: 0,
    duration: 1,
    transition: "easeInOut",
  };
  return (
    <motion.div
      className="Home-buttons"
      initial="out"
      animate="in"
      exit="out"
      variants={aboutVariants}
      transition={elementTransition}
    >
      <Link to="/about" className="Home-link">
        <button type="button" className="Home-button">
          About me
        </button>
      </Link>
      <Link to="/projects" className="Home-link">
        <button type="button" className="Home-button">
          My projects
        </button>
      </Link>
      <Link to="/contact" className="Home-link">
        <button type="button" className="Home-button">
          Contact me
        </button>
      </Link>
    </motion.div>
  );
};

export default HomeButtons;
