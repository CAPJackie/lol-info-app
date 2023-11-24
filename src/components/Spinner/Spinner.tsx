// Spinner.tsx
import React from "react";
import styles from "./Spinner.module.scss";
import clsx from "clsx";

type Props = { className?: string };

const Spinner: React.FC<Props> = ({ className }) => {
  return <div className={clsx(className, styles.spinner)}></div>;
};

export default Spinner;
