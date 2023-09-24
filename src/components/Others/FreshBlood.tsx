import React, { FunctionComponent } from "react";

import newPlayer from "../../../public/images/new-player.svg";
import Image from "next/image";

const FreshBlood: FunctionComponent = () => {
  return (
    <Image
      src={newPlayer}
      alt="the player has played no more than 100 games on this league"
    />
  );
};

export default FreshBlood;
