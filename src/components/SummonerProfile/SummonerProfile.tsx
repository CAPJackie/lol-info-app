"use client";

import { Paper } from "@material-ui/core";
import axios, { AxiosResponse } from "axios";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { FunctionComponent, memo, useEffect, useState } from "react";
import { useRenderCount } from "../../hooks/customHooks";
import {
  Error,
  ISummonerCallback,
  ISummonerMatchesCallback,
  MatchReferenceDTO,
  SummonerDTO,
} from "../../types/commonTypes";
import { apiStaticUrl, apiUrl2 } from "../../utils/Constants/urls";
import { concatApiKey, getSummoner, getSummonerMatches } from "../../utils/api";
import ErrorPanel from "../ErrorPanel/ErrorPanel";
import Loading from "../Loading/Loading";
import Match from "../Match/Match";
import styles from "./SummonerProfile.module.scss";

const SummonerProfile: FunctionComponent = () => {
  const [loading, setLoading] = useState(true);
  const [profileInfo, setProfileInfo] = useState<SummonerDTO>();
  const [matches, setMatches] = useState<MatchReferenceDTO[]>();
  const [error, setError] = useState<Error>();

  const name = useSearchParams()?.get("name") as string;

  useRenderCount([name]);
  useEffect(() => {
    handleProfileRequest();
    return () => {
      setLoading(true);
      setError(undefined);
    };
  }, [name]);

  const getMatchesAxios = async (response: AxiosResponse<string[], any>) => {
    const minimizedArray = response.data.slice(0, 8);
    let matches: MatchReferenceDTO[] = [];
    for (let index = 0; index < minimizedArray.length; index++) {
      const matchId = minimizedArray[index];
      const match = await axios.get(
        `${apiUrl2}/match/v5/matches/${matchId}${concatApiKey("?")}`,
      );
      matches.push(match.data);
    }
    await Promise.all(matches);
    setMatches(matches);
    setLoading(false);
  };

  const handleProfileRequest = () => {
    const callback: ISummonerCallback = {
      onSuccess: (response) => {
        setProfileInfo(response.data);
        const summonerMatchesCallback: ISummonerMatchesCallback = {
          onSuccess: (res) => {
            console.log("Response from getSummonerMatches", res);
            getMatchesAxios(res);
          },
          onFailed: (err) => {
            setError(err.response);
          },
        };
        getSummonerMatches(20, response.data.puuid, summonerMatchesCallback);
      },
      onFailed: (errorValue) => {
        setError(errorValue.response);
      },
    };
    getSummoner(name, callback);
  };

  const getMatches = () => {
    //TODO Needs to change since api changed responses
    return matches?.map(
      (
        { platformId, gameId, champion, queue, season, timestamp, role, lane },
        index,
      ) => {
        return (
          <li key={index}>
            <Match
              platformId={platformId}
              gameId={gameId}
              champion={champion}
              queue={queue}
              season={season}
              timestamp={timestamp}
              role={role}
              lane={lane}
            />
          </li>
        );
      },
    );
  };

  const profileIconUrl = profileInfo
    ? `${apiStaticUrl.img}/profileicon/${profileInfo.profileIconId}.png`
    : ``;

  return error ? (
    <ErrorPanel error={error} />
  ) : loading ? (
    <Loading name="summoner profile" />
  ) : (
    <Paper className={styles.paper}>
      <Image
        src={profileIconUrl}
        alt="Summoner Profile Icon"
        width={150}
        height={150}
      />
      <h2>{profileInfo?.name}</h2>
      <p>level {profileInfo?.summonerLevel}</p>
      <section className={styles.section}>
        <Paper>
          <h3>Recent Matches</h3>
          <ul>{getMatches()}</ul>
        </Paper>
      </section>
    </Paper>
  );
};

const MemoizedSummonerProfile = memo(SummonerProfile);

export default MemoizedSummonerProfile;
