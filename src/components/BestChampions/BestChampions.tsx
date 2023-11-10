import clsx from "clsx";
import { FunctionComponent } from "react";
import styles from "./BestChampions.module.scss";
import Link from "next/link";
import { convertToLolSkillChampionNameConvention } from "@/utils/convertToLolSkillChampionNameConvention";

type BestStat = {
  champion: string;
  rate: number;
};

type BestChampions = {
  mostPopular: BestStat;
  highestWinRate: BestStat;
  mostBanned: BestStat;
};


async function getBestChampions() {
  const req = await fetch(`${process.env.BASE_URL}/api/champions/best-champions`);
  const data = await req.json();
  console.log({ req }, data)

  return data;
}

const BestChampions: FunctionComponent = async () => {
  const bestChampions = await getBestChampions();
  const { mostPopular, highestWinRate, mostBanned } = bestChampions;
  return (
    <>
      <Link
        href={`/champion/${convertToLolSkillChampionNameConvention(
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
        href={`/champion/${convertToLolSkillChampionNameConvention(
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
        href={`/champion/${convertToLolSkillChampionNameConvention(
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
