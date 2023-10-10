import ChampionDetail from "@/components/Others/ChampionDetail";
import { useRouter } from "next/router";

export default function ChampionDetailById() {
  const router = useRouter();
  return <ChampionDetail id={router.query.id as string} />;
}
