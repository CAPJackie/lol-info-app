"use client";

import Search from "@/components/Search/Search";
import SummonerProfile from "@/components/SummonerProfile/SummonerProfile";
import { useSearchParams } from "next/navigation";

export default function Page() {
  return (
    <>
      <Search />
      <SummonerProfile name={useSearchParams().get("name") as string} />
    </>
  );
}
