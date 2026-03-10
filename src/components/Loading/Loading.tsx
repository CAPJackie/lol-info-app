import { CircularProgress } from "@mui/material";
import { FunctionComponent } from "react";
import styles from "./Loading.module.scss";

interface IProps {
  name: string;
}
const Loading: FunctionComponent<IProps> = ({ name }) => (
  <div className={styles.loading}>
    <CircularProgress color="secondary" />
    <p>loading {name}</p>
  </div>
);

export default Loading;
