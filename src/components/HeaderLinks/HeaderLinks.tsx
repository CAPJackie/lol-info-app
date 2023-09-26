import Link from "next/link";
import { FunctionComponent } from "react";

import styles from "./HeaderLinks.module.scss";
const HeaderLinks: FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <Link href="/top">toplists</Link>
      <Link href="/champions">champions</Link>
      <Link href="/streams">streams</Link>
      <Link href="/live-matches">live matches</Link>
      <Link href="/blog">blog</Link>
    </div>
  );
};

export default HeaderLinks;
