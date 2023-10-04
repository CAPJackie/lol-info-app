import { SummonerInfo } from "@/types/summonerInfo";
import { faker } from "@faker-js/faker";

export const fetchSummonersTopList: () => SummonerInfo[] = () => {
  const champions = [
    "Anivia",
    "Ahri",
    "Ashe",
    "Amumu",
    "Blitzcrank",
    "Caitlyn",
    "Diana",
    "Draven",
    "Ezreal",
    "Fiora",
    "Garen",
    "Heimerdinger",
    "Irelia",
    "Jax",
    "Katarina",
    "Lux",
    "Miss Fortune",
    "Nasus",
    "Orianna",
    "Poppy",
    "Quinn",
    "Riven",
    "Soraka",
    "Teemo",
    "Udyr",
    "Vayne",
    "Warwick",
    "Xin Zhao",
    "Yasuo",
    "Zed",
  ];

  const generateGamingUsername = () =>
    `${faker.internet.userName()}${faker.datatype.number({
      min: 1,
      max: 9999,
    })}`;

  const generateItem: () => SummonerInfo = () => ({
    summonerName: generateGamingUsername(),
    championPerformance: faker.number.int({ min: 1, max: 100 }),
    currentLeague: {
      league: faker.helpers.arrayElement([
        "Bronze",
        "Silver",
        "Gold",
        "Platinum",
        "Diamond",
        "Master",
        "Challenger",
      ]),
      division: faker.helpers.arrayElement(["I", "II", "III", "IV"]),
      lp: faker.number.int({ min: 0, max: 100 }),
    },
    winningRate: parseFloat(faker.finance.amount(0, 100, 1)),
    kda: {
      kills: parseFloat(faker.finance.amount(0, 50, 1)),
      deaths: parseFloat(faker.finance.amount(0, 10, 1)),
      assistances: parseFloat(faker.finance.amount(0, 20, 1)),
    },
    lssScore: faker.number.float({ min: 1000, max: 10000 }),
    region: "LAN",
    mainMastery: {
      level: faker.number.int({ min: 1, max: 7 }),
      points: faker.number.float({ min: 1000, max: 100000 }),
      champion: faker.helpers.arrayElement(champions),
    },
  });

  return Array.from({ length: 300 }, generateItem);
};
