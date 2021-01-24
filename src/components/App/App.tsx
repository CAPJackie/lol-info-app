import React, { FunctionComponent, useState } from "react";
import { AppThemeContext, themes } from "../../context/AppThemeContext";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Content from "../Others/Content";
import "./App.css";

const App: FunctionComponent = () => {
  const initialTheme = useState(themes.light);
  return (
    <AppThemeContext.Provider value={initialTheme}>
      <div
        className="site"
        style={{ backgroundColor: initialTheme[0].surface }}
      >
        <div>
          <Header />
          <Content />
        </div>
        <Footer />
      </div>
    </AppThemeContext.Provider>
  );
};

export default App;
