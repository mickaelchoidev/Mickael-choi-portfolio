import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import "./Header.css";

const Header = () => {
  const elementVariants = {
    initial: { x: "-100%", opacity: 0 },
    in: { x: 0, opacity: 1 },
    out: { x: "100vw", opacity: 1 },
  };
  const elementTransition = {
    delay: 0,
    duration: 1,
    transition: "easeInOut",
  };
  return (
    <motion.header
      initial="initial"
      animate="in"
      exit="out"
      variants={elementVariants}
      transition={elementTransition}
      className="Header"
    >
      <Link to="/" className="Header-title">
        Mickael Choi's Portfolio
      </Link>
    </motion.header>
  );
};

export default Header;
