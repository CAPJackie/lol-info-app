import React, { FunctionComponent } from "react";

import veteran from "../../../public/images/veteran.svg";

const Veteran: FunctionComponent = () => {
  return (
    <img
      src={veteran}
      // TODO Pass to constants
      alt="the player has played more than 100 games on this league"
    />
  );
};

export default Veteran;
