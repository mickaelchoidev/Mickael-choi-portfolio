import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Header from "../components/Header";

import "./Projects.css";

const Projects = () => {
  const pageVariants = {
    initial: { x: "100vw" },
    in: { x: 0 },
    out: { x: "100vw" },
  };
  const pageTransition = {
    transition: "linear",
    duration: 0.5,
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
