"use client";

import { Metadata } from "next";
import SummonerProfile from "@/components/SummonerProfile/SummonerProfile";
import { Metadata } from "next";
import { useSearchParams } from "next/navigation";

export const metadata: Metadata = {
  title: "Summoners",
};

export default function Page() {
  return <SummonerProfile name={useSearchParams().get("name") as string} />;
}
