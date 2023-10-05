import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";
import HeaderLinks from "../HeaderLinks/HeaderLinks";
import SummonerSearchBar from "../SummonerSearchBar/SummonerSearchBar";
import styles from "./Header.module.scss";

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
