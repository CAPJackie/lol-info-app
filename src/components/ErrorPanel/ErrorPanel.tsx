import Image from "next/image";
import { FunctionComponent } from "react";
import sadTeemo from "../../../public/images/sadTeemo.gif";
import { Error } from "../../types/commonTypes";
import styles from "./ErrorPanel.module.scss";

// TODO Check if this is the structure of the response error
const ErrorPanel: FunctionComponent<{ error: Error }> = ({
  error: {
    status,
    data: { message },
  },
}) => {
  return (
    <div className={styles.container}>
      <div>
        <h2>Error:</h2>
        <p>{status}</p>
      </div>
      <p>{message}</p>
      <Image alt="Animated error" src={sadTeemo} width={50} height={50} />
    </div>
  );
};

export default ErrorPanel;
