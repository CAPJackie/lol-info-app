import { FunctionComponent } from "react";

import styles from "./BlogEntryPreview.module.scss";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";

type BlogEntryPreviewProps = {
  name: string;
  description: string;
  classes: string;
  number: number;
};

const BlogEntryPreview: FunctionComponent<BlogEntryPreviewProps> = ({
  name,
  description,
  classes,
  number,
}) => {
  return (
    <div className={clsx(classes, styles.container)}>
      <div className={styles.entity}>
        <Link
          href={`/blog/champion-preview-${name}`}
          className={styles.championLink}
        >
          <Image
            alt="champion illustration"
            src={`https://cdn.lolskill.net/entity/${number}/header.jpg`}
            width={730}
            height={300}
            className={styles.img}
          />
          <h5 className={styles.h5}>Champion Preview: {name}</h5>
        </Link>
        <div className={styles.description}>
          <p className={styles.p}>{description}</p>
          <br />
          <p className={styles.p}>
            Check out her champion page to find out everything about her
            abilities, damage ratios and more.
          </p>
          <br />
          <Link href={`/champion/${name}`} className={styles.link}>
            View Champion Page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogEntryPreview;
