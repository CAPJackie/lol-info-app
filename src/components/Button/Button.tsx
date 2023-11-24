import { FunctionComponent, MouseEventHandler } from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  children: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  name: string;
}

export const Button: FunctionComponent<ButtonProps> = ({
  children,
  onClick,
}) => {
  return (
    <button className={styles.button} {...onClick} aria-label={children}>
      {children}
    </button>
  );
};

export default Button;
