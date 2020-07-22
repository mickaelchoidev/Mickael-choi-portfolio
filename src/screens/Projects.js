import React from "react";
import { motion } from "framer-motion";

import Header from "../components/Header";
import Card from "../components/Card";

import "./Projects.css";

const Projects = () => {
  const pageVariants = {
    initial: { opacity: 0 },
    in: { opacity: 1 },
    out: { opacity: 1 },
  };

  const pageTransition = {
    transition: "easeInOut",
    duration: 1,
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
      <div className="Projects">
        <div className="Projects-list">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
