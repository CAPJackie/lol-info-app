import { SummonerInfo } from "@/types/summonerInfo";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";
import Games from "../Games/Games";
import RankingIcon from "../RankingIcon/RankingIcon";
import styles from "./SummonerCard.module.scss";
import Kda from "../Kda/Kda";
import Performance from "../Performance/Performance";
import SkillScore from "../SkillScore/SkillScore";
import { convertToLolSkillChampionNameConvention } from "@/utils/convertToLolSkillChampionNameConvention";

const SummonerCard: FunctionComponent<SummonerInfo> = ({
  championPerformance,
  currentLeague,
  kda,
  lssScore,
  mainMastery,
  region,
  summonerName,
  games,
  ranking,
}) => {
  return (
    <Link
      href={`/summoner/${region}/${summonerName}`}
      className={styles.container}
      style={{
        backgroundImage: `url(https://cdn.lolskill.net/img/skins/tablerow/${mainMastery.champion}_0.jpg)`,
      }}
    >
      <div className={styles.ranking}>{ranking}</div>
      <div className={styles.icon}>
        <Image
          src={`https://cdn.lolskill.net/img/champions/64/${convertToLolSkillChampionNameConvention(
            mainMastery.champion,
          )}.png`}
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
      <div className={clsx(styles.statsContainer, styles.regionContainer)}>
        {region}
      </div>
      <div className={styles.summonerName}>{summonerName}</div>
      <div className={styles.rankingIcon}>
        <RankingIcon {...currentLeague} />
      </div>
      <div className={styles.statsContainer}>
        <Games {...games} />
      </div>
      <div className={styles.statsContainer}>
        <Kda {...kda} />
      </div>
      <div className={styles.statsContainer}>
        <Performance {...{ championPerformance }} />
      </div>
      <div className={styles.statsContainer}>
        <SkillScore {...{ lssScore }} />
      </div>
    </Link>
  );
};
export default SummonerCard;
