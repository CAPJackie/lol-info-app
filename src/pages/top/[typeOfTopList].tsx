import TopList from "@/components/TopList/TopList";
import { Champions } from "@/types/champions";
import { Filters } from "@/enums/filters";
import { apiStaticUrl } from "@/utils/Constants/urls";

type Props = {
  champions: Champions;
};

export default function TypeOfList({ champions }: Props) {
  return (
    <div className="container">
      <TopList {...{ champions }} />
    </div>
  );
}

export async function getStaticPaths() {
  const paths = Object.values(Filters);
  return {
    paths: paths.map((path) => `/top/${path}`),
    fallback: false,
  };
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
