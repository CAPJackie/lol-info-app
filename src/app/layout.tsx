import clsx from "clsx";
import { useRouter } from "next/router";
import ClientLayout from "./ClientLayout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const currentPage = router.pathname;
  const isLanding = currentPage === "/";
  return (
    <html lang="en">
      <body className={clsx(isLanding ? "landing-site" : "other-sites")}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
