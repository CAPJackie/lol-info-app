import { RegionObject } from "@/types/regions";
import { regions } from "@/utils/Constants/game";
import {
  ChangeEventHandler,
  FunctionComponent,
  MouseEventHandler,
  useState,
} from "react";
import styles from "./SummonerSearchBar.module.css";

const SummonerSearchBar: FunctionComponent = () => {
  const [summonerName, setSummonerName] = useState("");
  const [menuRegionIsOpen, setMenuRegionIsOpen] = useState(false);
  const [currentRegion, setCurrentRegion] = useState<RegionObject>(regions.EUW);
  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSummonerName(event.target.value);
  };

  console.log(currentRegion);
  const onClick: MouseEventHandler<HTMLButtonElement> = () => {
    setMenuRegionIsOpen(!menuRegionIsOpen);
  };
  return (
    <div className={styles.searchBar}>
      <ul className={styles.searchBarList}>
        <li className={styles.input}>
          <div>
            <input
              type="text"
              placeholder="Summoner name..."
              {...{ onChange }}
              value={summonerName}
            />
          </div>
          <div>
            <button
              type="button"
              {...{ onClick }}
            >{` ${currentRegion.slug} `}</button>
          </div>
        </li>
        <li className={styles.searchButton}>
          <button type="submit" className={styles.searchButton}></button>
        </li>
      </ul>
    </div>
  );
};

export default SummonerSearchBar;
