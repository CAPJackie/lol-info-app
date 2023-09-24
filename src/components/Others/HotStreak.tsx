import React, { FunctionComponent } from "react";

import hotStreak from "../../../public/images/hotStreak.svg";
import Image from "next/image";

const HotStreak: FunctionComponent = () => {
  return (
    // TODO Pass to constants
    <Image src={hotStreak} alt="the player has won at least 3 games in a row" />
  );
};

export default HotStreak;
