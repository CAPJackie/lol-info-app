import { Tooltip } from "@material-ui/core";
import React from "react";
import "./ProgressBar.css";

const ProgressBar = ({ value, total, type }) => {
  const calculatePercentage = (value, total) => {
    return Math.round((value / total) * 100);
  };

  const percentage = calculatePercentage(value, total);

  const label =
    type === "percentage"
      ? value + "/" + (total - value) + " " + percentage + "%"
      : value;

  return (
    <Tooltip title={label} placement={"bottom-start"} enterDelay={300}>
      <div
        role="progressbar"
        aria-valuenow={percentage}
        className="linear-progress-bar"
        variant="determinate"
        value={percentage}
      >
        <div
          className="progress-bar-child"
          style={{ transform: `scaleX(${percentage / 100})` }}
        />
      </div>
    </Tooltip>
  );
};

export default ProgressBar;
