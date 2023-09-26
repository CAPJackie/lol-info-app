import { Button } from "@material-ui/core";
import React, { FunctionComponent } from "react";
import { Bounce, Fade, Slide } from "react-awesome-reveal";

import league from "../../../public/images/league.png";
import { LeagueOfLegendsUrl } from "../../utils/Constants/urls";
import styles from "./Home.module.scss";
import Image from "next/image";
import { description } from "@/utils/Constants/game";

const Home: FunctionComponent = () => {
  return (
    <article className={styles.container}>
      <Fade>
        <Bounce>
          <Image alt="League of Legends" src={league} width={50} height={50} />
        </Bounce>
      </Fade>

      <Slide direction="left">
        <p>{description}</p>
      </Slide>

      <Button variant="contained" color="secondary" href={LeagueOfLegendsUrl}>
        More
      </Button>
    </article>
  );
};

export default Home;
