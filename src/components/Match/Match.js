import React, { useEffect, useState } from "react";
import { Card } from "@material-ui/core";
import { Link } from "@reach/router";

import { apiStaticUrl } from "../../utils/Constants/urls";
import { getChampions } from "../../utils/api";
import Loading from "../Loading/Loading";
import { seasons, queues, serviceProxies } from "../../utils/Constants/game";
import ErrorPanel from "../ErrorPanel/ErrorPanel";

import "./Match.css";

const Match = ({
  champion,
  platformId,
  queue,
  season,
  timestamp,
  role,
  lane,
}) => {
  const [championInfo, setChampionInfo] = useState(null),
    [loading, setLoading] = useState(true),
    [seasonValue, setSeasonValue] = useState(null),
    [queueValue, setQueueValue] = useState(null),
    [platformValue, setPlatformValue] = useState(null),
    [realDate, setRealDate] = useState(null),
    [roleValue, setRoleValue] = useState(null),
    [laneValue, setLaneValue] = useState(null),
    [error, setError] = useState(null);

  const getChampionInfo = (champions) => {
    let championInfo;
    let championMatched = Object.keys(champions).find((champ) => {
      return champions[champ].key == champion;
    });
    championInfo = champions[championMatched];
    return championInfo;
  };

  useEffect(() => {
    const callback = {
      onSuccess: (response) => {
        setChampionInfo(getChampionInfo(response.data.data));
        setSeasonValue(seasons[season]);
        setQueueValue(queues[queue] ? queues[queue] : queue);
        setPlatformValue(serviceProxies[platformId]);
        setRealDate(new Date(timestamp).toDateString());
        setRoleValue(role === "NONE" ? null : role);
        setLaneValue(lane === "NONE" ? null : lane);
        setLoading(false);
      },
      onFailed: (error) => {
        setError(error.response);
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
