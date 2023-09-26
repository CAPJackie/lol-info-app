import Link from "next/link";
import React, { FunctionComponent, useContext } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { AppThemeContext, themes } from "../../context/AppThemeContext";
import styles from "./Header.module.scss";
import Image from "next/image";
import SummonerSearchBar from "../SummonerSearchBar/SummonerSearchBar";
import HeaderLinks from "../HeaderLinks/HeaderLinks";

const Header: FunctionComponent = () => {
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
      <HeaderLinks />
    </nav>
  );
};

export default Header;
