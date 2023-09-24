import SummonerProfile from "@/components/SummonerProfile/SummonerProfile";
import { useRouter } from "next/router";

export default function SearchSummonerProfile() {
  const router = useRouter();
  return <SummonerProfile name={router.query.name as string} />;
}
