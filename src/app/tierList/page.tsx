"use client"

import { Metadata } from "next";
import TopTierList from "@/components/Others/TopTierList";

export const metadata: Metadata = {
  title: "Tier List",
};

export default function Page() {
  return <TopTierList />;
}
