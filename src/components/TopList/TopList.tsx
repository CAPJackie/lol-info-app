import { Champions } from "@/types/champions";
import { FunctionComponent } from "react";
import Filters from "../Filters/Filters";
import TopSummonerList from "../TopSummonerList/TopSummonerList";

interface TopListProps {
  champions: Champions;
}

const TopList: FunctionComponent<TopListProps> = ({ champions }) => {
  return (
    <>
      <Filters {...{ champions }} />
      <TopSummonerList />
    </>
  );
};
export default TopList;
