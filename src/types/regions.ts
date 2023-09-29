export type Regions = RegionObject[];

export interface RegionObject {
  slug?: string;
  name: RegionValue;
}

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
  EUROPE_WEST = "Europe West",
  EUROPE_NORDIC_AND_EAST = "Europe Nordic & East",
  NORTH_AMERICA = "North America",
  BRAZIL = "Brazil",
  KOREA = "Korea",
  TURKEY = "Turkey",
  RUSSIA = "Russia",
  LATIN_AMERICA_NORTH = "Latin America North",
  LATIN_AMERICA_SOUTH = "Latin America South",
  OCEANIA = "Oceania",
  JAPAN = "Japan",
}
