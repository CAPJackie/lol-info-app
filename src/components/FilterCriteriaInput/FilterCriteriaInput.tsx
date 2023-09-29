import { FunctionComponent } from "react";
import styles from "./FilterCriteriaInput.module.scss";
import Link from "next/link";
import clsx from "clsx";

interface FilterCriteriaInputProps {
  title: string;
  children: JSX.Element;
  href: string;
  titleClassName?: string;
}

const FilterCriteriaInput: FunctionComponent<FilterCriteriaInputProps> = ({
  title,
  children,
  href,
  titleClassName,
}) => {
  return (
    <div className={clsx(styles.container)}>
      <Link {...{ href }} className={clsx(styles.title, titleClassName)}>
        {title}
      </Link>
      {children}
    </div>
  );
};

export default FilterCriteriaInput;
