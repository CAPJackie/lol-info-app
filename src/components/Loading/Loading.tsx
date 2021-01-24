import React, { FunctionComponent } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import "./Loading.css";

interface IProps {
  name: string;
}
const Loading: FunctionComponent<IProps> = ({ name }) => (
  <div className="loading-container">
    <CircularProgress color="secondary" />
    <p>loading {name}</p>
  </div>
);

export default Loading;
