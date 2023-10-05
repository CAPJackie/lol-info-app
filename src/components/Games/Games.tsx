import { FunctionComponent } from "react";
import styles from "./Games.module.scss";
import { Games } from "@/types/games";

const Games: FunctionComponent<Games> = ({ wins, defeats }) => {
  const rate = ((wins / (wins + defeats)) * 100).toFixed(1);
  return (
    <div className={styles.container}>
      <p className={styles.rate}>{rate}%</p>
      <p className={styles.winAndDefeat}>
        <span className={styles.wins}>{wins}</span> -{" "}
        <span className={styles.defeats}>{defeats}</span>
      </p>
    </div>
  );
};

export default Games;
