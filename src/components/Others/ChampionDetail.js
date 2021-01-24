import React, { memo, useEffect, useState } from "react";

import { getChampion } from "../../utils/api";
import Loading from "../Loading/Loading";
import RenderChampionDetail from "../RenderChampionDetail/RenderChampionDetail";
import ErrorPanel from "../ErrorPanel/ErrorPanel";
import { useRenderCount } from "../../hooks/customHooks";
import { useParams } from "@reach/router";

const ChampionDetail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true),
    [champion, setChampion] = useState(null),
    [error, setError] = useState(null);

  useRenderCount([id]);
  useEffect(() => {
    var callback = {
      onSuccess: (response) => {
        setLoading(false);
        setChampion(response.data);
      },
      onFailed: (error) => {
        setError(error.response);
      },
    };

    getChampion(id, callback);
  }, []);

  const errorChampion = !champion
    ? {
        status: 404,
        data: { status: { message: "Champion not found" } },
      }
    : null;

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
