import React from "react";
import styles from "./BlogList.module.scss";

export type BlogsType = {
  blogs: BlogType[];
};

export type BlogType = {
  title: string;
  summary: string;
};

const BlogList = ({ blogs }: BlogsType) => {
  return (
    <div className={styles.blogList}>
      {blogs.map((blog, index) => (
        <div key={index} className={styles.blogItem}>
          <h3>{blog.title}</h3>
          <p>{blog.summary}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
