import { AxiosError } from "axios";
import React, { FunctionComponent } from "react";
import sadTeemo from "../../../public/images/sadTeemo.gif";
import "./ErrorPanel.css";

// TODO Check if this is the structure of the response error
interface IError {
  error?: {
    status?: number;
    data?: {
      status: {
        message: string;
      };
    };
  };
}

const ErrorPanel: FunctionComponent<IError> = ({ error }) => {
  return (
    <div className="error-panel-container">
      <div>
        <h2>Error:</h2>
        <p>{error ? error.status : 500}</p>
      </div>
      <p>
        {error && error.data
          ? error.data.status.message
          : "There's an unexpected error"}
      </p>
      <img alt="Animated error" src={sadTeemo} />
    </div>
  );
};

export default ErrorPanel;
