import React, { FunctionComponent } from "react";
import { Slide } from "react-awesome-reveal";
import { IChampion } from "../../types/commonTypes";
import { apiStaticUrl } from "../../utils/Constants/urls";
import styles from "./RenderChampionDetail.module.css";
import Image from "next/image";
import HashTagList from "../Others/HashTagList";
import InfoCategory from "../Others/InfoCategory";

const RenderChampionDetail: FunctionComponent<IChampion> = ({
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
    <article className={styles.container}>
      <Slide direction="up" triggerOnce={true}>
        <h2>{name}</h2>
      </Slide>
      <Slide direction="up" triggerOnce={true}>
        <h3>{title}</h3>
      </Slide>
      <Slide direction="up" triggerOnce={true}>
        <p>
          <span>version </span>
          {version}
        </p>
      </Slide>

      <div>
        <Slide direction="right" triggerOnce={true}>
          <div>
            <Image
              alt={`${name} Splash art`}
              src={championImageUrl}
              width={100}
              height={100}
            />
            <HashTagList values={tags} />
          </div>
        </Slide>

        <div aria-label="Additional info">
          <Slide direction="right" triggerOnce={true}>
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
