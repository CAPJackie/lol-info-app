import { useRouter } from "next/router";
import { FunctionComponent } from "react";
import styles from "./TopSummonerList.module.scss";
import clsx from "clsx";
import { buildPagination } from "@/utils/buildPagination";
import SummonerCard from "../SummonerCard/SummonerCard";
import ListWithPagination from "../ListWithPagination/ListWithPagination";
import { fetchSummonersTopList } from "@/utils/fetchSummonersTopList";
import { SummonerInfo } from "@/types/summonerInfo";

const TopSummonerList: FunctionComponent = () => {
  const router = useRouter();
  const page = Number(router.query.page) || 1;
  // const onChangePage = () => {
  //   router.push({
  //     pathname: router.pathname,
  //     query: { ...router.query, page: String(page + 1) },
  //   });
  // };

  const summonersList: SummonerInfo[] = fetchSummonersTopList();

  const itemsPerPage = 30;

  const numberOfPages = Math.ceil(summonersList.length / itemsPerPage);

  const sortedEntireList = summonersList.sort(
    (a, b) => b.lssScore - a.lssScore,
  );

  const items = buildPagination<SummonerInfo>(
    sortedEntireList,
    page,
    itemsPerPage,
  );

  const sortedItems = items.sort((a, b) => b.lssScore - a.lssScore);


  return (
    <div className={clsx("row", styles.container)}>
      <ListWithPagination {...{ numberOfPages }}>
        <ol className={styles.summonersList}>
          {sortedItems.map((summonerInfo, index) => (
            <li key={summonerInfo.summonerName} className={styles.item}>
              <SummonerCard
                ranking={
                  sortedEntireList.findIndex(
                    ({ summonerName }) =>
                      summonerName === summonerInfo.summonerName,
                  ) + 1
                }
                {...summonerInfo}
              />
            </li>
          ))}
        </ol>
      </ListWithPagination>
    </div>
  );
};

export default TopSummonerList;
