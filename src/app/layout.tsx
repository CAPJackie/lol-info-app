import "@/styles/globals.scss";
import clsx from "clsx";
import { headers } from "next/headers";
import ClientLayout from "./ClientLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "LoL Skill",
    template: "%s | LoL Skill",
  },
  description:
    "LoLSkill brings you real-time updates on League of Legends champions and toplists from servers worldwide. Dive into the rich world of LoL with our blog section, featuring community contributions and expert insights. Stay connected with live streams, and never miss a play with our intuitive home page.",
  keywords: [
    "League of Legends",
    "LoL Champions",
    "Game Streams",
    "LoL Toplists",
    "Gaming Blog",
    "eSports",
    "Live Gaming",
  ],
  generator: "Next.js",
  applicationName: "LoLSkill",
  referrer: "origin-when-cross-origin",
  authors: [
    { name: "Juan Ramirez", url: "https://capjackie.github.io/" },
    { name: "Miguel Morales" },
  ],
  creator: "Juan Ramirez",
  publisher: "Juan Ramirez",
  formatDetection: {
    address: true,
    date: false,
    email: false,
    telephone: true,
  },
  openGraph: {
    title: "LoLSkill",
    description:
      "LoLSkill brings you real-time updates on League of Legends champions and toplists from servers worldwide. Dive into the rich world of LoL with our blog section, featuring community contributions and expert insights. Stay connected with live streams, and never miss a play with our intuitive home page.",
    url: "https://lol-info-app.vercel.app/",
    siteName: "LoLSkill",
    // images: [
    //   {
    //     url: "https://nextjs.org/og.png",
    //     width: 800,
    //     height: 600,
    //   },
    //   {
    //     url: "https://nextjs.org/og-alt.png",
    //     width: 1800,
    //     height: 1600,
    //     alt: "My custom alt",
    //   },
    // ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // icons: {
  //   icon: "/icon.png",
  //   shortcut: "/shortcut-icon.png",
  //   apple: "/apple-icon.png",
  //   other: {
  //     rel: "apple-touch-icon-precomposed",
  //     url: "/apple-touch-icon-precomposed.png",
  //   },
  // },
  // manifest: "https://nextjs.org/manifest.json",
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Next.js",
  //   description: "The React Framework for the Web",
  //   siteId: "1467726470533754880",
  //   creator: "@nextjs",
  //   creatorId: "1467726470533754880",
  //   images: ["https://nextjs.org/og.png"],
  // },
  // verification: {
  //   google: "google",
  //   yandex: "yandex",
  //   yahoo: "yahoo",
  //   other: {
  //     me: ["my-email", "my-link"],
  //   },
  // },
  category: "videogames",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = headers();
  const pathname = headersList.get("x-pathname") || "";
  const isLanding = pathname === "/";
  return (
    <html lang="en">
      <body className={clsx(isLanding ? "landing-site" : "other-sites")}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
