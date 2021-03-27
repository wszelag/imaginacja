import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare
} from "@fortawesome/free-brands-svg-icons";

export const SocialPanel = () => {
  return (
    <footer className="landing-page__social-panel">
      <a
        className="landing-page__social-link landing-page__social-link--facebook"
        href="https://www.facebook.com/Imaginacjamanufaktura"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faFacebookSquare} />
      </a>
      <a
        className="landing-page__social-link landing-page__social-link--instagram"
        href="https://www.instagram.com/imaginacja_manufaktura/"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faInstagramSquare} />
      </a>
    </footer>
  );
};
