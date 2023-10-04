import { Kda } from "./kda";
import { League } from "./league";
import { Mastery } from "./mastery";

export type SummonerInfo = {
  ranking?: number;
  summonerName: string;
  currentLeague: League;
  winningRate: number;
  kda: Kda;
  championPerformance: number;
  lssScore: number;
  region: string;
  mainMastery: Mastery;
};
