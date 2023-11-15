import ChampionList from "@/components/ChampionList/ChampionList";
import { champions } from "@/utils/Constants/champions";

async function getChampions() {
  return champions;
}

export default async function Page() {
  const champions = await getChampions();
  return (
    <div className="container">
      <ChampionList {...{ champions }} />
    </div>
  );
}
