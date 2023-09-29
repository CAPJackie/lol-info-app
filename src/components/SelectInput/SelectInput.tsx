import { ChangeEventHandler, FunctionComponent } from "react";
import styles from "./SelectInput.module.scss";
import clsx from "clsx";
import { Options } from "@/types/options";

interface SelectInputProps {
  options: Options;
  onChangeOption: ChangeEventHandler<HTMLSelectElement>;
}

const SelectInput: FunctionComponent<SelectInputProps> = ({
  options,
  onChangeOption,
}) => {
  return (
    <select
      className={clsx("form-control", styles.select)}
      onChange={onChangeOption}
    >
      {options.map(({ label, value }) => (
        <option className={styles.option} key={label} {...{ value }}>
          {label}
        </option>
      ))}
    </select>
  );
};

export default SelectInput;
