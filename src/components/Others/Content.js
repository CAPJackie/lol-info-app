import React, { lazy, Suspense } from "react";
import { Router } from "@reach/router";

import Home from "../Home/Home";
import Loading from "../Loading/Loading";

const ChampionList = lazy(() => import("./ChampionList")),
  TopTierList = lazy(() => import("./TopTierList")),
  Search = lazy(() => import("../Search/Search")),
  SummonerProfile = lazy(() => import("../SummonerProfile/SummonerProfile")),
  ChampionDetail = lazy(() => import("./ChampionDetail"));

const Content = () => {
  return (
    <article>
      <Suspense fallback={<Loading name="Suspense stuff" />}>
        <Router>
          <Home exact path="/" />
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
