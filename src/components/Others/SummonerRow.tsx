import React, { FunctionComponent } from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { navigate } from "@reach/router";

import ProgressBar from "../ProgressBar/ProgressBar";
import Veteran from "./Veteran";
import HotStreak from "./HotStreak";
import FreshBlood from "./FreshBlood";

interface IProps {
  rankNumber;
  name;
  wins;
  losses;
  hotStreak;
  veteran;
  freshBlood;
  leaguePoints;
}

const SummonerRow: FunctionComponent<IProps> = ({
  rankNumber,
  name,
  wins,
  losses,
  hotStreak,
  veteran,
  freshBlood,
  leaguePoints,
}) => {
  const handleClick = (event, name) => {
    navigate("/summoners/" + name);
  };

  return (
    <TableRow hover onClick={(event) => handleClick(event, name)}>
      <TableCell component="th" scope="row">
        {rankNumber}
      </TableCell>
      <TableCell align="center">{name}</TableCell>
      <TableCell align="center">
        <ProgressBar value={wins} total={wins + losses} type="percentage" />
      </TableCell>
      <TableCell align="center">{hotStreak && <HotStreak />}</TableCell>
      <TableCell align="center">{veteran && <Veteran />}</TableCell>
      <TableCell align="center">{freshBlood && <FreshBlood />}</TableCell>
      <TableCell align="right">{leaguePoints}</TableCell>
    </TableRow>
  );
};

export default SummonerRow;
