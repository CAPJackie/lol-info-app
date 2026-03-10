import { SummonerInfo } from "@/types/summonerInfo";
import { faker } from "@faker-js/faker";
import { champions } from "./Constants/champions";

const SUMMONERS_SEED = 1337;

export const fetchSummonersTopList: () => SummonerInfo[] = () => {
  // Keep generated mock data stable between server render and client hydration.
  faker.seed(SUMMONERS_SEED);

  const generateGamingUsername = () =>
    `${faker.internet.username()}${faker.number.int({
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
    games: {
      wins: faker.number.int({ min: 0, max: 1000 }),
      defeats: faker.number.int({ min: 0, max: 1000 }),
    },
    kda: {
      kills: faker.number.float({ min: 0, max: 50, fractionDigits: 1 }),
      deaths: faker.number.float({ min: 0, max: 10, fractionDigits: 1 }),
      assistances: faker.number.float({ min: 0, max: 20, fractionDigits: 1 }),
    },
    lssScore: faker.number.int({ min: 1000, max: 10000 }),
    region: "LAN",
    mainMastery: {
      level: faker.number.int({ min: 1, max: 7 }),
      points: faker.number.float({ min: 1000, max: 100000 }),
      champion: faker.helpers.arrayElement(champions),
    },
  });

  return Array.from({ length: 300 }, generateItem);
};
