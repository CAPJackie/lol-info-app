"use client";

import { RegionKey, RegionObject } from "@/types/regions";
import { regions } from "@/utils/Constants/game";
import clsx from "clsx";
import {
  ChangeEventHandler,
  FunctionComponent,
  MouseEventHandler,
  useState,
} from "react";
import styles from "./SummonerSearchBar.module.scss";

const euw = regions.find(({ slug }) => slug === RegionKey.EUW) as RegionObject;

type SummonerSearchBarProps = {
  classes?: string;
};

const SummonerSearchBar: FunctionComponent<SummonerSearchBarProps> = ({
  classes,
}) => {
  const [summonerName, setSummonerName] = useState("");
  const [menuRegionIsOpen, setMenuRegionIsOpen] = useState(false);
  const [currentRegion, setCurrentRegion] = useState<RegionObject>(euw);
  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSummonerName(event.target.value);
  };

  const onClick: MouseEventHandler<HTMLButtonElement> = () => {
    setMenuRegionIsOpen(!menuRegionIsOpen);
  };
  return (
    <div className={clsx(styles.searchBar, classes)}>
      <ul className={styles.searchBarList}>
        <li className={styles.input}>
          <div className={styles.nameInputContainer}>
            <input
              type="text"
              placeholder="Summoner name..."
              {...{ onChange }}
              value={summonerName}
              className={styles.summonerNameInput}
            />
          </div>
          <button
            type="button"
            {...{ onClick }}
            className={styles.regionSelector}
          >{` ${currentRegion.slug} `}</button>
        </li>
        <button type="submit" className={styles.searchButton}></button>
      </ul>
    </div>
  );
};

export default SummonerSearchBar;
