import getPaginationListConfig from "@/utils/getPaginationListConfig";
import clsx from "clsx";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { FunctionComponent } from "react";
import styles from "./PaginationItem.module.scss";

type PaginationItemProps = {
  numberOfPages: number;
};

const PaginationItem: FunctionComponent<PaginationItemProps> = ({
  numberOfPages,
}) => {
  var { list, page, range } = getPaginationListConfig(
    numberOfPages,
    useSearchParams().get("page") as string,
  );

  return (
    <ul className={styles.container}>
      {list.map((val) => (
        <Link
          href={`/top/skillscore?page=${val}`}
          key={val}
          className={clsx(styles.item, styles.clickable, {
            [styles.active]: val === page,
          })}
        >
          {val}
        </Link>
      ))}
      {page + range < numberOfPages && <div className={styles.item}>...</div>}
      {page < numberOfPages && (
        <Link
          href={`/top/skillscore?page=${Number(page) + 1}`}
          className={clsx(styles.item, styles.clickable)}
        >
          Next »
        </Link>
      )}
    </ul>
  );
};

export default PaginationItem;
