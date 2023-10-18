import { ChampionRotation } from "@/types/championRotation";
import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";
import styles from "./ChampionLink.module.scss";

const ChampionLink: FunctionComponent<ChampionRotation> = ({
  imageUrl,
  link,
}) => {
  return (
    <Link href={`champion/${link}`} className={styles.link}>
      <Image
        alt="champion image"
        src={`https://cdn.lolskill.net/img/skins/loading/${imageUrl}_0.jpg`}
        width={71}
        height={359}
        className={styles.image}
      />
    </Link>
  );
};

export default ChampionLink;
