import { BlogsType } from "@/components/BlogList/BlogList";
import Blogs from "@/components/Blogs/Blogs";

export default function ClientPage({ blogs }: BlogsType) {
  return <Blogs {...{ blogs }} />;
}
