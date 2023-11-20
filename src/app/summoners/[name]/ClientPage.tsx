"use client"

import SummonerProfile from "@/components/SummonerProfile/SummonerProfile";
import { useSearchParams } from "next/navigation";

export default function ClientPage() {
  return <SummonerProfile name={useSearchParams().get("name") as string} />;
}
