import { FunctionComponent } from "react";
import ChampionCard from "../ChampionCard/ChampionCard";
import styles from "./ChampionsListDetail.module.scss";

type ChampionsListDetailProps = {
  champions: string[];
};

const ChampionsListDetail: FunctionComponent<ChampionsListDetailProps> = ({
  champions,
}) => {
  return (
    <ul className={styles.list}>
      {champions.map((championName) => (
        <li key={championName} className={styles.item}>
          <ChampionCard {...{ championName }} />
        </li>
      ))}
    </ul>
  );
};

export default ChampionsListDetail;
