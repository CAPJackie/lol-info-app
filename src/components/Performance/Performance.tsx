import { FunctionComponent } from "react";
import styles from "./Performance.module.scss";
import clsx from "clsx";

type PerformanceProps = {
  championPerformance: number;
};

const Performance: FunctionComponent<PerformanceProps> = ({
  championPerformance,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.donutChartBlock}>
        <div className={styles.donutChart}>
          <div className={clsx(styles.part1, styles.portionBlock)}>
            <div className={styles.circle}></div>
          </div>
          <div className={clsx(styles.part2, styles.portionBlock)}>
            <div className={styles.circle}></div>
          </div>
          <p className={styles.text}>{championPerformance}%</p>
        </div>
      </div>
    </div>
  );
};

export default Performance;
