import TopList from "@/components/TopList/TopList";
import { ChampionFilters } from "@/types/champions";
import { apiStaticUrl } from "@/utils/Constants/urls";

interface TopProps {
  champions: ChampionFilters;
}

export default function Top({ champions }: TopProps) {
  return (
    <div className="container">
      <TopList {...{ champions }} />
    </div>
  );
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
