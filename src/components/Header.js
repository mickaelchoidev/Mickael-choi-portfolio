import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <header className="Header">
      <Link to="/" className="Header-title">
        Mickael Choi's Portfolio
      </Link>
    </header>
  );
};

export default Header;
