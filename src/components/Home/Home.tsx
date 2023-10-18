import { FunctionComponent } from "react";

import Blog from "../Blog/Blog";
import FreeChampionsWeek from "../FreeChampionsWeek/FreeChampionsWeek";
import LandingHero from "../LandingHero/LandingHero";
import styles from "./Home.module.scss";

const Home: FunctionComponent = () => {
  return (
    <article className={styles.container}>
      <section className={styles.landing}>
        <LandingHero />
      </section>
      <section className={styles.blog}>
        <Blog />
      </section>
      <section className={styles.freeChampionsWeek}>
        <FreeChampionsWeek />
      </section>

    </article>
  );
};

export default Home;
