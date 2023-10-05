import { clsx } from "clsx";
import Image from "next/image";
import Link from "next/link";

import CircularIconButtonWithLogo from "../CircularIconButtonWithLogo/CircularIconButtonWithLogo";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <Image
        width={236}
        height={45}
        src={"https://cdn.lolskill.net/img/logo.png"}
        alt="logo"
        className={styles.lolSkillIcon}
      />
      <section className={styles.footerTop}>
        <div className={styles.iconsContainer}>
          <CircularIconButtonWithLogo
            name="facebook"
            href="https://www.facebook.com/LoLSkill.net"
          />
          <CircularIconButtonWithLogo
            name="twitter"
            href="https://twitter.com/LoLSkillDotNet"
          />
        </div>
      </section>
      <section className={styles.footerBottom}>
        <div className={styles.bottomContainer}>
          <div className="row">
            <div className={clsx("col-8", styles.firstContainer)}>
              <Link href={"about"}>About</Link>
              <Link href={"contact"}>Contact Us</Link>
              <Link href={"faq"}>FAQ</Link>
              <Link href={"policy"}>Privacy Policy</Link>
            </div>
            <div className={clsx("col-4", styles.secondContainer)}>
              <p>© 2023 LoLSkill.net</p>
            </div>
          </div>
        </div>
      </section>

      {/* <nav>
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
      </nav> */}
    </footer>
  );
};

export default Footer;
