import { FunctionComponent } from "react";
import styles from "./SummonerCard.module.scss";
import { League } from "@/types/league";
import { Kda } from "@/types/kda";
import { Mastery } from "@/types/mastery";
import Link from "next/link";
import Image from "next/image";
import { SummonerInfo } from "@/types/summonerInfo";

const SummonerCard: FunctionComponent<SummonerInfo> = ({
  championPerformance,
  currentLeague,
  kda,
  lssScore,
  mainMastery,
  region,
  summonerName,
  winningRate,
  ranking,
}) => {
  return (
    <Link
      href={`/summoner/${region}/${summonerName}`}
      className={styles.container}
    >
      <div className={styles.ranking}>{ranking}</div>
      <div className={styles.icon}>
        <Image
          src={`https://cdn.lolskill.net/img/champions/64/${mainMastery.champion
            .toLowerCase()
            .replaceAll(" ", "")}.png`}
          className={styles.championIcon}
          width={64}
          height={64}
          alt="image"
        />
        <Image
          src={`https://cdn.lolskill.net/img/championmastery/32/${mainMastery.level}.png`}
          className={styles.championMastery}
          width={32}
          height={32}
          alt="mastery icon"
        />
      </div>
    </Link>
  );
};
export default SummonerCard;
