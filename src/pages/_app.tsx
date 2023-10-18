import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const currentPage = router.pathname;
  const isLanding = currentPage === "/";

  return (
    <div className={"site"}>
      <Head>
        <style>
          {isLanding
            ? `body {
              background-image: url(https://cdn.lolskill.net/img/background_landing.jpg);
              background-position: top center;
              background-repeat: no-repeat;
              background-size: auto;
            } `
            : `body {
              background-attachment: fixed;
              background-image: url(https://cdn.lolskill.net/img/background.jpg);
              background-position: top center;
              background-repeat: no-repeat;
              background-size: auto;
            }`}
        </style>
      </Head>
      <div>
        <Header />
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}
