import TopList from "@/components/TopList/TopList";
import { Champions } from "@/types/champions";
import { SummonerInfo } from "@/types/summonerInfo";
import { apiStaticUrl } from "@/utils/Constants/urls";
import { fetchSummonersTopList } from "@/utils/fetchSummonersTopList";

interface TopProps {
  champions: Champions;
  summonersList: SummonerInfo[];
}

export default function Top({ champions,summonersList }: TopProps) {
  return (
    <div className="container">
      <TopList {...{ champions, summonersList }} />
    </div>
  );
}

export async function getStaticProps() {
  const resChampions = await fetch(apiStaticUrl.data + "/champion.json");
  const dataChampions = await resChampions.json();

  return {
    props: {
      champions: Object.values(dataChampions.data) as Champions,
      summonersList: fetchSummonersTopList()
    },
  };
}
