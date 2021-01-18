import { Link } from "@reach/router";
import React, { useContext } from "react";
import { Fade } from "react-awesome-reveal";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { AppThemeContext, themes } from "../../context/AppThemeContext";
import "./Header.css";

const Header = () => {
  const [appTheme, setAppTheme] = useContext(AppThemeContext);

  const isDarkMode = appTheme == themes.dark;
  return (
    <Fade>
      <nav
        className="navigation-header-bar"
        style={{ backgroundColor: appTheme.surface }}
      >
        <Link to="/" aria-label="Home page" title="Home">
          <h1 style={{ opacity: appTheme.highEmphasizedTextOpacity }}>
            lol master
          </h1>
        </Link>
        <div>
          <Link
            style={{ opacity: appTheme.mediumEmphasizedTextOpacity }}
            to="/champions"
          >
            champions
          </Link>
          <Link
            style={{ opacity: appTheme.mediumEmphasizedTextOpacity }}
            to="/tierList"
          >
            tier list
          </Link>
          <Link
            style={{ opacity: appTheme.mediumEmphasizedTextOpacity }}
            to="/search"
          >
            search
          </Link>
          <DarkModeSwitch
            onChange={() => {
              setAppTheme(isDarkMode ? themes.light : themes.dark);
            }}
            checked={isDarkMode}
            size={35}
            style={{ marginLeft: 16 }}
          />
        </div>
      </nav>
    </Fade>
  );
};

export default Header;
