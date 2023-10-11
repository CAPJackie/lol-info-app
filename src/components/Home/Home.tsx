import { FunctionComponent } from "react";

import Blog from "../Blog/Blog";
import LandingHero from "../LandingHero/LandingHero";
import styles from "./Home.module.scss";
import FreeChampionsWeek from "../FreeChampionsWeek/FreeChampionsWeek";

const Home: FunctionComponent = () => {
  return (
    <article className={styles.container}>
      <LandingHero />
      <Blog />
      <FreeChampionsWeek />
    </article>
  );
};

export default Home;
