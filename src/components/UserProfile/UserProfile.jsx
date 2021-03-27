import React from "react";
import { LogoutButton } from "./LogoutButton";
import { CurrentUserContext } from "../../context/currentUser";
import { Redirect } from "react-router-dom";

const UserProfile = () => {
  return (
    <CurrentUserContext.Consumer>
      {({ email }) => (
        <section className="user-profile">
          {!email && <Redirect to="/" />}
          <LogoutButton />
        </section>
      )}
    </CurrentUserContext.Consumer>
  );
};

export default UserProfile;
