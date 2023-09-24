import { FunctionComponent, memo } from "react";
import { Slide } from "react-awesome-reveal";
import { ChampionsMap } from "../../types/commonTypes";
import { apiStaticUrl } from "../../utils/Constants/urls";
import styles from "./RenderChampionList.module.css";
import Champion from "../Others/Champion";

const apiStaticUrlImg = apiStaticUrl.img + "/champion";

interface IProps {
  champions: ChampionsMap;
}

const RenderChampionList: FunctionComponent<IProps> = ({ champions }) => {
  const getChampionList = () => {
    const championList = Object.keys(champions).map((key) => (
      <li key={key}  aria-label={champions[key].name}>
        <Champion
          name={champions[key].name}
          image={`${apiStaticUrlImg}/${champions[key].image.full}`}
          nameKey={champions[key].id}
        />
      </li>
    ));
    return championList;
  };

  return (
    <section >
      <Slide direction="down" triggerOnce={true}>
        <h2 aria-label="Champions">champions</h2>
      </Slide>

      <ul aria-label="List of champions" className={styles.championsContainer}>
        {getChampionList()}
      </ul>
    </section>
  );
};

export default memo(RenderChampionList);
