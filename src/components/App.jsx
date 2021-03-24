import React, { useEffect, useState } from "react";
import Catering from "./Catering/Catering";
import Shop from "./Shop/Shop";
import UserProfile from "./UserProfile/UserProfile";
import Register from "./Auth/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../style/style.scss";
import { auth } from "../config/firebase";
import LandingPage from "./LandingPage/LandingPage";

const App = () => {
  const [currentUser, setCurrentUser] = useState({});
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user);
        // localStorage.setItem("currentUser", user.uid);
      } else {
        setCurrentUser({});
        // localStorage.removeItem("currentUser");
      }
    });
  }, []);

  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <LandingPage currentUser={currentUser} />
          </Route>
          <Route path="/catering" exact component={Catering} />
          <Route path="/sklep" exact component={Shop} />
          <Route path="/profil" exact>
            <UserProfile user={currentUser} />
          </Route>
          <Route path="/rejestracja" exact component={Register} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
