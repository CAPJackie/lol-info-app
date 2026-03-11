"use client";

import { useState } from "react";
import ChampionCard from "../ChampionCard/ChampionCard";
import styles from "./ChampionsListDetail.module.scss";

const PAGE_SIZE = 20;

type ChampionsListDetailProps = {
  champions: string[];
};

const ChampionsListDetail = ({ champions }: ChampionsListDetailProps) => {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const visible = champions.slice(0, visibleCount);
  const remaining = champions.length - visibleCount;

  return (
    <>
      <ul className={styles.list}>
        {visible.map((championName) => (
          <li key={championName} className={styles.item}>
            <ChampionCard {...{ championName }} />
          </li>
        ))}
      </ul>
      {remaining > 0 && (
        <button className={styles.loadMore} onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}>
          Load More ({remaining} remaining)
        </button>
      )}
    </>
  );
};

export default ChampionsListDetail;
