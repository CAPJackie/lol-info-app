import { AxiosError, AxiosResponse } from "axios";

export interface ICallback {
  onSuccess: (response: AxiosResponse) => void;
  onFailed: (error: AxiosError) => void;
}

// TODO Create my own npm type package mapping Riot Games developer API
// TODO Change export interfaces names according to developer.riotgames.com

export interface IStats {
  hp: number;
  hpperlevel: number;
  mp: number;
  mpperlevel: number;
  movespeed: number;
  armor: number;
  armorperlevel: number;
  spellblock: number;
  spellblockperlevel: number;
  attackrange: number;
  hpregen: number;
  hpregenperlevel: number;
  mpregen: number;
  mpregenperlevel: number;
  crit: number;
  critperlevel: number;
  attackdamage: number;
  attackdamageperlevel: number;
  attackspeedperlevel: number;
  attackspeed: number;
}

export interface IImage {
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface IInfo {
  attack: number;
  defense: number;
  magic: number;
  difficulty: number;
}
export interface IChampion {
  version: string;
  id: string;
  key: string;
  name: string;
  title: string;
  blurb: string;
  info: IInfo;
  image: IImage;
  tags: string[];
  partype: string;
  stats: IStats;
}

export interface ChampionsMap {
  [championName: string]: IChampion;
}
export interface IChampions {
  type: string;
  format: string;
  version: string;
  data: ChampionsMap;
}

export type ResponseType<T = any> = (response: AxiosResponse<T>) => void;

export type ErrorType<T = any> = (error: AxiosError<T>) => void;

export interface IChampionsCallback {
  onSuccess: ResponseType<IChampions>;
  onFailed: ErrorType<CustomError>;
}

export interface SummonerDTO {
  accountId: string;
  profileIconId: number;
  revisionDate: number;
  name: string;
  id: string;
  puuid: string;
  summonerLevel: number;
}

export interface CustomError {
  message: string;
}

export type Error = AxiosResponse<CustomError>;

export interface ISummonerCallback {
  onSuccess: ResponseType<SummonerDTO>;
  onFailed: ErrorType<CustomError>;
}

export interface MatchReferenceDTO {
  gameId: number;
  role: string;
  season: number;
  platformId: string;
  champion: number;
  queue: number;
  lane: string;
  timestamp: number;
}

export interface MatchlistDto {
  startIndex: number;
  totalGames: number;
  endIndex: number;
  matches: MatchReferenceDTO[];
}

export interface ISummonerMatchesCallback {
  onSuccess: ResponseType<string[]>;
  onFailed: ErrorType<CustomError>;
}

export interface MiniSeriesDTO {
  losses: number;
  progress: string;
  target: number;
  wins: number;
}

export interface LeagueItemDTO {
  freshBlood: boolean;
  wins: number;
  summonerName: string;
  miniSeries: MiniSeriesDTO;
  inactive: boolean;
  veteran: boolean;
  hotStreak: boolean;
  rank: string;
  leaguePoints: number;
  losses: number;
  summonerId: string;
}

export interface LeagueListDTO {
  leagueId: string;
  entries: LeagueItemDTO[];
  tier: string;
  name: string;
  queue: string;
}

export interface IleagueListCallback {
  onSuccess: ResponseType<LeagueListDTO>;
  onFailed: ErrorType<CustomError>;
}

export interface CustomChampionResponse {
  data: IChampion;
}

export interface IChampionCallback {
  onSuccess: (response: CustomChampionResponse) => void;
  onFailed: ErrorType<CustomError>;
}

export interface IRankNumber {
  rankNumber?: number;
}

export interface SeasonsMap {
  [index: number]: string;
}

export interface IQueue {
  map: string;
  description: string;
}
export interface QueuesMap {
  [code: number]: IQueue;
}

export interface IProxy {
  region: string;
  host: string;
}
export interface ServicesProxiesMap {
  [regionName: string]: IProxy;
}
