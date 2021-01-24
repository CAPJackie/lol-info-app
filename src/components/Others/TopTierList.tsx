import React, { useEffect, useState } from "react";
import { LeagueItemDTO } from "../../types/commonTypes";
import { getChallengerLeagueByQueue } from "../../utils/api";
import ErrorPanel from "../ErrorPanel/ErrorPanel";
import Loading from "../Loading/Loading";
import RenderTierList from "../RenderTierList/RenderTierList";

interface IProps {
  rankNumber?: number;
}
const TopTierList = () => {
  const [summoners, setSummoners] = useState<LeagueItemDTO[] & IProps>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const callback = {
      onSuccess: (response) => {
        orderByLeaguePoints(response.data.entries);
      },
      onFailed: (error) => {
        setError(error.response);
      },
    };

    getChallengerLeagueByQueue("RANKED_SOLO_5x5", callback);
  }, []);

  const orderByLeaguePoints: (summonersList: LeagueItemDTO[]) => void = (
    summonersList
  ) => {
    let summonersSortedList = [...summonersList];

    summonersSortedList.sort((a, b) => {
      return b.leaguePoints - a.leaguePoints;
    });

    summonersSortedList = summonersSortedList.map((summoner, index) => ({
      ...summoner,
      rankNumber: index + 1,
    }));

    setSummoners(summonersSortedList);
    setLoading(false);
  };

  return error ? (
    <ErrorPanel error={error} />
  ) : loading ? (
    <Loading name="top tier summoners" />
  ) : (
    <RenderTierList summoners={summoners} />
  );
};

export default TopTierList;
