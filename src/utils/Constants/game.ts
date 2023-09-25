import { RegionKey, RegionValue, Regions } from "@/types/regions";
import {
  QueuesMap,
  SeasonsMap,
  ServicesProxiesMap,
} from "../../types/commonTypes";

export const seasons: SeasonsMap = {
  0: "preseason 3",
  1: "season 3",
  2: "preseason 4",
  3: "season 4",
  4: "preseason 5",
  5: "season 5",
  6: "preseason 6",
  7: "season 6",
  8: "preseason 7",
  9: "season 7",
  10: "preseason 8",
  11: "season 8",
  12: "preseason 9",
  13: "season 9",
};
export const queues: QueuesMap = {
  400: { map: "Summoner's Rift", description: "5v5 Draft Pick games" },
  420: { map: "Summoner's Rift", description: "5v5 Ranked Solo games" },
  430: { map: "Summoner's Rift", description: "5v5 Blind Pick games" },
  440: { map: "Summoner's Rift", description: "5v5 Ranked Flex games" },
  450: { map: "Howling Abyss", description: "5v5 ARAM games" },
};
export const serviceProxies: ServicesProxiesMap = {
  LA1: { region: "LAN", host: "la1.api.riotgames.com" },
};
export const description =
  "League of Legends is a fast-paced, competitive online game that blends the speed and intensity of an RTS with RPG elements. Two teams of powerful champions, each with a unique design and playstyle, battle head-to-head across multiple battlefields and game modes. With an ever-expanding roster of champions, frequent updates and a thriving tournament scene, League of Legends offers endless replayability for players of every skill level.";

export const regions: Regions = {
  [RegionKey.EUW]: {
    slug: RegionKey.EUW,
    value: RegionValue.EUROPE_WEST,
  },
  [RegionKey.EUNE]: {
    slug: RegionKey.EUNE,
    value: RegionValue.EUROPE_NORDIC_AND_EAST,
  },
  [RegionKey.BR]: {
    slug: RegionKey.BR,
    value: RegionValue.BRAZIL,
  },
  [RegionKey.JP]: {
    slug: RegionKey.JP,
    value: RegionValue.JAPAN,
  },
  [RegionKey.LAN]: {
    slug: RegionKey.LAN,
    value: RegionValue.LATIN_AMERICA_NORTH,
  },
  [RegionKey.LAS]: {
    slug: RegionKey.LAS,
    value: RegionValue.LATIN_AMERICA_SOUTH,
  },
  [RegionKey.NA]: {
    slug: RegionKey.NA,
    value: RegionValue.NORTH_AMERICA,
  },
  [RegionKey.OCE]: {
    slug: RegionKey.OCE,
    value: RegionValue.OCEANIA,
  },
  [RegionKey.RU]: {
    slug: RegionKey.RU,
    value: RegionValue.RUSSIA,
  },
  [RegionKey.TR]: {
    slug: RegionKey.TR,
    value: RegionValue.TURKEY,
  },
};
