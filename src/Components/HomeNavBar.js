import React from "react";
import NavLinks from "./NavLinks";

const HomeNavBar = () => {
  return (
    <>
      <section id="nav-logo-container">
        <img
          id="nav-logo"
          src="data:image/jpeg;base64,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"
          alt="Failed to load"
        />
      </section>

      <NavLinks />
    </>
  );
};
export default HomeNavBar;
