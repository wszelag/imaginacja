import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ContentSwitch from "./Layout/ContentSwitch";
import "../style/style.scss";

const App = () => {
  return (
    <>
      <Router>
        <section className="wrapper">
          <ContentSwitch />
        </section>
      </Router>
    </>
  );
};

export default App;
