import ChampionList from "@/components/ChampionList/ChampionList";
import { Champions } from "@/types/champions";
import { apiStaticUrl } from "@/utils/Constants/urls";

type ChampionsProps = {
  champions: Champions;
};

export default function Champions({ champions }: ChampionsProps) {
  return (
    <div className="container">
      <ChampionList {...{ champions }} />
    </div>
  );
}

export async function getStaticProps() {
  const resChampions = await fetch(apiStaticUrl.data + "/champion.json");
  const dataChampions = await resChampions.json();

  return {
    props: {
      champions: Object.values(dataChampions.data) as Champions,
    },
  };
}
