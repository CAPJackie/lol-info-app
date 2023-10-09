import { Champion } from "@/types/champions";
import { FunctionComponent } from "react";

import styles from "./ChampionCard.module.scss";
import Link from "next/link";
import { convertToLolSkillChampionNameConvention } from "@/utils/convertToLolSkillChampionNameConvention";
import Image from "next/image";
import clsx from "clsx";

type ChampionCardProps = {
  championName: string;
};

const ChampionCard: FunctionComponent<ChampionCardProps> = ({
  championName,
}) => {
  return (
    <Link
      href={`/champion/${convertToLolSkillChampionNameConvention(
        championName,
      )}`}
      className={styles.container}
      style={{
        backgroundImage: `url(https://cdn.lolskill.net/img/skins/tablerow/${championName.replaceAll(
          " ",
          "",
        )}_0.jpg)`,
      }}
    >
      <Image
        src={`https://cdn.lolskill.net/img/champions/64/${convertToLolSkillChampionNameConvention(
          championName,
        )}.png`}
        alt="champion"
        className={styles.image}
        height={64}
        width={64}
      />
      <div className={styles.name}>{championName}</div>
      <div className={styles.priceRp}>
        <p className={styles.value}>790</p>
        <p className={styles.text}>
          <Image
            alt="rp"
            src={"https://cdn.lolskill.net/img/rp.png"}
            width={16}
            height={16}
            className={styles.imageLp}
          />{" "}
          RP
        </p>
      </div>
      <div className={styles.priceLp}>
        <p className={styles.value}>450</p>
        <p className={styles.text}>
          <Image
            alt="lp"
            src={"https://cdn.lolskill.net/img/ip.png"}
            width={16}
            height={16}
            className={styles.imageLp}
          />{" "}
          LP
        </p>
      </div>
      <div className={clsx(styles.rate)}>Pick Rate</div>
      <div className={clsx(styles.rate)}>Win Rate</div>
      <div className={clsx(styles.rate)}>Ban Rate</div>
      <Image
        alt="more button"
        src={"https://cdn.lolskill.net/img/icon_showmore.png"}
        className={styles.more}
        height={11}
        width={7}
      />
    </Link>
  );
};

export default ChampionCard;
