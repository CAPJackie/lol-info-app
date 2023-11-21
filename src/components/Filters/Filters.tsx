"use client";

import { Champions } from "@/types/champions";
import { Options } from "@/types/options";
import { regions } from "@/utils/Constants/game";
import clsx from "clsx";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { FunctionComponent, useState } from "react";
import FilterCriteriaInput from "../FilterCriteriaInput/FilterCriteriaInput";
import SelectInput from "../SelectInput/SelectInput";
import styles from "./Filters.module.scss";

interface FiltersProps {
  champions: Champions;
}

const allRegions: Options = [{ label: "All Regions" }].concat(
  regions.map(({ slug, name }) => ({
    label: name,
    value: slug,
  })),
);

const Filters: FunctionComponent<FiltersProps> = ({ champions }) => {
  const [filterChampion, setFilterChampion] = useState("");
  const [filterPlatform, setFilterPlatform] = useState("");

  const typeOfTopList = useSearchParams()?.get("typeOfTopList") ?? "skillscore";

  const allChampions: Options = [{ label: "All Champions" }].concat(
    champions.map(({ key, name }) => ({
      label: name,
      value: key,
    })),
  );

  return (
    <div className={clsx("row", styles.container)}>
      <div className="col-4">
        <FilterCriteriaInput
          title="Lss Leaderboard"
          href="/top/skillscore"
          titleClassName={clsx({
            [styles.linkHovered]: typeOfTopList === "skillscore",
          })}
        >
          <SelectInput
            options={allChampions}
            onChangeOption={(e) => {
              setFilterChampion(e.target.value);
            }}
          />
        </FilterCriteriaInput>
      </div>
      <div className="col-4">
        <FilterCriteriaInput
          title="Champion Enthusiasts"
          href="/top/mostgames"
          titleClassName={clsx({
            [styles.linkHovered]: typeOfTopList === "mostgames",
          })}
        >
          <SelectInput
            options={allRegions}
            onChangeOption={(e) => {
              setFilterPlatform(e.target.value);
            }}
          />
        </FilterCriteriaInput>
      </div>
      <div className="col-4">
        <FilterCriteriaInput
          title="Champion Masteries"
          href="/top/champion-mastery"
          titleClassName={clsx({
            [styles.linkHovered]: typeOfTopList === "champion-mastery",
          })}
        >
          <Link
            href={`filterChampion=${filterChampion}&filterPlatform=${filterPlatform}`}
            className={styles.link}
          >
            <button className={styles.button} aria-label="Apply">
              Apply
            </button>
          </Link>
        </FilterCriteriaInput>
      </div>
    </div>
  );
};

export default Filters;
