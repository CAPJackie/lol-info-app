import React, { FunctionComponent, useEffect, useState } from "react";
import { Card } from "@material-ui/core";
import { Link } from "@reach/router";

import { apiStaticUrl } from "../../utils/Constants/urls";
import { getChampions } from "../../utils/api";
import Loading from "../Loading/Loading";
import { seasons, queues, serviceProxies } from "../../utils/Constants/game";
import ErrorPanel from "../ErrorPanel/ErrorPanel";

import "./Match.css";
import { AxiosError, AxiosResponse } from "axios";
import {
  ChampionsMap,
  IChampion,
  IChampions,
  MatchReferenceDTO,
} from "../../types/commonTypes";

const Match: FunctionComponent<MatchReferenceDTO> = ({
  champion,
  platformId,
  queue,
  season,
  timestamp,
  role,
  lane,
}) => {
  const [championInfo, setChampionInfo] = useState<IChampion | undefined>(
    undefined
  );
  const [loading, setLoading] = useState(true);
  const [seasonValue, setSeasonValue] = useState<string | null>(null);
  const [queueValue, setQueueValue] = useState(null);
  const [platformValue, setPlatformValue] = useState(null);
  const [realDate, setRealDate] = useState(null);
  const [roleValue, setRoleValue] = useState(null);
  const [laneValue, setLaneValue] = useState(null);
  const [error, setError] = useState({});

  const getChampionInfo = (champions: ChampionsMap) => {
    let championInfoObject;
    const championMatched = Object.keys(champions).find((champ) => {
      // TODO Check if key can be converted to number type
      return +champions[champ].key === champion;
    });
    championInfoObject = championMatched
      ? champions[championMatched]
      : undefined;
    return championInfoObject;
  };

  useEffect(() => {
    const callback = {
      onSuccess: (response: AxiosResponse<IChampions>) => {
        setChampionInfo(getChampionInfo(response.data.data));
        setSeasonValue(seasons[season]);
        setQueueValue(queues[queue] ? queues[queue] : queue);
        setPlatformValue(serviceProxies[platformId]);
        setRealDate(new Date(timestamp).toDateString());
        setRoleValue(role === "NONE" ? null : role);
        setLaneValue(lane === "NONE" ? null : lane);
        setLoading(false);
      },
      onFailed: (errorObject: AxiosError<Error>) => {
        setError(errorObject);
      },
    };
    getChampions(callback);
  }, []);

  const championImgUrl = championInfo
    ? apiStaticUrl.img + "/champion/" + championInfo.image.full
    : "";

  return loading ? (
    <Loading name="loading champion" />
  ) : error ? (
    <ErrorPanel error={error} />
  ) : (
    <Card className="flex-row-match-card">
      <Link to={`/champion/${championInfo.id}`}>
        <img
          src={championImgUrl}
          alt={`The champion used was ${championInfo.name}`}
        />
      </Link>

      <h4>{seasonValue}</h4>

      <article className="details-panel">
        <h5>{`${queueValue.map}, ${queueValue.description}`}</h5>
        <dl>
          <div>
            <dt>server</dt>
            <dd>{platformValue.region}</dd>
          </div>
          <div>
            <dt>date</dt>
            <dd>{realDate}</dd>
          </div>

          {roleValue && (
            <div>
              <dt>role</dt>
              <dd>{roleValue}</dd>
            </div>
          )}

          {laneValue && (
            <div>
              <dt>lane</dt>
              <dd>{laneValue}</dd>
            </div>
          )}
        </dl>
      </article>
    </Card>
  );
};

export default Match;
