import { TableCell, TableRow } from "@mui/material";
import { useRouter } from "next/navigation";
import { FunctionComponent } from "react";
import ProgressBar from "../ProgressBar/ProgressBar";
import FreshBlood from "./FreshBlood";
import HotStreak from "./HotStreak";
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
