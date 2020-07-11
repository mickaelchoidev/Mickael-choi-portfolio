import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Header from "../components/Header";
import { FaRegSmile } from "react-icons/fa";

import "./Home.css";

const Home = () => {
  const pageVariants = {
    initial: { x: "-100vw" },
    in: { x: 0 },
    out: { x: "-100vw" },
  };
  const pageTransition = {
    transition: "ease",
    duration: 0.5,
  };
  return (
    <motion.section
      initial="out"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="Home-section"
    >
      <Header />
      <div className="Home">
        <div className="Home-buttons">
          <Link to="/about">
            <button type="button" className="Home-button">
              About me
            </button>
          </Link>
          <Link to="/projects">
            <button type="button" className="Home-button">
              My projects
            </button>
          </Link>
          <Link to="/contact">
            <button type="button" className="Home-button">
              Contact me
            </button>
          </Link>
        </div>
        <div className="Home-jumbotron">
          <p className="Home-jumbotron-welcome">
            Hello World ! Welcome to my website
            <span className="Home-jumbotron-icon">
              <FaRegSmile size="30px" color="#191919" />
            </span>
          </p>
          <hr
            style={{
              margin: "4vh auto 4vh auto",
              width: "70%",
              height: "1px",
              color: "rgba(25, 25, 25, 0.8)",
            }}
          />
          <p className="Home-jumbotron-presentation">
            I'm Mickael Choi and I'm a junior React developer based in Paris,
            France.
            <br />
            <br />
            After graduating from the Wild Code School of Paris in February
            2020, I'm actively looking for a company for a study contract in
            order to complete my apprenticeship in web development and to
            prepare myself for this job in a concrete way.
            <br />
            Indeed, I think it's important to associate the professional world
            with the school environment in order to meet and learn about the
            real problems of the job while following theoretical training to
            deepen my knowledge and put it into practice. Moreover, being able
            to be guided by an experienced person within the framework of this
            professional contract can be a real opportunity for me to progress
            in the best possible way.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
