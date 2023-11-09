import ClientPage from "./ClientPage";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Summoners",
};

export default async function Page() {
  return <ClientPage />;
}
