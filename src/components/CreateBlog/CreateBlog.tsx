"use client";

import { useFormState, useFormStatus } from "react-dom";
import styles from "./CreateBlog.module.scss";
import { createBlog } from "@/actions";
import Spinner from "../Spinner/Spinner";

const initialState = {
  message: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className={styles.btnSubmit}
      aria-label="Create Post"
      aria-disabled={pending}
    >
      <p>Create Post</p>
      {pending && <Spinner className={styles.spinner} />}
    </button>
  );
}

const CreateBlog = () => {
  const [state, formAction] = useFormState(createBlog, initialState);
  return (
    <form action={formAction} className={styles.newPostForm}>
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
      <SubmitButton />
      <p>{state?.message}</p>
    </form>
  );
};

export default CreateBlog;
