import ChampionList from "@/components/ChampionList/ChampionList";
import { champions } from "@/utils/Constants/champions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Champions",
};
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
