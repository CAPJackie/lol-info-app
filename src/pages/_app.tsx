import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { AppThemeContext, themes } from "@/context/AppThemeContext";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const initialTheme = useState(themes.light);

  return (
    <AppThemeContext.Provider value={initialTheme}>
      <div
        className="site"
        style={{ backgroundColor: initialTheme[0].surface }}
      >
        <div>
          <Header />
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </AppThemeContext.Provider>
  );
}
