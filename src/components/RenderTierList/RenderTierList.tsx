import { TablePagination } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import Image from "next/image";
import React, { FunctionComponent, useState } from "react";
import { Slide } from "react-awesome-reveal";
import challenger from "../../../public/images/challenger.png";
import { IRankNumber, LeagueItemDTO } from "../../types/commonTypes";
import EnhancedTableHead from "../Others/EnhancedTableHead";
import SummonerRow from "../Others/SummonerRow";
import styles from "./RenderTierList.module.css";

interface IProps {
  summoners: (LeagueItemDTO & IRankNumber)[];
}

const RenderTierList: FunctionComponent<IProps> = ({ summoners }) => {
  const [order, setOrder] = useState<"asc" | "desc" | undefined>("asc");
  const [orderBy, setOrderBy] = useState<string>("summoner");
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);
  const [page, setPage] = useState<number>(0);

  const handleRequestSort: (property: string) => void = (property) => {
    let selectedOrder: "asc" | "desc" = "desc";

    if (orderBy === property && selectedOrder === "desc") {
      selectedOrder = "asc";
    }

    setOrder(selectedOrder);
    setOrderBy(property);
  };

  const handleChangePage: (pageNumber: number) => void = (pageNumber) => {
    setPage(pageNumber);
  };

  const handleChangeRowsPerPage: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void = (event) => {
    setRowsPerPage(+event.target.value);
  };

  const getSummonerRows: () => JSX.Element[] = () => {
    return stableSort(summoners, getSorting(order, orderBy))
      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      .map((value: LeagueItemDTO & IRankNumber, index: number) => {
        return (
          <SummonerRow
            key={index}
            rankNumber={value.rankNumber}
            name={value.summonerName}
            leaguePoints={value.leaguePoints}
            wins={value.wins}
            losses={value.losses}
            hotStreak={value.hotStreak}
            veteran={value.veteran}
            freshBlood={value.freshBlood}
          />
        );
      });
  };

  return (
    <section className={styles.wrapper}>
      <Slide direction="up" triggerOnce={true}>
        <h2 className={styles.title}>challenger elo</h2>
      </Slide>

      <Slide direction="right" triggerOnce={true}>
        <Image src={challenger} alt="Challenger icon" />
      </Slide>

      <Paper className={styles.tableContainer}>
        <Slide direction="down" triggerOnce={true}>
          <div className={styles.tableWrapper}>
            <Table
              aria-labelledby="Challenger summoners"
            >
              <colgroup>
                <col width="10%" />
                <col width="30%" />
                <col width="25%" />
                <col width="7%" />
                <col width="7%" />
                <col width="7%" />
                <col width="14%" />
              </colgroup>
              <EnhancedTableHead
                order={order}
                orderBy={orderBy}
                onRequestSort={handleRequestSort}
              />

              <TableBody>{getSummonerRows()}</TableBody>
            </Table>
          </div>
        </Slide>

        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={summoners.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            "aria-label": "Previous Page",
          }}
          nextIconButtonProps={{
            "aria-label": "Next Page",
          }}
          onPageChange={(_e, p) => {
            handleChangePage(p);
          }}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </section>
  );
};

const desc = (a: any, b: any, orderBy: string) => {
  let first;
  let second;
  if (orderBy === "winPercentage") {
    first = a.wins / a.losses;
    second = b.wins / b.losses;
  } else {
    first = a[orderBy];
    second = b[orderBy];
  }
  if (second < first) {
    return -1;
  }
  if (second > first) {
    return 1;
  }
  return 0;
};

const stableSort = (array: any[], comparator: (a: any, b: any) => number) => {
  const sortedArray = array.map((value, index) => [value, index]);
  sortedArray.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return sortedArray.map((el) => el[0]);
};

const getSorting = (order: "asc" | "desc" | undefined, orderBy: string) => {
  return order === "desc"
    ? (a: any, b: any) => desc(a, b, orderBy)
    : (a: any, b: any) => -desc(a, b, orderBy);
};

export default RenderTierList;
