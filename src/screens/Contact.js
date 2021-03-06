import React from "react";
// import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { IconContext } from "react-icons";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaGooglePlusSquare } from "react-icons/fa";

import Header from "../components/Header";

import "./Contact.css";

const Contact = () => {
  const pageVariants = {
    initial: { opacity: 0 },
    in: { opacity: 1 },
    out: { opacity: 1 },
  };

  const pageTransition = {
    transition: "easeInOut",
    duration: 1,
  };
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
    <motion.section
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="Contact-section"
    >
      <Header />
      <div className="Contact">
        <IconContext.Provider
          value={{
            size: "80px",
            color: "rgba(37, 37, 37, 1)",
            style: { opacity: "inherit" },
          }}
        >
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={elementVariants}
            transition={elementTransition}
            className="Contact-link-wrapper"
          >
            <a
              href="https://linkedin.com/in/mickaelchoi"
              target="_blank"
              rel="noopener noreferrer"
              className="Contact-link"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/mickaelchoidev"
              target="_blank"
              rel="noopener noreferrer"
              className="Contact-link"
            >
              <FaGithubSquare />
            </a>

            <a
              href="mailto:mickaelchoidev@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="Contact-link"
            >
              <FaGooglePlusSquare />
            </a>
          </motion.div>
        </IconContext.Provider>
      </div>
    </motion.section>
  );
};

export default Contact;
