import { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: "Summoners",
};

export default function Page() {
  return <ClientPage />;
}
