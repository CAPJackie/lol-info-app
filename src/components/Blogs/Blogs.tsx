import BlogList, { BlogsType } from "../BlogList/BlogList";
import CreateBlog from "../CreateBlog/CreateBlog";
import styles from "./Blogs.module.scss";

function Blogs({ blogs }: BlogsType) {
  return (
    <div className={styles.blogsContainer}>
      <BlogList {...{ blogs }} />
      <CreateBlog />
    </div>
  );
}

export default Blogs;
