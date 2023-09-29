import TopList from "@/components/TopList/TopList";
import { Champions } from "@/types/champions";
import { apiStaticUrl } from "@/utils/Constants/urls";

interface TopProps {
  champions: Champions;
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

  return {
    props: {
      champions: Object.values(dataChampions.data) as Champions,
    },
  };
}
