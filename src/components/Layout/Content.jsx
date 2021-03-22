import React from "react";
import Homepage from "../Homepage/Homepage";
import { Switch, Route } from "react-router-dom";

const Content = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/catering" exact>
          <div>catering</div>
        </Route>
        <Route path="/obrazy" exact>
          <div>naturalne obrazy</div>
        </Route>
        <Route path="/sklep" exact>
          <div>sklep</div>
        </Route>
      </Switch>
    </>
  );
};

export default Content;
