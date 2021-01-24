import React, { FunctionComponent, memo } from "react";
import { Slide } from "react-awesome-reveal";
import { ChampionsMap } from "../../types/commonTypes";
import { apiStaticUrl } from "../../utils/Constants/urls";
import Champion from "../Others/Champion";
import "./RenderChampionList.css";

const apiStaticUrlImg = apiStaticUrl.img + "/champion";

interface IProps {
  champions: ChampionsMap;
}

const RenderChampionList: FunctionComponent<IProps> = ({ champions }) => {
  const getChampionList = () => {
    const championList = Object.keys(champions).map((key) => (
      <li key={key} className="champions-item" aria-label={champions[key].name}>
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
    <section className="page-wrapper">
      <Slide direction="down" triggerOnce={true}>
        <h2 aria-label="Champions">champions</h2>
      </Slide>

      <ul aria-label="List of champions" className="champions-container">
        {getChampionList()}
      </ul>
    </section>
  );
};

export default memo(RenderChampionList);
