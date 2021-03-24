import React from "react";
import Welcome from "./Welcome";
import SmallLogin from "./SmallLogin";

const UserPanel = ({ currentUser }) => {
  const { email } = currentUser;
  return (
    <div className="landing-page__user-panel">
      {email ? <Welcome /> : <SmallLogin />}
    </div>
  );
};

export default UserPanel;
