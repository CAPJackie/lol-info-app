import React, { useEffect, useState } from "react";

import RenderTierList from "../RenderTierList/RenderTierList";
import Loading from "../Loading/Loading";
import { getChallengerLeagueByQueue } from "../../utils/api";
import ErrorPanel from "../ErrorPanel/ErrorPanel";

const TopTierList = () => {
  const [summoners, setSummoners] = useState([]),
    [loading, setLoading] = useState(true),
    [error, setError] = useState(null);

  useEffect(() => {
    var callback = {
      onSuccess: response => {
        orderByLeaguePoints(response.data.entries);
      },
      onFailed: error => {
        setError(error.response);
      }
    };

    getChallengerLeagueByQueue("RANKED_SOLO_5x5", callback);
  }, []);

  const orderByLeaguePoints = summoners => {
    var summonersSortedList = [...summoners];

    summonersSortedList.sort((a, b) => {
      return b.leaguePoints - a.leaguePoints;
    });

    summonersSortedList = summonersSortedList.map((summoner, index) => ({
      ...summoner,
      rankNumber: index + 1
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
