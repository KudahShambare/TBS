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

        <div id="facts-container"></div>
        <div id="facts-container"></div>
        <div id="facts-container"></div>
      </div>

      <Footer />
    </div>
  );
};
export default Home;
