import React, { FunctionComponent } from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { useRouter } from 'next/navigation';
import ProgressBar from "../ProgressBar/ProgressBar";
import HotStreak from "./HotStreak";
import FreshBlood from "./FreshBlood";
import Veteran from "./Veteran";

interface IProps {
  rankNumber?: number;
  name: string;
  wins: number;
  losses: number;
  hotStreak: boolean;
  veteran: boolean;
  freshBlood: boolean;
  leaguePoints: number;
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
  const { push } = useRouter();
  const handleClick: () => void = () => {
    push("/summoners/" + name);
  };

  return (
    <TableRow hover={true} onClick={(_event) => handleClick()}>
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
