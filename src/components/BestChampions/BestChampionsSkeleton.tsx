import clsx from "clsx";
import { FunctionComponent } from "react";
import styles from "./BestChampions.module.scss";


const BestChampionsSkeleton: FunctionComponent = async () => {
  return (
    <>
      <div className={clsx(styles.card, styles.marginRight, styles.skeleton)} />
      <div className={clsx(styles.card, styles.marginRight, styles.skeleton)} />
      <div className={clsx(styles.card, styles.marginRight, styles.skeleton)} />
    </>
  );
};

export default BestChampionsSkeleton;
