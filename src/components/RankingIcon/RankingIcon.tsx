import { League } from "@/types/league";
import { FunctionComponent } from "react";
import styles from "./RankingIcon.module.scss";
import Image from "next/image";

const RankingIcon: FunctionComponent<League> = ({ league, division, lp }) => {
  return (
    <div className={styles.container}>
      <Image
        src={`https://cdn.lolskill.net/img/tiers/64/${league.toLowerCase()}.png`}
        alt="league icon"
        width={50}
        height={50}
      />
      <div className={styles.division}>{division}</div>
    </div>
  );
};

export default RankingIcon;
