"use server";

import { apiUrl } from "@/utils/Constants/urls";
import { concatApiKey } from "@/utils/api";
import { kv } from "@vercel/kv";
import { BlogType } from "./components/BlogList/BlogList";
import { revalidatePath } from "next/cache";

export async function createBlog(prevState: any, formData: FormData) {
  const blogsKey = "blogs";

  try {
    let blogs = (await kv.get<BlogType[]>(blogsKey)) || [];
    if (Object.keys(blogs).length === 0) {
      blogs = [];
    }

    const blog: BlogType = {
      title: String(formData.get("title")),
      summary: String(formData.get("summary")),
    };

    blogs.push(blog);

    await kv.set<BlogType[]>(blogsKey, blogs);

    revalidatePath("/blog");
    return { message: "New Blog Added" };
  } catch {
    return { message: "Failed to add a blog" };
  }
}

export async function callApiAction() {
  const response = await fetch(
    apiUrl + "/platform/v3/champion-rotations" + concatApiKey("?"),
  );
  console.log(await response.json());
}
