import { Filters } from "@/enums/filters";
import { Champions } from "@/types/champions";
import { apiStaticUrl } from "@/utils/Constants/urls";
import { fetchSummonersTopList } from "@/utils/fetchSummonersTopList";
import ClientPage from "./ClientPage";

export async function generateStaticParams() {
  const paths = Object.values(Filters);
  return paths.map((path) => ({
    id: path,
  }));
}

async function getChampionsAndSummonersList() {
  const resChampions = await fetch(apiStaticUrl.data + "/champion.json");
  const dataChampions = await resChampions.json();
  return {
    champions: Object.values(dataChampions.data) as Champions,
    summonersList: fetchSummonersTopList(),
  };
}

export default async function Page() {
  const props = await getChampionsAndSummonersList();
  return <ClientPage {...props} />;
}
