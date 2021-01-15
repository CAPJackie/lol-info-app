import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Content from "../Others/Content";
import "./App.css";

const App = () => {
  return (
    <div className="site">
      <div>
        <Header />
        <Content />
      </div>
      <Footer />
    </div>
  );
};

export default App;
