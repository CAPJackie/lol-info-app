import TopList from "@/components/TopList/TopList";
import { ChampionFilters } from "@/types/champions";
import { Filters } from "@/enums/filters";
import { apiStaticUrl } from "@/utils/Constants/urls";

type Props = {
  champions: ChampionFilters;
};

export default function TypeOfList({ champions }: Props) {
  return (
    <div className="container">
      <TopList {...{ champions }} />
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
  const championsData = dataChampions.data as Record<string, { key: string; name: string }>;

  return {
    props: {
      champions: Object.values(championsData).map((champion) => ({
        key: champion.key,
        name: champion.name,
      })) as ChampionFilters,
    },
  };
}
