"use client";

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { Analytics } from "@vercel/analytics/react";
import clsx from "clsx";
import { usePathname } from "next/navigation";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isLanding = usePathname() === "/";
  return (
    <body className={clsx(isLanding ? "landing-site" : "other-sites")}>
      <div className={"site"}>
        <div>
          <Header />
          {children}
        </div>
        <Footer />
      </div>
      <Analytics />
    </body>
  );
}
