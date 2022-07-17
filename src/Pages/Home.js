import React from "react";
import Footer from "../Components/Footer";
import HomeNavBar from "../Components/HomeNavBar";

const Home = () => {
  return (
    <div className="pages">
      <div id="welcome">
        <HomeNavBar />
      </div>
      <div id="home-services-container">
        <section className="home-services">
          <img
            alt=" Failed to load"
            className="home-services-img"
            src="https://firebasestorage.googleapis.com/v0/b/tando-dbac5.appspot.com/o/Screen%20Shot%202022-07-05%20at%207.28.07%20PM.png?alt=media&token=d14cad0e-d13a-42b4-879f-79535d3f8790"
          />
        </section>
        <section className="home-services">
          <img
            alt="oops"
            className="home-services-img"
            src="https://firebasestorage.googleapis.com/v0/b/tando-dbac5.appspot.com/o/Screen%20Shot%202022-07-05%20at%207.29.14%20PM.png?alt=media&token=18e71df2-1ce1-4a1e-a393-b390b162461e"
          />
        </section>
        <section className="home-services">
          <img
            alt="Oops"
            className="home-services-img"
            src="https://firebasestorage.googleapis.com/v0/b/tando-dbac5.appspot.com/o/Screen%20Shot%202022-07-05%20at%207.29.36%20PM.png?alt=media&token=98362b20-a0a3-4da2-adef-98778080a8fe"
          />
        </section>
      </div>
      <div id="shared-services">
        <section id="shared-services-text">
          <h1>
            {" "}
            Take an advantage of our Shared Service and put your organization in
            a competitive edge
          </h1>
          <p>
            {" "}
            We create an Operational Capability by eliminating the risk of
            having different technology vendors and avoid business units from
            going outside IT and deal with technology vendors directly. We
            strongly believe in forming strategic partnership with an
            organization and offer quality, reliable and sustainable IT
            Solutions
          </p>
        </section>
        <section> </section>
      </div>
      <div id="our-experiences">
        <section id="our-experiences-top">
          <h1>
            {" "}
            Our wealth of experience in Software Solutionspositions our
            customers at the forefront of their field{" "}
          </h1>
          <p>
            {" "}
            We bring more than 20 years senior andtechinical experience forging
            collaborations accross industries and international forums.{" "}
          </p>
        </section>
      </div>

      <Footer />
    </div>
  );
};
export default Home;
