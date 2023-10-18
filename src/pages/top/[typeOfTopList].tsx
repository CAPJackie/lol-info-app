import TopList from "@/components/TopList/TopList";
import { Filters } from "@/enums/filters";
import { Champions } from "@/types/champions";
import { SummonerInfo } from "@/types/summonerInfo";
import { apiStaticUrl } from "@/utils/Constants/urls";
import { fetchSummonersTopList } from "@/utils/fetchSummonersTopList";

type Props = {
  champions: Champions;
  summonersList: SummonerInfo[]
};

export default function TypeOfList({ champions,summonersList }: Props) {
  return (
    <div className="container">
      <TopList {...{ champions,summonersList }} />
    </div>
  );
}

export async function getStaticPaths() {
  const paths = Object.values(Filters);
  return {
    paths: paths.map((path) => `/top/${path}`),
    fallback: false,
  };
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
