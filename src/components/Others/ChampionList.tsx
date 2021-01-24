import { RouteComponentProps } from "@reach/router";
import { AxiosError, AxiosResponse } from "axios";
import React, { FunctionComponent, useEffect, useState } from "react";
import { IChampions } from "../../types/commonTypes.js";
import { getChampions } from "../../utils/api.js";
import ErrorPanel from "../ErrorPanel/ErrorPanel";
import Loading from "../Loading/Loading";
import RenderChampionList from "../RenderChampionList/RenderChampionList";

const ChampionList: FunctionComponent<RouteComponentProps> = () => {
  const [champions, setChampions] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({});

  useEffect(() => {
    const callback = {
      onSuccess: (response: AxiosResponse<IChampions>) => {
        setChampions(response.data.data);
        setLoading(false);
      },
      onFailed: (errorValue: AxiosError<Error>) => {
        // TODO Test if it is returning the spected error
        // console.log("error: ", errorValue.message);
        setError(errorValue);
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
