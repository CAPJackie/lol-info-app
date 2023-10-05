import { FunctionComponent } from "react";
import styles from "./SkillScore.module.scss";
type SkillScoreProps = {
  lssScore: number;
};

const SkillScore: FunctionComponent<SkillScoreProps> = ({ lssScore }) => {
  return (
    <div className={styles.container}>
      <p className={styles.score}>{lssScore}</p>
      <p className={styles.lss}>LSS</p>
    </div>
  );
};

export default SkillScore;
