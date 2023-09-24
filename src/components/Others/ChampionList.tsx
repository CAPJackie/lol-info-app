import React, { FunctionComponent, useEffect, useState } from "react";
import {
  ChampionsMap,
  Error,
  IChampionsCallback,
} from "../../types/commonTypes";
import ErrorPanel from "../ErrorPanel/ErrorPanel";
import Loading from "../Loading/Loading";
import RenderChampionList from "../RenderChampionList/RenderChampionList";
import { getChampions } from "@/utils/api";

const ChampionList: FunctionComponent = () => {
  const [champions, setChampions] = useState<ChampionsMap>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    const callback: IChampionsCallback = {
      onSuccess: (response) => {
        setChampions(response.data.data);
        setLoading(false);
      },
      onFailed: (errorValue) => {
        // TODO Test if it is returning the spected error
        // console.log("error: ", errorValue.message);
        setError(errorValue.response);
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
