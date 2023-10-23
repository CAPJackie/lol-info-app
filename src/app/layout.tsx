import "@/styles/globals.scss";
import clsx from "clsx";
import { headers } from "next/headers";
import ClientLayout from "./ClientLayout";

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
