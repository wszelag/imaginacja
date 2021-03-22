import React from "react";
import Homepage from "../Homepage/Homepage";
import Register from "../Auth/Register";
import Login from "../Auth/Login";
import Catering from "../Catering/Catering";
import Shop from "../Shop/Shop";
import Pictures from "../Pictures/Pictures";
import { Switch, Route } from "react-router-dom";

const ContentSwitch = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/catering" exact>
          <Catering />
        </Route>
        <Route path="/obrazy" exact>
          <Pictures />
        </Route>
        <Route path="/sklep" exact>
          <Shop />
        </Route>
        <Route path="/rejestracja" exact>
          <Register />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
      </Switch>
    </>
  );
};

export default ContentSwitch;
