import { FunctionComponent } from "react";
import styles from "./PaginationItem.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import clsx from "clsx";

type PaginationItemProps = {
  numberOfPages: number;
};

const PaginationItem: FunctionComponent<PaginationItemProps> = ({
  numberOfPages,
}) => {
  const router = useRouter();
  const page = router.query.page;
  const length = numberOfPages > 6 ? 6 : numberOfPages;
  const hasThreeDots = length < numberOfPages;
  const createArrayFromNumber = (n: number) =>
    Array.from({ length: n }, (_, i) => i + 1);

  const list = createArrayFromNumber(length);

  return (
    <ul className={styles.container}>
      {list.map((val) => (
        <Link
          href={`/top/skillscore?page=${val}`}
          key={val}
          className={clsx(styles.item, styles.clickable)}
        >
          {val}
        </Link>
      ))}
      {hasThreeDots && <div className={styles.item}>...</div>}
      <Link
        href={`/top/skillscore?page=${Number(page) + 1}`}
        className={clsx(styles.item, styles.clickable)}
      >
        Next »
      </Link>
    </ul>
  );
};

export default PaginationItem;
