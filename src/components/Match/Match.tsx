import { Card } from "@mui/material";
import { FunctionComponent, useEffect, useState } from "react";

import { queues, seasons, serviceProxies } from "../../utils/Constants/game";
import { apiStaticUrl } from "../../utils/Constants/urls";
import { getChampions } from "../../utils/api";
import ErrorPanel from "../ErrorPanel/ErrorPanel";
import Loading from "../Loading/Loading";

import { AxiosError, AxiosResponse } from "axios";
import Image from "next/image";
import Link from "next/link";
import {
  ChampionsMap,
  CustomError,
  Error,
  IChampion,
  IChampions,
  IProxy,
  IQueue,
  MatchReferenceDTO,
} from "../../types/commonTypes";
import styles from "./Match.module.scss";

const Match: FunctionComponent<MatchReferenceDTO> = ({
  champion,
  platformId,
  queue,
  season,
  timestamp,
  role,
  lane,
}) => {
  const [championInfo, setChampionInfo] = useState<IChampion | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [seasonValue, setSeasonValue] = useState<string>();
  const [queueValue, setQueueValue] = useState<IQueue>();
  const [platformValue, setPlatformValue] = useState<IProxy>();
  const [realDate, setRealDate] = useState<string>();
  const [roleValue, setRoleValue] = useState<string>();
  const [laneValue, setLaneValue] = useState<string>();
  const [error, setError] = useState<Error>();

  useEffect(() => {
    const callback = {
      onSuccess: (response: AxiosResponse<IChampions>) => {
        const champions: ChampionsMap = response.data.data;
        const championMatched = Object.keys(champions).find(
          (champ) => +champions[champ].key === champion,
        );
        setChampionInfo(championMatched ? champions[championMatched] : undefined);
        setSeasonValue(seasons[season]);
        setQueueValue(queues[queue]);
        setPlatformValue(serviceProxies[platformId]);
        setRealDate(new Date(timestamp).toDateString());
        setRoleValue(role === "NONE" ? undefined : role);
        setLaneValue(lane === "NONE" ? undefined : lane);
        setLoading(false);
      },
      onFailed: (errorObject: AxiosError<CustomError>) => {
        setError(errorObject.response);
      },
    };
    getChampions(callback);
  }, [champion, lane, platformId, queue, role, season, timestamp]);

  const championImgUrl = championInfo
    ? `${apiStaticUrl.img}/champion/${championInfo.image.full}`
    : "";

  return loading ? (
    <Loading name="loading champion" />
  ) : error ? (
    <ErrorPanel error={error} />
  ) : (
    <Card className={styles.card}>
      <Link href={`/champion/${championInfo?.id}`}>
        <Image src={championImgUrl} alt={`The champion used was ${championInfo?.name}`} />
      </Link>

      <h4>{seasonValue}</h4>

      <article className={styles.article}>
        <h5>{`${queueValue?.map}, ${queueValue?.description}`}</h5>
        <dl>
          <div>
            <dt>server</dt>
            <dd>{platformValue?.region}</dd>
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
