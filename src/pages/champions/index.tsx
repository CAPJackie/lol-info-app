import ChampionList from "@/components/ChampionList/ChampionList";
import { Champions } from "@/types/champions";
import { champions } from "@/utils/Constants/champions";

type ChampionsProps = {
  champions: string[];
};

export default function Champions({ champions }: ChampionsProps) {
  return (
    <div className="container">
      <ChampionList {...{ champions }} />
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      champions,
    },
  };
}
