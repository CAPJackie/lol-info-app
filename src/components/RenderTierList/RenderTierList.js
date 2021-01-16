import { TablePagination } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import React, { useState } from "react";
import { Slide } from "react-awesome-reveal";
import challenger from "../../../public/images/challenger.png";
import EnhancedTableHead from "../Others/EnhancedTableHead";
import SummonerRow from "../Others/SummonerRow";
import "./RenderTierList.css";

const RenderTierList = ({ summoners }) => {
  const [order, setOrder] = useState("asc"),
    [orderBy, setOrderBy] = useState("summoner"),
    [rowsPerPage, setRowsPerPage] = useState(7),
    [page, setPage] = useState(0);

  const handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = "desc";

    if (orderBy === property && order === "desc") {
      order = "asc";
    }

    setOrder(order);
    setOrderBy(orderBy);
  };

  const handleChangePage = (event, page) => {
    setPage(page);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
  };

  const getSummonerRows = () => {
    return stableSort(summoners, getSorting(order, orderBy))
      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      .map((value, index) => {
        return (
          <SummonerRow
            summonerId={value.summonerId}
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
    <section className="page-wrapper">
      <Slide direction="top" triggerOnce>
        <h2 className="challenger-section-title">challenger elo</h2>
      </Slide>

      <Slide direction="right" triggerOnce>
        <img src={challenger} alt="Challenger icon" />
      </Slide>

      <Paper className="table-container">
        <Slide direction="down" triggerOnce>
          <div className="table-wrapper">
            <Table
              className="summoners-table"
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
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </section>
  );
};

const desc = (a, b, orderBy) => {
  var first;
  var second;
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

const stableSort = (array, comparator) => {
  const sortedArray = array.map((value, index) => [value, index]);
  sortedArray.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return sortedArray.map((el) => el[0]);
};

const getSorting = (order, orderBy) => {
  return order === "desc"
    ? (a, b) => desc(a, b, orderBy)
    : (a, b) => -desc(a, b, orderBy);
};

export default RenderTierList;
