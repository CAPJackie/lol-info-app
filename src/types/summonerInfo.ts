import { Games } from "./games";
import { Kda } from "./kda";
import { League } from "./league";
import { Mastery } from "./mastery";

export type SummonerInfo = {
  ranking?: number;
  summonerName: string;
  currentLeague: League;
  games: Games;
  kda: Kda;
  championPerformance: number;
  lssScore: number;
  region: string;
  mainMastery: Mastery;
};
