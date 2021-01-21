import { Paper } from "@material-ui/core";
import React, { memo, useEffect, useState } from "react";
import { useRenderCount } from "../../hooks/customHooks";
import { getSummoner, getSummonerMatches } from "../../utils/api";
import { apiStaticUrl } from "../../utils/Constants/urls";
import ErrorPanel from "../ErrorPanel/ErrorPanel";
import Loading from "../Loading/Loading";
import Match from "../Match/Match";
import "./SummonerProfile.css";

const SummonerProfile = ({ name }) => {
  const [loading, setLoading] = useState(true),
    [profileInfo, setProfileInfo] = useState(null),
    [matches, setMatches] = useState(null),
    [error, setError] = useState(null);

  useRenderCount([name]);
  useEffect(() => {
    handleProfileRequest();
    // renderNumber.current = 1;

    return () => {
      setLoading(true);
      setError(null);
    };
  }, [name]);

  const handleProfileRequest = () => {
    const callback = {
      onSuccess: (response) => {
        setProfileInfo(response.data);
        const callback = {
          onSuccess: (response) => {
            console.log("Response from getSummonerMatches", response);
            setMatches(response.data);
            setLoading(false);
          },
          onFailed: (error) => {
            setError(error.response);
          },
        };
        getSummonerMatches(20, response.data.accountId, callback);
      },
      onFailed: (error) => {
        setError(error.response);
      },
    };
    getSummoner(name, callback);
  };

  const getMatches = () => {
    return matches.matches.map(
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
    ? apiStaticUrl.img + "/profileicon/" + profileInfo.profileIconId + ".png"
    : "";

  return error ? (
    <ErrorPanel error={error} />
  ) : loading ? (
    <Loading name="summoner profile" />
  ) : (
    <Paper className="summoner-info-container">
      <img src={profileIconUrl} alt="Summoner Profile Icon" />
      <h2>{profileInfo.name}</h2>
      <p>level {profileInfo.summonerLevel}</p>
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
