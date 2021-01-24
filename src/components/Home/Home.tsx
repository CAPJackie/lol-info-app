import { Button } from "@material-ui/core";
import { RouteComponentProps } from "@reach/router";
import React, { FunctionComponent } from "react";
import { Bounce, Fade, Slide } from "react-awesome-reveal";

import league from "../../../public/images/league.png";
import { description } from "../../utils/Constants/game";
import { LeagueOfLegendsUrl } from "../../utils/Constants/urls";
import "./Home.css";

const Home: FunctionComponent<RouteComponentProps> = () => {
  return (
    <article className="home-container">
      <Fade>
        <Bounce>
          <img alt="League of Legends" src={league} />
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
