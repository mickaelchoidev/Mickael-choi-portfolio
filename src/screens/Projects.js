import React from "react";
// import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Header from "../components/Header";

import "./Projects.css";

const Projects = () => {
  const pageVariants = {
    initial: { opacity: 0 },
    in: { opacity: 1 },
    out: { opacity: 0 },
  };

  const pageTransition = {
    transition: "easeInOut",
    duration: 1.5,
  };
  return (
    <motion.section
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="Projects-section"
    >
      <Header />
      <h1>Projects page</h1>
    </motion.section>
  );
};

export default Projects;
