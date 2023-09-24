import { TableSortLabel, Tooltip } from "@material-ui/core";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import React, { FunctionComponent } from "react";

interface IProps {
  order?: "asc" | "desc";
  orderBy: string;
  onRequestSort: (property: string) => void;
}

const EnhancedTableHead: FunctionComponent<IProps> = ({
  order,
  orderBy,
  onRequestSort,
}) => {
  const createSortHandler: (property: string) => void = (property) => {
    onRequestSort(property);
  };

  return (
    <TableHead>
      <TableRow>
        {rows.map((row) => (
          <TableCell
            id={`${row.id}-cell`}
            key={row.id}
            align={
              row.id === "rankNumber"
                ? "left"
                : row.id === "leaguePoints"
                ? "right"
                : "center"
            }
            padding={row.disablePadding ? "none" : "default"}
            sortDirection={orderBy === row.id ? order : false}
          >
            <Tooltip
              title="Sort"
              placement={row.numeric ? "bottom-end" : "bottom-start"}
              enterDelay={300}
            >
              <TableSortLabel
                active={orderBy === row.id}
                direction={order}
                onClick={() => createSortHandler(row.id)}
              >
                {row.label}
              </TableSortLabel>
            </Tooltip>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

// TODO Move to constants file
const rows = [
  { id: "rankNumber", numeric: true, disablePadding: false, label: "Rank" },
  {
    id: "summonerName",
    numeric: false,
    disablePadding: false,
    label: "Summoner",
  },
  {
    id: "winPercentage",
    numeric: false,
    disablePadding: false,
    label: "Win Percentage",
  },
  {
    id: "hotStreak",
    numeric: false,
    disablePadding: false,
    label: "Hot Streak",
  },
  { id: "veteran", numeric: false, disablePadding: false, label: "Veteran" },
  {
    id: "freshBlood",
    numeric: false,
    disablePadding: false,
    label: "Fresh Blood",
  },
  {
    id: "leaguePoints",
    numeric: true,
    disablePadding: false,
    label: "League Points (LP)",
  },
];

export default EnhancedTableHead;
