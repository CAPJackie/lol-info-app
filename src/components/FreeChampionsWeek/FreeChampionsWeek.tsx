import { FunctionComponent } from "react";
import styles from "./FreeChampionsWeek.module.scss";
import { ChampionRotation } from "@/types/championRotation";
import ChampionLink from "../ChampionLink/ChampionLink";

const weekRotation: ChampionRotation[] = [
  { link: "olaf", imageUrl: "Olaf" },
  { link: "twistedFate", imageUrl: "TwistedFate" },
  { link: "vladimir", imageUrl: "Vladimir" },
  { link: "ashe", imageUrl: "Ashe" },
  { link: "amumu", imageUrl: "Amumu" },
  { link: "blitzcrank", imageUrl: "Blitzcrank" },
  { link: "poppy", imageUrl: "Poppy" },
  { link: "leona", imageUrl: "Leona" },
  { link: "shyvana", imageUrl: "Shyvana" },
  { link: "sejuani", imageUrl: "Sejuani" },
  { link: "quinn", imageUrl: "Quinn" },
  { link: "kayn", imageUrl: "Kayn" },
  { link: "yasuo", imageUrl: "Yasuo" },
  { link: "jinx", imageUrl: "Jinx" },
];

const FreeChampionsWeek: FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.h2}>Free Champions of the Week</h2>
      <h5 className={styles.h5}>17.10.2023</h5>
      <ul className={styles.ul}>
        {weekRotation.map(({ link, imageUrl }) => (
          <li key={link}>
            <ChampionLink {...{ link, imageUrl }} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FreeChampionsWeek;
