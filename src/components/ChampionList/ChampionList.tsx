import clsx from "clsx";
import { FunctionComponent } from "react";
import BestChampions from "../BestChampions/BestChampions";
import ChampionsListDetail from "../ChampionsListDetail/ChampionsListDetail";
import styles from "./ChampionsList.module.scss";

type ChampionListProps = {
  champions: string[];
};

const ChampionList: FunctionComponent<ChampionListProps> = ({ champions }) => {
  return (
    <>
      <h2 className={clsx("row", styles.title)}>Champions</h2>
      <div className={clsx("row", styles.stats)}>
        <BestChampions />
      </div>
      <div className={clsx("row", styles.champions)}>
        <ChampionsListDetail {...{ champions }} />
      </div>
    </>
  );
};
export default ChampionList;
