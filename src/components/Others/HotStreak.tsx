import React, { FunctionComponent } from "react";

import hotStreak from "../../../public/images/hotStreak.svg";

const HotStreak: FunctionComponent = () => {
  return (
    // TODO Pass to constants
    <img src={hotStreak} alt="the player has won at least 3 games in a row" />
  );
};

export default HotStreak;
