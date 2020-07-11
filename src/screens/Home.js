import React from "react";

import { motion } from "framer-motion";

import Header from "../components/Header";
import HomeButtons from "../components/HomeButtons";
import { FaRegSmile } from "react-icons/fa";

import "./Home.css";

const Home = () => {
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
      initial="out"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="Home-section"
    >
      <Header />
      <div className="Home">
        <HomeButtons />
        <div className="Home-jumbotron">
          <p className="Home-jumbotron-welcome">
            Hello World ! Welcome to my website
            <span className="Home-jumbotron-icon">
              <FaRegSmile size="30px" color="#252525" />
            </span>
          </p>
          <hr
            style={{
              margin: "4vh auto 4vh auto",
              width: "70%",
              height: "px",
              color: "rgba(37,37,37, 0.7)",
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
