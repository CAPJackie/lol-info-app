/* eslint-disable react/no-find-dom-node */
import React, { FunctionComponent } from "react";
import { Slide } from "react-awesome-reveal";
import ProgressBar from "../ProgressBar/ProgressBar";

const InfoCategory: FunctionComponent<{ label: string; value: number }> = ({
  label,
  value,
}) => {
  return (
    <div id={`category-description-${label}`} aria-label={`${label}, ${value}`}>
      <p aria-labelledby={`category-description-${label}`}>{label}</p>
      <div aria-labelledby={`category-description-${label}`}>
        <Slide direction="left" triggerOnce={true}>
          <ProgressBar value={value} total={10} type="value" />
        </Slide>
      </div>
    </div>
  );
};

export default InfoCategory;
