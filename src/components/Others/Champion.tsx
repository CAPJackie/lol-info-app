import { Link } from "@reach/router";
import React, { memo } from "react";

type ChampionProps = {
  name: string;
  image: string;
  nameKey: string;
};

const Champion = ({ name, image, nameKey }: ChampionProps) => {
  //Only log this if necessary, it can low the performance
  // useRenderCount([name, image, nameKey]);
  return (
    <>
      <Link to={`/champion/${nameKey}`}>
        <img
          alt={name}
          src={image}
          aria-labelledby={`champion-name-${nameKey}`}
        />
      </Link>

      <h3 id={`champion-name-${nameKey}`}>{name}</h3>
    </>
  );
};

export default memo(Champion);