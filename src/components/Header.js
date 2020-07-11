import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <header className="Header">
      <Link to="/">
        <b className="Header-title">Mickael Choi's Portfolio</b>
      </Link>
    </header>
  );
};

export default Header;
