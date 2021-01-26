import React, { FunctionComponent, memo, useEffect, useState } from "react";

import { getChampion } from "../../utils/api";
import Loading from "../Loading/Loading";
import RenderChampionDetail from "../RenderChampionDetail/RenderChampionDetail";
import ErrorPanel from "../ErrorPanel/ErrorPanel";
import { useRenderCount } from "../../hooks/customHooks";
import { RouteComponentProps, useParams } from "@reach/router";
import { Error, IChampion, IChampionCallback } from "../../types/commonTypes";

const ChampionDetail: FunctionComponent<RouteComponentProps> = () => {
  const { id }: { id: string } = useParams();
  const [loading, setLoading] = useState(true);
  const [champion, setChampion] = useState<IChampion>();
  const [error, setError] = useState<Error>();

  useRenderCount([id]);
  useEffect(() => {
    const callback: IChampionCallback = {
      onSuccess: (response) => {
        setLoading(false);
        setChampion(response.data);
      },
      onFailed: (errorObject) => {
        setError(errorObject.response);
      },
    };

    getChampion(id, callback);
  }, []);

  const errorChampion: Error = {
    status: 404,
    data: { message: "Champion not found" },
    statusText: "",
    config: {},
    headers: {},
  };

  return loading ? (
    <Loading name="champion detail" />
  ) : !champion ? (
    <ErrorPanel error={errorChampion} />
  ) : error ? (
    <ErrorPanel error={error} />
  ) : (
    <RenderChampionDetail
      version={champion.version}
      id={champion.id}
      numberKey={champion.key}
      name={champion.name}
      title={champion.title}
      blurb={champion.blurb}
      info={champion.info}
      image={champion.image}
      tags={champion.tags}
      partype={champion.partype}
      stats={champion.stats}
    />
  );
};

export default memo(ChampionDetail);
