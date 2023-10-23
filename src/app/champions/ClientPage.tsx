import ChampionList from "@/components/ChampionList/ChampionList";

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
