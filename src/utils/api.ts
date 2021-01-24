import axios, { AxiosError, AxiosResponse } from "axios";
import { apiStaticUrl, apiUrl } from "./Constants/urls";

declare const process: {
  env: {
    API_KEY: string;
  };
};

interface ICallback {
  onSuccess: (response: AxiosResponse) => void;
  onFailed: (error: AxiosError) => void;
}

type ChampionDetail = {
  data: string;
};

const key = process.env.API_KEY;

const concatApiKey = (option: string) => {
  return option + "api_key=" + key;
};

interface IChampion {
  id: string;
  key: string;
  name: string;
  tittle: string;
  blurb: string;
  info: string;
  image: string;
  tags: string;
  partype: string;
  stats: string;
}

const getChampions = (callback: {
  onSuccess: (response: AxiosResponse<{ data: IChampion[] }>) => void;
  onFailed: (error: AxiosError) => void;
}) => {
  axios
    .get(apiStaticUrl.data + "/champion.json")
    .then((response) => {
      callback.onSuccess(response);
    })
    .catch((error: AxiosError) => {
      callback.onFailed(error);
    });
};

interface IOwnCallback {
  onSuccess: (response: AxiosResponse<{ data: IChampion[] }>) => void;
  onFailed: (error: AxiosError) => void;
}
// version={champion.version}
//       id={champion.id}
//       numberKey={champion.key}
//       name={champion.name}
//       title={champion.title}
//       blurb={champion.blurb}
//       info={champion.info}
//       image={champion.image}
//       tags={champion.tags}
//       partype={champion.partype}
//       stats={champion.stats}

const getChampion = (
  championKey: number,
  callback: {
    onSuccess: (response: { data: IChampion }) => void;
    onFailed: (error: AxiosError) => void;
  }
) => {
  const championsCallback = {
    onSuccess: (response: AxiosResponse<{ data: IChampion[] }>) => {
      callback.onSuccess({ data: response.data.data[championKey] });
    },
    onFailed: (error: AxiosError) => {
      callback.onFailed(error);
    },
  };
  getChampions(championsCallback);
};

const getSummoner = (summonerName: string, callback: ICallback) => {
  axios
    .get(
      apiUrl +
        "/summoner/v4/summoners/by-name/" +
        summonerName +
        concatApiKey("?")
    )
    .then((response) => {
      callback.onSuccess(response);
    })
    .catch((error) => {
      callback.onFailed(error);
    });
};

const getSummonerById = (id: string, callback: ICallback) => {
  axios
    .get(apiUrl + "/summoner/v4/summoners/" + id + concatApiKey("?"))
    .then((response) => {
      callback.onSuccess(response);
    })
    .catch((error) => {
      callback.onFailed(error);
    });
};

const getSummonerMatches = (
  numberOfMatches: number,
  accountId: string,
  callback: ICallback
) => {
  axios
    .get(
      apiUrl +
        "/match/v4/matchlists/by-account/" +
        accountId +
        "?endIndex=" +
        numberOfMatches +
        concatApiKey("&")
    )
    .then((response) => {
      callback.onSuccess(response);
    })
    .catch((error) => {
      callback.onFailed(error);
    });
};

const getChallengerLeagueByQueue = (queue: string, callback: ICallback) => {
  axios
    .get(
      apiUrl +
        "/league/v4/challengerleagues/by-queue/" +
        queue +
        concatApiKey("?")
    )
    .then((response) => {
      callback.onSuccess(response);
    })
    .catch((error) => {
      callback.onFailed(error);
    });
};

export {
  getChampions,
  getChampion,
  getSummoner,
  getSummonerById,
  getSummonerMatches,
  getChallengerLeagueByQueue,
};
