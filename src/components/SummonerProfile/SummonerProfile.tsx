import { Paper } from "@material-ui/core";
import { RouteComponentProps, useParams } from "@reach/router";
import React, { FunctionComponent, memo, useEffect, useState } from "react";
import { useRenderCount } from "../../hooks/customHooks";
import {
  Error,
  ISummonerCallback,
  ISummonerMatchesCallback,
  MatchlistDto,
  SummonerDTO,
} from "../../types/commonTypes";
import { getSummoner, getSummonerMatches } from "../../utils/api";
import { apiStaticUrl } from "../../utils/Constants/urls";
import ErrorPanel from "../ErrorPanel/ErrorPanel";
import Loading from "../Loading/Loading";
import Match from "../Match/Match";
import "./SummonerProfile.css";

const SummonerProfile: FunctionComponent<RouteComponentProps> = () => {
  const { name }: { name: string } = useParams();
  const [loading, setLoading] = useState(true);
  const [profileInfo, setProfileInfo] = useState<SummonerDTO>();
  const [matches, setMatches] = useState<MatchlistDto>();
  const [error, setError] = useState<Error>();

  useRenderCount([name]);
  useEffect(() => {
    handleProfileRequest();
    return () => {
      setLoading(true);
      setError(undefined);
    };
  }, [name]);

  const handleProfileRequest = () => {
    const callback: ISummonerCallback = {
      onSuccess: (response) => {
        setProfileInfo(response.data);
        const summonerMatchesCallback: ISummonerMatchesCallback = {
          onSuccess: (res) => {
            console.log("Response from getSummonerMatches", res);
            setMatches(res.data);
            setLoading(false);
          },
          onFailed: (err) => {
            setError(err.response);
          },
        };
        getSummonerMatches(
          20,
          response.data.accountId,
          summonerMatchesCallback
        );
      },
      onFailed: (errorValue) => {
        setError(errorValue.response);
      },
    };
    getSummoner(name, callback);
  };

  const getMatches = () => {
    return matches?.matches.map(
      (
        { platformId, gameId, champion, queue, season, timestamp, role, lane },
        index
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
      }
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
    <Paper className="summoner-info-container">
      <img src={profileIconUrl} alt="Summoner Profile Icon" />
      <h2>{profileInfo?.name}</h2>
      <p>level {profileInfo?.summonerLevel}</p>
      <section className="additional-info">
        <Paper>
          <h3>Recent Matches</h3>
          <ul className="matches-list">{getMatches()}</ul>
        </Paper>
      </section>
    </Paper>
  );
};

const MemoizedSummonerProfile = memo(SummonerProfile);

export default MemoizedSummonerProfile;
