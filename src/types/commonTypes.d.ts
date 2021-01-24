import { AxiosError, AxiosResponse } from "axios";

declare module "*.png";
declare module "*.jpeg";

declare const process: {
  env: {
    API_KEY: string;
  };
};

interface ICallback {
  onSuccess: (response: AxiosResponse) => void;
  onFailed: (error: AxiosError) => void;
}

//TODO Create my own npm type package mapping Riot Games developer API
//TODO Change interfaces names according to developer.riotgames.com

interface IStats {
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

interface IImage {
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
}

interface IInfo {
  attack: number;
  defense: number;
  magic: number;
  difficulty: number;
}
interface IChampion {
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

interface IChampions {
  type: string;
  format: string;
  version: string;
  data: { [championName: string]: IChampion };
}

interface ResponseType<T = any> {
  (response: AxiosResponse<T>): void;
}
// TODO Create a type that encapsules onSuccess responses
interface IChampionsCallback {
  onSuccess: ResponseType<IChampions>;
  onFailed: (error: AxiosError) => void;
}

interface SummonerDTO {
  accountId: string;
  profileIconId: number;
  revisionDate: number;
  name: string;
  id: string;
  puuid: string;
  summonerLevel: number;
}

interface ISummonerCallback {
  onSuccess: ResponseType<SummonerDTO>;
  onFailed: (error: AxiosError) => void;
}

interface MatchReferenceDTO {
  gameId: number;
  role: string;
  season: number;
  platformId: string;
  champion: number;
  queue: number;
  lane: string;
  timestamp: number;
}

interface MatchlistDto {
  startIndex: number;
  totalGames: number;
  endIndex: number;
  matches: MatchReferenceDTO[];
}

interface ISummonerMatchesCallback {
  onSuccess: ResponseType<MatchlistDto>;
  onFailed: (error: AxiosError) => void;
}

interface MiniSeriesDTO {
  losses: number;
  progress: string;
  target: number;
  wins: number;
}

interface LeagueItemDTO {
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

interface LeagueListDTO {
  leagueId: string;
  entries: LeagueItemDTO[];
  tier: string;
  name: string;
  queue: string;
}

interface IleagueListCallback {
  onSuccess: ResponseType<LeagueListDTO>;
  onFailed: (error: AxiosError) => void;
}

interface CustomChampionResponse {
  data: IChampion;
}

interface IChampionCallback {
  onSuccess: (response: CustomChampionResponse) => void;
  onFailed: (error: AxiosError) => void;
}
