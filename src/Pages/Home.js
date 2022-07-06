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
          <h5 className="home-services-header">Software Development</h5>
        </section>
        <section className="home-services">
          <h5 className="home-services-header">Consultancy</h5>
        </section>
        <section className="home-services">
          <h5 className="home-services-header">Applications Support</h5>
        </section>
      </div>
      <div id="shared-services"></div>
      <Footer />
    </div>
  );
};
export default Home;
