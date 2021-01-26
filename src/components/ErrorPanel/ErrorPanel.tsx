import { AxiosResponse } from "axios";
import React, { FunctionComponent } from "react";
import sadTeemo from "../../../public/images/sadTeemo.gif";
import { Error } from "../../types/commonTypes";
import "./ErrorPanel.css";

// TODO Check if this is the structure of the response error
const ErrorPanel: FunctionComponent<{ error: Error }> = ({
  error: {
    status,
    data: { message },
  },
}) => {
  return (
    <div className="error-panel-container">
      <div>
        <h2>Error:</h2>
        <p>{status}</p>
      </div>
      <p>{message}</p>
      <img alt="Animated error" src={sadTeemo} />
    </div>
  );
};

export default ErrorPanel;
