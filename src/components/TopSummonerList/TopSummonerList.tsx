import { SummonerInfo } from "@/types/summonerInfo";
import { buildPagination } from "@/utils/buildPagination";
import clsx from "clsx";
import { FunctionComponent } from "react";
import ListWithPagination from "../ListWithPagination/ListWithPagination";
import SummonerCard from "../SummonerCard/SummonerCard";
import styles from "./TopSummonerList.module.scss";
import { useSearchParams } from "next/navigation";

type Props = {
  summonersList: SummonerInfo[];
};

const TopSummonerList: FunctionComponent<Props> = ({ summonersList }) => {
  const page = Number(useSearchParams().get("page")) || 1;

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
