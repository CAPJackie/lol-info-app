import React from "react";
import { Slide } from "react-awesome-reveal";
import { apiStaticUrl } from "../../utils/Constants/urls";
import HashTagList from "../Others/HashTagList";
import InfoCategory from "../Others/InfoCategory";
import "./RenderChampionDetail.css";

const RenderChampionDetail = ({
  id,
  name,
  title,
  blurb,
  info,
  tags,
  version,
}) => {
  const championImageUrl =
    apiStaticUrl.noVersionImg + "/champion/loading/" + id + "_0.jpg";
  return (
    <article className="champion-detail">
      <Slide direction="top" triggerOnce>
        <h2>{name}</h2>
      </Slide>
      <Slide direction="top" triggerOnce>
        <h3>{title}</h3>
      </Slide>
      <Slide direction="top" triggerOnce>
        <p>
          <span>version </span>
          {version}
        </p>
      </Slide>

      <div>
        <Slide direction="right" triggerOnce>
          <div>
            <img alt={`${name} Splash art`} src={championImageUrl} />
            <HashTagList values={tags} />
          </div>
        </Slide>

        <div aria-label="Additional info">
          <Slide direction="right" triggerOnce>
            <p>{blurb}</p>
          </Slide>
          <div>
            <InfoCategory label="attack" value={info.attack} />
            <InfoCategory label="defense" value={info.defense} />
            <InfoCategory label="magic" value={info.magic} />
            <InfoCategory label="difficulty" value={info.difficulty} />
          </div>
        </div>
      </div>
    </article>
  );
};

export default RenderChampionDetail;
