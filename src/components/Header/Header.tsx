import  Link from "next/link";
import React, { FunctionComponent, useContext } from "react";
import { Fade } from "react-awesome-reveal";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { AppThemeContext, themes } from "../../context/AppThemeContext";
import styles from "./Header.module.css";

const Header: FunctionComponent = () => {
  const [appTheme, setAppTheme] = useContext(AppThemeContext);

  const isDarkMode = appTheme == themes.dark;
  return (
    <Fade>
      <nav
        className={styles.nav}
        style={{ backgroundColor: appTheme.surface }}
      >
        <Link href="/" aria-label="Home page" title="Home">
          <h1 style={{ opacity: appTheme.highEmphasizedTextOpacity }}>
            lol master
          </h1>
        </Link>
        <div>
          <Link
            style={{ opacity: appTheme.mediumEmphasizedTextOpacity }}
            href="/champions"
          >
            champions
          </Link>
          <Link
            style={{ opacity: appTheme.mediumEmphasizedTextOpacity }}
            href="/tierList"
          >
            tier list
          </Link>
          <Link
            style={{ opacity: appTheme.mediumEmphasizedTextOpacity }}
            href="/search"
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
