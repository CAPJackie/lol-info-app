import React, { useEffect, useState } from "react";
import { getChampions } from "../../utils/api.js";
import ErrorPanel from "../ErrorPanel/ErrorPanel";
import Loading from "../Loading/Loading";
import RenderChampionList from "../RenderChampionList/RenderChampionList";

const ChampionList = () => {
  const [champions, setChampions] = useState([]),
    [loading, setLoading] = useState(true),
    [error, setError] = useState(null);

  useEffect(() => {
    var callback = {
      onSuccess: (response) => {
        setChampions(response.data.data);
        setLoading(false);
      },
      onFailed: (error) => {
        setError(error);
      },
    };

    getChampions(callback);
  }, []);

  return loading ? (
    <Loading name="Champions" />
  ) : error ? (
    <ErrorPanel error={error} />
  ) : (
    <RenderChampionList champions={champions} />
  );
};
export default ChampionList;
