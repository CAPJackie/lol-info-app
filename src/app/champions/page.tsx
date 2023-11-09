import { champions } from "@/utils/Constants/champions";
import ClientPage from "./ClientPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Champions",
};

async function getChampions() {
  return champions;
}

export default async function Page() {
  const champions = await getChampions();
  return <ClientPage {...{ champions }} />;
}
