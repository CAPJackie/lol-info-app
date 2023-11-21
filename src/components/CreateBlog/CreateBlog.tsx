import styles from "./CreateBlog.module.scss";
import { createBlog } from "@/actions";

const CreateBlog = () => {
  return (
    <form action={createBlog} className={styles.newPostForm}>
      <div className={styles.formGroup}>
        <label htmlFor="post-title">Title</label>
        <input
          type="text"
          id="post-title"
          name="title"
          className={styles.formControl}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="post-content">Content</label>
        <textarea
          id="post-content"
          name="summary"
          className={styles.formControl}
          required
        />
      </div>
      <button
        type="submit"
        className={styles.btnSubmit}
        aria-label="Create Post"
      >
        Create Post
      </button>
    </form>
  );
};

export default CreateBlog;
