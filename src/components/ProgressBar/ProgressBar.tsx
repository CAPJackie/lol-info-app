import { Tooltip } from "@material-ui/core";
import React, { FunctionComponent } from "react";
import styles from "./ProgressBar.module.scss";

interface IProps {
  value: number;
  total: number;
  type: string;
}

const ProgressBar: FunctionComponent<IProps> = ({ value, total, type }) => {
  const calculatePercentage = () => {
    return Math.round((value / total) * 100);
  };

  const percentage = calculatePercentage();

  const label =
    type === "percentage" ? `${value}/${total - value} ${percentage}%` : value;

  return (
    <Tooltip title={label} placement={"bottom-start"} enterDelay={300}>
      <div
        role="progressbar"
        aria-valuenow={percentage}
        className={styles.progressBar}
        // TODO Check if these 2 props were affecting somehow this component behaviour
        // variant="determinate"
        // value={percentage}
      >
        <div style={{ transform: `scaleX(${percentage / 100})` }} />
      </div>
    </Tooltip>
  );
};

export default ProgressBar;
