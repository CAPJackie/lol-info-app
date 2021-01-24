import axios, { AxiosError, AxiosResponse } from "axios";
import {
  IChampionCallback,
  IChampions,
  IChampionsCallback,
  IleagueListCallback,
  ISummonerCallback,
  ISummonerMatchesCallback,
  LeagueListDTO,
  MatchlistDto,
  process,
  SummonerDTO,
} from "../types/commonTypes";
import { apiStaticUrl, apiUrl } from "./Constants/urls";

const key = process.env.API_KEY;

const concatApiKey = (option: string) => {
  return option + "api_key=" + key;
};

export const getChampions = (callback: IChampionsCallback) => {
  axios
    .get(apiStaticUrl.data + "/champion.json")
    .then((response: AxiosResponse<IChampions>) => {
      callback.onSuccess(response);
    })
    .catch((error: AxiosError) => {
      callback.onFailed(error);
    });
};

// TODO write types
export const getChampion = (
  championKey: string,
  callback: IChampionCallback
) => {
  const championsCallback = {
    onSuccess: (response: AxiosResponse<IChampions>) => {
      callback.onSuccess({ data: response.data.data[championKey] });
    },
    onFailed: (error: AxiosError) => {
      callback.onFailed(error);
    },
  };
  getChampions(championsCallback);
};

export const getSummoner = (
  summonerName: string,
  callback: ISummonerCallback
) => {
  axios
    .get(
      apiUrl +
        "/summoner/v4/summoners/by-name/" +
        summonerName +
        concatApiKey("?")
    )
    .then((response: AxiosResponse<SummonerDTO>) => {
      callback.onSuccess(response);
    })
    .catch((error: AxiosError) => {
      callback.onFailed(error);
    });
};

export const getSummonerById = (
  encryptedSummonerId: string,
  callback: ISummonerCallback
) => {
  axios
    .get(
      `${apiUrl}/summoner/v4/summoners/${encryptedSummonerId}${concatApiKey(
        "?"
      )}`
    )
    .then((response: AxiosResponse<SummonerDTO>) => {
      callback.onSuccess(response);
    })
    .catch((error: AxiosError) => {
      callback.onFailed(error);
    });
};

export const getSummonerMatches = (
  numberOfMatches: number,
  encryptedAccountId: string,
  callback: ISummonerMatchesCallback
) => {
  axios
    .get(
      apiUrl +
        "/match/v4/matchlists/by-account/" +
        encryptedAccountId +
        "?endIndex=" +
        numberOfMatches +
        concatApiKey("&")
    )
    .then((response: AxiosResponse<MatchlistDto>) => {
      callback.onSuccess(response);
    })
    .catch((error: AxiosError) => {
      callback.onFailed(error);
    });
};

export const getChallengerLeagueByQueue = (
  // TODO Create an Enum
  queue: string,
  callback: IleagueListCallback
) => {
  axios
    .get(
      apiUrl +
        "/league/v4/challengerleagues/by-queue/" +
        queue +
        concatApiKey("?")
    )
    .then((response: AxiosResponse<LeagueListDTO>) => {
      callback.onSuccess(response);
    })
    .catch((error: AxiosError) => {
      callback.onFailed(error);
    });
};
