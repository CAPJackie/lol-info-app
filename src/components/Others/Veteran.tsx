import React, { FunctionComponent } from "react";
import veteran from "../../../public/images/veteran.svg";
import Image from "next/image";

const Veteran: FunctionComponent = () => {
  return (
    <Image
      src={veteran}
      // TODO Pass to constants
      alt="the player has played more than 100 games on this league"
    />
  );
};

export default Veteran;
