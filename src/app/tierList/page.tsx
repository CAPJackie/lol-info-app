import { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: "Tier List",
};

export default function Page() {
  return <ClientPage />;
}
