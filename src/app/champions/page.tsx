import { champions } from "@/utils/Constants/champions";
import ClientPage from "./ClientPage";

async function getChampions() {
  return champions;
}

export default async function Page() {
  const champions = await getChampions();
  return <ClientPage {...{ champions }} />;
}
