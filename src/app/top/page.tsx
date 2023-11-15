import TopList from "@/components/TopList/TopList";
import { Filters } from "@/enums/filters";
import { Champions } from "@/types/champions";
import { apiStaticUrl } from "@/utils/Constants/urls";
import { fetchSummonersTopList } from "@/utils/fetchSummonersTopList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top List",
};

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
  const { champions, summonersList } = await getChampionsAndSummonersList();
  return (
    <div className="container">
      <TopList {...{ champions, summonersList }} />
    </div>
  );
}
