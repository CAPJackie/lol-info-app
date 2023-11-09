import ClientPage from "./ClientPage";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tier List",
};

export default async function Page() {
  return <ClientPage />;
}
