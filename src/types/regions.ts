export interface Regions {
  [key: string]: RegionObject;
}

export type RegionObject = {
  slug: string;
  value: RegionValue;
};

export enum RegionKey {
  EUW = "EUW",
  EUNE = "EUNE",
  NA = "NA",
  BR = "BR",
  KR = "KR",
  TR = "TR",
  RU = "RU",
  LAN = "LAN",
  LAS = "LAS",
  OCE = "OCE",
  JP = "JP",
}

export enum RegionValue {
  EUROPE_WEST = "EUROPE WEST",
  EUROPE_NORDIC_AND_EAST = "EUROPE NORDIC & EAST",
  NORTH_AMERICA = "NORTH AMERICA",
  BRAZIL = "BRAZIL",
  KOREA = "KOREA",
  TURKEY = "TURKEY",
  RUSSIA = "RUSSIA",
  LATIN_AMERICA_NORTH = "LATIN AMERICA NORTH",
  LATIN_AMERICA_SOUTH = "LATIN AMERICA SOUTH",
  OCEANIA = "OCEANIA",
  JAPAN = "JAPAN",
}
