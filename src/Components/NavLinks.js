import React from "react";
import { Link } from "react-router-dom";

const NavLinks = () => {
  return (
    <div id="navbar">
      <Link to="/" className="nav-links">
        Home
      </Link>
      <Link to="/about-us" className="nav-links">
        AboutUs
      </Link>
      <Link to="/services" className="nav-links">
        Services
      </Link>
      <Link to="/careers" className="nav-links">
        Careers
      </Link>
      <Link to="/news" className="nav-links">
        News
      </Link>
      <Link to="/contact-us" className="nav-links">
        Contact Us
      </Link>
    </div>
  );
};
export default NavLinks;
