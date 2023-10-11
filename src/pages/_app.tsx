import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import "@/styles/globals.scss";
import clsx from "clsx";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const currentPage = router.pathname;
  const isLanding = currentPage === "/";

  const containerClasses = clsx(
    "site",
    { "landing-site": isLanding },
    { "other-sites": !isLanding },
  );

  return (
    <div className={containerClasses}>
      <div>
        <Header />
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}
