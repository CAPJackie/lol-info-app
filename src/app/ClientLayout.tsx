"use client";

import Spinner from "@/components/Spinner/Spinner";
import { Analytics } from "@vercel/analytics/react";
import clsx from "clsx";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";

const Header = dynamic(() => import("@/components/Header/Header"), {
  loading: () => <Spinner />,
});

const Footer = dynamic(() => import("@/components/Footer/Footer"), {
  loading: () => <Spinner />,
});

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
