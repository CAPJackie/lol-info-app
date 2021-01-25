import { RouteComponentProps } from "@reach/router";
import { AxiosError, AxiosResponse } from "axios";
import React, { FunctionComponent, useEffect, useState } from "react";
import {
  IRankNumber,
  LeagueItemDTO,
  LeagueListDTO,
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
  const [error, setError] = useState({});

  useEffect(() => {
    const callback = {
      onSuccess: (response: AxiosResponse<LeagueListDTO>) => {
        orderByLeaguePoints(response.data.entries);
      },
      onFailed: (errorMsg: AxiosError<Error>) => {
        setError(errorMsg);
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
