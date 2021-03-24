import React from "react";
import LinkContainer from "./LinkContainer";
import UserPanel from "./UserPanel";

const LandingPage = ({ currentUser }) => {
  return (
    <section className="landing-page">
      <UserPanel currentUser={currentUser} />
      <LinkContainer
        path="/catering"
        name="Imaginacja catering"
        description="Imaginacja catering jest wyjątkowym projektem łączącym filar cateringu dietetycznego z wysoko poziomową restauracją wraz ze smakami lasu pochodzących z naszej manufaktury."
        buttonTxt="Zamów"
      />
      <LinkContainer
        path="/sklep"
        name="Imaginacja manufaktura"
        description="Stworzone przy współpracy z naturą."
        buttonTxt="Sprawdź ofertę"
      />
    </section>
  );
};

export default LandingPage;
