import { Link } from "@reach/router";
import React, { useContext, useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { AppThemeContext, themes } from "../../context/AppThemeContext";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import "./Header.css";

const Header = () => {
  const [appTheme, setAppTheme] = useContext(AppThemeContext),
    [isDarkMode, setIsDarkMode] = useState(appTheme == themes.dark);

  useEffect(() => {
    console.log("App theme", appTheme);
  }, []);

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
            onChange={(checked) => {
              setIsDarkMode(checked);
              setAppTheme(
                appTheme == themes.light ? themes.dark : themes.light
              );
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
