import React from "react";
import { auth } from "../../config/firebase";

export const LogoutButton = () => {
  return (
    <button
      className="user-profile__logout-button"
      onClick={() => {
        auth.signOut();
      }}
    >
      logout
    </button>
  );
};
