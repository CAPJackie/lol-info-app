import { BlogType } from "@/components/BlogList/BlogList";
import { kv } from "@vercel/kv";
import ClientPage from "./ClientPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
};

async function getBlogs(): Promise<BlogType[] | null> {
  if (!process.env.KV_REST_API_URL || !process.env.KV_REST_API_TOKEN) {
    return [];
  }

  try {
    const blogs = kv.get("blogs") as Promise<BlogType[]>;
    return blogs;
  } catch {
    return [];
  }
}

export default async function Blog() {
  let blogs = (await getBlogs()) || [];
  if (Object.keys(blogs).length === 0) {
    blogs = [];
  }

  // throw Error("You're throwing an intentional error");
  return <ClientPage {...{ blogs }} />;
}
