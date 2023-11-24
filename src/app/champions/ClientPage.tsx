import clsx from "clsx";
import styles from "./styles.module.css";
import BestChampions from "@/components/BestChampions/BestChampions";
import ChampionsListDetail from "@/components/ChampionsListDetail/ChampionsListDetail";
import { champions } from "@/utils/Constants/champions";
import { Suspense } from "react";
import BestChampionsSkeleton from "@/components/BestChampions/BestChampionsSkeleton";


async function getChampions() {
  return champions
}

export default async function Champions() {
  const champions = await getChampions();

  return (
    <section className="container">
      <h2 className={clsx("row", styles.title)}>Champions</h2>
      <div className={clsx("row", styles.stats)}>
        <Suspense fallback={<BestChampionsSkeleton />}>
          <BestChampions />
        </Suspense>
      </div>
      <div className={clsx("row", styles.champions)}>
        <ChampionsListDetail champions={champions} />
      </div>
    </section>
  );
}
