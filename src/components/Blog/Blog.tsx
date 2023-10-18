import { FunctionComponent } from "react";
import styles from "./Blog.module.scss";
import Link from "next/link";
import BlogEntryPreview from "../BlogEntryPreview/BlogEntryPreview";

const Blog: FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.h2}>Blog</h2>
      <div className="row">
        <div className="col-8">
          <div className="row">
            <BlogEntryPreview
              name="zoe"
              description="The Aspect of Twilight has been revealed!"
              classes={"col-12"}
              number={483}
            />
            <BlogEntryPreview
              name="ornn"
              description="The Fire below the Mountain has been revealed!"
              classes={"col-12"}
              number={477}
            />
          </div>
          <div className={styles.buttonContainer}>
            <Link href="blog" className={styles.button}>
              View All
            </Link>
          </div>
        </div>
        <div className="col-4"></div>
      </div>
    </div>
  );
};

export default Blog;
