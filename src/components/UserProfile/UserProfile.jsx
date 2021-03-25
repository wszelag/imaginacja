import React from "react";
import { auth } from "../../config/firebase";
import { CurrentUserContext } from "../../context/currentUser";
import { Redirect } from "react-router-dom";

const UserProfile = () => {
  return (
    <CurrentUserContext.Consumer>
      {({ email }) => (
        <div>
          {!email && <Redirect to="/" />}
          profile of {email}
          <button
            onClick={() => {
              auth.signOut();
            }}
          >
            {" "}
            logout{" "}
          </button>
        </div>
      )}
    </CurrentUserContext.Consumer>
  );
};

export default UserProfile;
