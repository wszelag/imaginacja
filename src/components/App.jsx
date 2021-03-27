import React, { useEffect, useState } from "react";
import Catering from "./Catering/Catering";
import Shop from "./Shop/Shop";
import UserProfile from "./UserProfile/UserProfile";
import Register from "./Auth/Register";
import Login from "./Auth/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../style/style.scss";
import { auth } from "../config/firebase";
import LandingPage from "./LandingPage/LandingPage";
import { CurrentUserContext } from "../context/currentUser";

const App = () => {
  const [currentUser, setCurrentUser] = useState({});
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
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
      <CurrentUserContext.Provider value={currentUser}>
        <Router>
          <Switch>
            <Route path="/" exact>
              <LandingPage />
            </Route>
            <Route path="/catering" exact component={Catering} />
            <Route path="/sklep" exact component={Shop} />
            <Route path="/profil" exact>
              <UserProfile />
            </Route>
            <Route path="/rejestracja" exact component={Register} />
            <Route path="/login" exact component={Login} />
          </Switch>
        </Router>
      </CurrentUserContext.Provider>
    </>
  );
};

export default App;
