import { FunctionComponent, MouseEventHandler } from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  children: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export const Button: FunctionComponent<ButtonProps> = ({
  children,
  onClick,
}) => {
  return (
    <button className={styles.button} {...onClick}>
      {children}
    </button>
  );
};

export default Button;
