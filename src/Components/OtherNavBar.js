import React from "react";
import NavLinks from "./NavLinks";

const OtherNavBar = (props) => {
  return (
    <div id="other-nav-container">
      <NavLinks />
      <section className="other-head">
        <h3>{props.page}</h3>
      </section>
    </div>
  );
};
export default OtherNavBar;
