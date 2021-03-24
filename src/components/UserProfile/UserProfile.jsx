import React from "react";
import { auth } from "../../config/firebase";

const UserProfile = ({ user }) => {
  console.log(user);
  return (
    <div>
      <button
        onClick={() => {
          auth.signOut();
        }}
      >
        {" "}
        logout{" "}
      </button>
    </div>
  );
};

export default UserProfile;
