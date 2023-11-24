import TopList from "@/components/TopList/TopList";
import { Champions } from "@/types/champions";
import { SummonerInfo } from "@/types/summonerInfo";

type Props = {
  champions: Champions;
  summonersList: SummonerInfo[];
};

export default function TypeOfList({ champions, summonersList }: Props) {
  return (
    <div className="container">
      <TopList {...{ champions, summonersList }} />
    </div>
  );
}
