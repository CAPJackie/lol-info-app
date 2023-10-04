import { FunctionComponent } from "react";
import styles from "./ListWithPagination.module.scss";
import PaginationItem from "../PaginationItem/PaginationItem";

type ListWithPaginationProps = {
  children: JSX.Element;
  numberOfPages: number;
};

const ListWithPagination: FunctionComponent<ListWithPaginationProps> = ({
  children,
  numberOfPages,
}) => {
  return (
    <div className={styles.container}>
      <PaginationItem {...{ numberOfPages }} />
      <div>{children}</div>
      <PaginationItem {...{ numberOfPages }} />
    </div>
  );
};

export default ListWithPagination;
