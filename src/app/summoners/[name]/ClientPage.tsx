import SummonerProfile from "@/components/SummonerProfile/SummonerProfile";
import { useSearchParams } from "next/navigation";

export default function SearchSummonerProfile() {
  return <SummonerProfile name={useSearchParams().get("name") as string} />;
}
