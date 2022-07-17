import React from "react";
import Footer from "../Components/Footer";
import OtherNavBar from "../Components/OtherNavBar";

const AboutUs = () => {
  return (
    <div className="pages">
      <OtherNavBar page="About Us" />
      <div id="about-us">
        <div>
          <h1> OUR MISSION </h1>
          <p>
            Our aim is to strategically align the business operation processes
            into effective and sustainable IT solutions. Solutions that are
            strategic to the business vision and that helps to reduce
            operational costs, thus increasing profits We strongly believe in
            forming strategic partnership with an organization and offer
            quality, reliable and sustainable IT Solutions.
          </p>
        </div>

        <div>
          {" "}
          <h1> OUR BACKGROUND </h1>
          <p>
            Tando Business Solutions started as a custom software and web
            development company in 2016.We build most of our applications from
            concept to a full operational system. We are a project based
            company, with a flexibility of providing time and materials or fixed
            price solutions. We have streamlined our services into Software
            Development, Consultancy and Application Support so that we can
            optionally offer our clients a Shared Managed Service across
            departments.
          </p>
        </div>
        <div>
          <h1> OUR STRATEGY </h1>
          <p>
            Our key strategy is to understand the client’s business objectives
            and implement IT solutions that are strategically aligned to that of
            business, using strategic alignment model that requires a business
            to have an objective to understand the current business state,
            commitment and recognition in IT investments, leverage IT
            applications that can drive process enhancements to competitive
            advantage, assess of whether the business has integrated business
            and IT Strategic planning
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default AboutUs;
