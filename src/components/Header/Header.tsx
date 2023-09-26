import Link from "next/link";
import React, { FunctionComponent, useContext } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { AppThemeContext, themes } from "../../context/AppThemeContext";
import styles from "./Header.module.scss";
import Image from "next/image";
import SummonerSearchBar from "../SummonerSearchBar/SummonerSearchBar";

const Header: FunctionComponent = () => {
  const [appTheme, setAppTheme] = useContext(AppThemeContext);

  const isDarkMode = appTheme == themes.dark;
  return (
    <nav className={styles.nav}>
      <Link
        href="/"
        aria-label="Home page"
        title="Home"
        className={styles.toggleHome}
      >
        <Image
          src="https://cdn.lolskill.net/img/logo.png"
          alt="lol skill logo"
          className={styles.img}
          height={30}
          width={160}
        />
      </Link>
      <SummonerSearchBar />

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
  );
};

export default Header;
