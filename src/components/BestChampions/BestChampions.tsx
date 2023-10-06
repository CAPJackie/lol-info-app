import clsx from "clsx";
import { FunctionComponent } from "react";
import styles from "./BestChampions.module.scss";
import Link from "next/link";

type BestStat = {
  champion: string;
  rate: number;
};

type BestChampions = {
  mostPopular: BestStat;
  highestWinRate: BestStat;
  mostBanned: BestStat;
};

const bestChampionsMock: BestChampions = {
  highestWinRate: { champion: "Lee Sin", rate: 32.9 },
  mostBanned: { champion: "Ivern", rate: 55 },
  mostPopular: { champion: "Xayah", rate: 52.5 },
};

const convertToLowercaseWithoutSpaces: (value: string) => string = (value) => {
  return value.toLowerCase().replaceAll(" ", "");
};

const BestChampions: FunctionComponent = () => {
  const { mostPopular, highestWinRate, mostBanned } = bestChampionsMock;
  return (
    <>
      <Link
        href={`/champion/${convertToLowercaseWithoutSpaces(
          mostPopular.champion,
        )}`}
        className={clsx(styles.card, styles.marginRight)}
        style={{
          backgroundImage: `url(https://cdn.lolskill.net/img/skins/splash/${mostPopular.champion.replaceAll(
            " ",
            "",
          )}_0.jpg)`,
        }}
      >
        <div className={styles.opaque}>
          <p className={styles.name}>{mostPopular.champion}</p>
          <p className={styles.label}>Most Popular</p>
          <p className={styles.rate}>{mostPopular.rate}% Pick Rate</p>
        </div>
      </Link>
      <Link
        href={`/champion/${convertToLowercaseWithoutSpaces(
          highestWinRate.champion,
        )}`}
        className={clsx(styles.card, styles.marginLeft, styles.marginRight)}
        style={{
          backgroundImage: `url(https://cdn.lolskill.net/img/skins/splash/${highestWinRate.champion.replaceAll(
            " ",
            "",
          )}_0.jpg)`,
        }}
      >
        <div className={styles.opaque}>
          <p className={styles.name}>{highestWinRate.champion}</p>
          <p className={styles.label}>Highest Win Rate</p>
          <p className={styles.rate}>{highestWinRate.rate}% Win Rate</p>
        </div>
      </Link>
      <Link
        href={`/champion/${convertToLowercaseWithoutSpaces(
          mostBanned.champion,
        )}`}
        className={clsx(styles.card, styles.marginLeft)}
        style={{
          backgroundImage: `url(https://cdn.lolskill.net/img/skins/splash/${mostBanned.champion.replaceAll(
            " ",
            "",
          )}_0.jpg)`,
        }}
      >
        <div className={styles.opaque}>
          <p className={styles.name}>{mostBanned.champion}</p>
          <p className={styles.label}>Most Banned</p>
          <p className={styles.rate}>{mostBanned.rate}% Ban Rate</p>
        </div>
      </Link>
    </>
  );
};

export default BestChampions;
