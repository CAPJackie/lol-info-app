import React from "react";
import { Icon } from "antd";
import { Slide } from "react-awesome-reveal";
import riotGames from "../../../public/images/riotGames.png";
import styles from "./Footer.module.scss";
import {
  githubBranchRepository,
  riotGamesDevelopers,
} from "../../utils/Constants/urls";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <Slide direction="up" triggerOnce>
      <footer className={styles.container}>
        <nav>
          <h3 aria-label="League of legends master">lol master</h3>
          <ul>
            <li>
              <Link
                aria-label="Github repository link"
                href={githubBranchRepository}
              >
                <Icon type="github" theme="outlined" />
              </Link>
            </li>
            <li>
              <Link href={riotGamesDevelopers}>
                <Image
                  alt="Riot games developers portal"
                  src={riotGames}
                  width={50}
                  height={50}
                />
              </Link>
            </li>
          </ul>
        </nav>
      </footer>
    </Slide>
  );
};

export default Footer;
