import { Router } from "@reach/router";
import React, { FunctionComponent, lazy, Suspense } from "react";
import Home from "../Home/Home";
import Loading from "../Loading/Loading";

const ChampionList = lazy(() => import("./ChampionList"));
const TopTierList = lazy(() => import("./TopTierList"));
const Search = lazy(() => import("../Search/Search"));
const SummonerProfile = lazy(
  () => import("../SummonerProfile/SummonerProfile")
);
const ChampionDetail = lazy(() => import("./ChampionDetail"));

const Content: FunctionComponent = () => {
  return (
    <article>
      <Suspense fallback={<Loading name="Suspense stuff" />}>
        <Router>
          <Home path="/" />
          <ChampionList path="champions" />
          <TopTierList path="tierList" />
          <Search path="search">
            <SummonerProfile path="summoners/:name" />
          </Search>
          <SummonerProfile path="summoners/:name" />
          <ChampionDetail path="champion/:id" />
        </Router>
      </Suspense>
    </article>
  );
};

export default Content;
