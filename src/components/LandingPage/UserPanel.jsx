import React from "react";
import Welcome from "./Welcome";
import SmallLogin from "./SmallLogin";
import { CurrentUserContext } from "../../context/currentUser";

const UserPanel = () => {
  return (
    <CurrentUserContext.Consumer>
      {({ email }) => (
        <div className="landing-page__user-panel">
          {email ? <Welcome /> : <SmallLogin />}
        </div>
      )}
    </CurrentUserContext.Consumer>
  );
};

export default UserPanel;
