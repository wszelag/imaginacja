import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Content from "./Layout/Content";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import "../style/style.scss";

const App = () => {
  return (
    <>
      <Router>
        <section className="wrapper">
          <Header />
          <Content />
          <Footer />
        </section>
      </Router>
    </>
  );
};

export default App;
