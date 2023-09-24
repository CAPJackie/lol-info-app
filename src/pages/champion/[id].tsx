import ChampionDetail from "@/components/Others/ChampionDetail";
import { useRouter } from "next/router";

export default function ChampionDetailById() {
  const router = useRouter();
  console.log(router.query.id);
  return <ChampionDetail id={router.query.id as string} />;
}
