import React, { useEffect, useState } from "react";
import { Paper } from "@material-ui/core";

import { apiStaticUrl } from "../../utils/Constants/urls";
import { getSummonerMatches, getSummoner } from "../../utils/api";
import Match from "../Match/Match";
import Loading from "../Loading/Loading";
import ErrorPanel from "../ErrorPanel/ErrorPanel";

import "./SummonerProfile.css";

const SummonerProfile = ({ name }) => {
  const [loading, setLoading] = useState(true),
    [profileInfo, setProfileInfo] = useState(null),
    [matches, setMatches] = useState(null),
    [error, setError] = useState(null);

  useEffect(() => {
    handleProfileRequest();
  }, [name]);

  const handleProfileRequest = () => {
    const callback = {
      onSuccess: (response) => {
        setProfileInfo(response.data);
        const callback = {
          onSuccess: (response) => {
            setLoading(false);
            setMatches(response.data);
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
// class SummonerProfile extends React.Component {
//   state = {
//     loading: true,
//   };

//   UNSAFE_componentWillReceiveProps(newProps) {
//     const upperNewProps = newProps.name.toUpperCase();
//     const upperOldProps = this.props.name.toUpperCase();
//     if (!(upperNewProps === upperOldProps)) {
//       this.setState({
//         loading: true,
//         matches: null,
//         profileInfo: null,
//         error: null,
//       });
//     }
//   }

//   componentDidUpdate() {
//     if (!this.state.profileInfo && this.state.loading && !this.state.error) {
//       this.handleProfileRequest();
//     }
//   }

//   handleProfileRequest = () => {
//     var callback = {
//       onSuccess: (response) => {
//         this.setState({ profileInfo: response.data }, () => {
//           var callback = {
//             onSuccess: (response) => {
//               this.setState({ loading: false, matches: response.data });
//             },
//             onFailed: (error) => {
//               this.setState({ error: error.response });
//             },
//           };
//           getSummonerMatches(20, this.state.profileInfo.accountId, callback);
//         });
//       },
//       onFailed: (error) => {
//         this.setState({ error: error.response });
//       },
//     };
//     getSummoner(this.props.name, callback);
//   };

//   componentDidMount() {
//     this.handleProfileRequest();
//   }

//   getMatches = () => {
//     const { matches } = this.state;
//     return matches.matches.map((value, index) => {
//       return (
//         <li key={index}>
//           <Match
//             platformId={value.platformId}
//             gameId={value.gameId}
//             champion={value.champion}
//             queue={value.queue}
//             season={value.season}
//             timestamp={value.timestamp}
//             role={value.role}
//             lane={value.lane}
//           />
//         </li>
//       );
//     });
//   };

//   render() {
//     const { loading, profileInfo, error } = this.state;

//     const profileIconUrl = profileInfo
//       ? apiStaticUrl.img + "/profileicon/" + profileInfo.profileIconId + ".png"
//       : "";

//     return error ? (
//       <ErrorPanel error={error} />
//     ) : loading ? (
//       <Loading name="summoner profile" />
//     ) : (
//       <Paper className="summoner-info-container">
//         <img src={profileIconUrl} alt="Summoner Profile Icon" />
//         <h2>{profileInfo.name}</h2>
//         <p>level {profileInfo.summonerLevel}</p>
//         <section className="additional-info">
//           <Paper>
//             <h3>Recent Matches</h3>
//             <ul className="matches-list">{this.getMatches()}</ul>
//           </Paper>
//         </section>
//       </Paper>
//     );
//   }
// }

export default SummonerProfile;
