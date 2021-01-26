import { RouteComponentProps } from "@reach/router";
import React, { FunctionComponent, useEffect, useState } from "react";
import {
  Error,
  IleagueListCallback,
  IRankNumber,
  LeagueItemDTO,
} from "../../types/commonTypes";
import { getChallengerLeagueByQueue } from "../../utils/api";
import ErrorPanel from "../ErrorPanel/ErrorPanel";
import Loading from "../Loading/Loading";
import RenderTierList from "../RenderTierList/RenderTierList";

const TopTierList: FunctionComponent<RouteComponentProps> = () => {
  const [summoners, setSummoners] = useState<(LeagueItemDTO & IRankNumber)[]>(
    []
  );
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    const callback: IleagueListCallback = {
      onSuccess: (response) => {
        orderByLeaguePoints(response.data.entries);
      },
      onFailed: (errorMsg) => {
        setError(errorMsg.response);
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
