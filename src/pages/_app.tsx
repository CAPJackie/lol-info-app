import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="site">
      <div>
        <Header />
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}
