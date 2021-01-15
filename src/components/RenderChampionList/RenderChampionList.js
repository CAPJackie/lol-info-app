import React from "react";
import { Slide } from "react-awesome-reveal";
import { apiStaticUrl } from "../../utils/Constants/urls";
import Champion from "../Others/Champion";
import "./RenderChampionList.css";

const apiStaticUrlImg = apiStaticUrl.img + "/champion";

const RenderChampionList = ({ champions }) => {
  const getChampionList = () => {
    var championList = Object.keys(champions).map(key => (
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
      <Slide direction="down" triggerOnce>
        <h2 aria-label="Champions">champions</h2>
      </Slide>

      <Slide direction="up" triggerOnce>
        <ul aria-label="List of champions" className="champions-container">
          {getChampionList()}
        </ul>
      </Slide>
    </section>
  );
};

export default RenderChampionList;
