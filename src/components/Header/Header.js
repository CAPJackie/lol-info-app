import { Link } from "@reach/router";
import React from "react";
import { Fade } from "react-awesome-reveal";
import "./Header.css";

const Header = () => {
  return (
    <Fade>
      <nav className="navigation-header-bar">
        <Link to="/" aria-label="Home page" title="Home">
          <h1>lol master</h1>
        </Link>
        <div>
          <Link to="/champions">champions</Link>
          <Link to="/tierList">tier list</Link>
          <Link to="/search">search</Link>
        </div>
      </nav>
    </Fade>
  );
};

export default Header;
