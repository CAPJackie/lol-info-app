import ChampionDetail from "@/components/Others/ChampionDetail";
import { useSearchParams } from "next/navigation";

export default function ChampionDetailById() {
  return <ChampionDetail id={useSearchParams().get("id") as string} />;
}
