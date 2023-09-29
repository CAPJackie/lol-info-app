interface Stats {
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

enum Tag {
  Mage = "Mage",
  Marksman = "Marksman",
}

interface Info {
  attack: number;
  defense: number;
  magic: number;
  difficulty: number;
}

interface Image {
  full: string;
  sprite: string;
  group: string;
  x: 48;
  y: 48;
  w: 48;
  h: 48;
}

interface Champion {
  version: string;
  id: string;
  key: string;
  name: string;
  title: string;
  blurb: string;
  info: Info;
  image: Image;
  tags: Tag[];
  partype: string;
  stats: Stats;
}

export type Champions = Champion[];
