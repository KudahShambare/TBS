import React from "react";
import Footer from "../Components/Footer";
import OtherNavBar from "../Components/OtherNavBar";

const Careers = () => {
  return (
    <div className="pages">
      <OtherNavBar page="Careers" />
      <div id="careers">
        <h1>Our Team</h1>
        <p>
          {" "}
          At Tando Business Solutions, our team is composed of highly skilled
          and experienced IT experts. In addition to being technologically
          literate, we require our employees to have a wide range of skills in
          areas such as communication, sociability, and personability. We
          believe that true success comes from within, which is why we seek team
          members who exhibit a positive attitude, emotional intelligence, and
          are team oriented.{" "}
        </p>
        <p>
          Our team members also must have a true passion for technology and be
          keen on forming authentic relationships with their prospective
          clients. In addition, our team members must be group oriented and take
          pride in our company and its mission. We demand a high performance
          from our team members and a willingness to work effectively with
          colleagues in an interdependent manner to achieve company goals.
        </p>
        <h3>
          {" "}
          The following are a list of values we require from our team members{" "}
        </h3>
        <ul>
          <li> Positive Attitude </li>
          <li> Empathy </li>
          <li>Communication Skills </li>
          <li> Leadership </li>
          <li> Time Management and Organization </li>
          <li> Critical Thinking </li>
          <li> Problem Solving </li>
          <li> Team Oriented </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};
export default Careers;
