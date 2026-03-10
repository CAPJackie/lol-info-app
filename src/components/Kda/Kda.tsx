import type { Kda as KdaType } from "@/types/kda";
import { FunctionComponent } from "react";

import styles from "./Kda.module.scss";

const Kda: FunctionComponent<KdaType> = ({ assistances, deaths, kills }) => {
  return (
    <div className={styles.container}>
      <p className={styles.upperText}>
        <span className={styles.statGreen}>{kills}</span> /{" "}
        <span className={styles.statRed}>{deaths}</span> /{" "}
        <span className={styles.statGreen}>{assistances}</span>
      </p>
      <p className={styles.kda}>KDA</p>
    </div>
  );
};

export default Kda;
