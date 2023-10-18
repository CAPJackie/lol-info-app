import { Champions } from "@/types/champions";
import { SummonerInfo } from "@/types/summonerInfo";
import { FunctionComponent } from "react";
import Filters from "../Filters/Filters";
import TopSummonerList from "../TopSummonerList/TopSummonerList";

interface TopListProps {
  champions: Champions;
  summonersList: SummonerInfo[]
}

const TopList: FunctionComponent<TopListProps> = ({ champions, summonersList }) => {
  return (
    <>
      <Filters {...{ champions }} />
      <TopSummonerList {...{ summonersList }} />
    </>
  );
};
export default TopList;
