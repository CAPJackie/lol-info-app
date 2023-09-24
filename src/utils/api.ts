import axios, { AxiosError, AxiosResponse } from "axios";
import {
  CustomError,
  IChampionCallback,
  IChampions,
  IChampionsCallback,
  IleagueListCallback,
  ISummonerCallback,
  ISummonerMatchesCallback,
  LeagueListDTO,
  MatchlistDto,
  SummonerDTO,
} from "../types/commonTypes";
import { apiStaticUrl, apiUrl, apiUrl2 } from "./Constants/urls";

const key = process.env.NEXT_PUBLIC_API_KEY;

export const concatApiKey = (option: string) => {
  return option + "api_key=" + key;
};
export const getChampions = (callback: IChampionsCallback) => {
  axios
    .get(apiStaticUrl.data + "/champion.json")
    .then((response: AxiosResponse<IChampions>) => {
      callback.onSuccess(response);
    })
    .catch((error: AxiosError<CustomError>) => {
      callback.onFailed(error);
    });
};
export const getChampion = (
  championKey: string,
  callback: IChampionCallback,
) => {
  const championsCallback: IChampionsCallback = {
    onSuccess: (response) => {
      callback.onSuccess({ data: response.data.data[championKey] });
    },
    onFailed: (error) => {
      callback.onFailed(error);
    },
  };
  getChampions(championsCallback);
};

export const getSummoner = (
  summonerName: string,
  callback: ISummonerCallback,
) => {
  axios
    .get(
      apiUrl +
        "/summoner/v4/summoners/by-name/" +
        summonerName +
        concatApiKey("?"),
    )
    .then((response: AxiosResponse<SummonerDTO>) => {
      callback.onSuccess(response);
    })
    .catch((error: AxiosError<CustomError>) => {
      callback.onFailed(error);
    });
};
const getSummonerById = (
  encryptedSummonerId: string,
  callback: ISummonerCallback,
) => {
  axios
    .get(
      `${apiUrl}/summoner/v4/summoners/${encryptedSummonerId}${concatApiKey(
        "?",
      )}`,
    )
    .then((response: AxiosResponse<SummonerDTO>) => {
      callback.onSuccess(response);
    })
    .catch((error: AxiosError<CustomError>) => {
      callback.onFailed(error);
    });
};
export const getSummonerMatches = (
  numberOfMatches: number,
  puuid: string,
  callback: ISummonerMatchesCallback,
) => {
  axios
    .get(
      apiUrl2 +
        "/match/v5/matches/by-puuid/" +
        puuid +
        "/ids?count=" +
        numberOfMatches +
        concatApiKey("&"),
    )
    .then((response: AxiosResponse<MatchlistDto>) => {
      callback.onSuccess(response);
    })
    .catch((error: AxiosError<CustomError>) => {
      callback.onFailed(error);
    });
};
export const getChallengerLeagueByQueue = (
  // TODO Create an Enum
  queue: string,
  callback: IleagueListCallback,
) => {
  axios
    .get(
      apiUrl +
        "/league/v4/challengerleagues/by-queue/" +
        queue +
        concatApiKey("?"),
    )
    .then((response: AxiosResponse<LeagueListDTO>) => {
      callback.onSuccess(response);
    })
    .catch((error: AxiosError<CustomError>) => {
      callback.onFailed(error);
    });
};
