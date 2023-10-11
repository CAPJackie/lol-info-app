import { FunctionComponent } from "react";
import SummonerSearchBar from "../SummonerSearchBar/SummonerSearchBar";
import styles from "./LandingHero.module.scss";

const LandingHero: FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.h2}>League of Legends</h2>
      <h1 className={styles.h1}>Game & Summoner Analysis</h1>
      <SummonerSearchBar />
    </div>
  );
};

export default LandingHero;
