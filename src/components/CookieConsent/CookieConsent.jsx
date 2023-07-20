"use client";

import React from "react";
import styles from "./CookieConsent.module.css";
import { hasCookie, setCookie } from "cookies-next";

const CookieConsent = (props) => {
  const [showConsent, setShowConsent] = React.useState(true);

  React.useEffect(() => {
    setShowConsent(hasCookie("localConsent"));
  }, []);

  const acceptCookie = () => {
    setShowConsent(true);
    setCookie("localConsent", "true", {});
  };

  if (showConsent) {
    return null;
  }

  return (
    <div className={styles.mainStyle}>
      <div className={styles.innerDivStyle}>
        <span className={styles.spanStyle}>
          This website uses cookies to improve user experience. By using our
          website you consent to all cookies in accordance with our Cookie
          Policy.
        </span>
        <button className={styles.buttonStyle} onClick={acceptCookie}>
          Accept
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
