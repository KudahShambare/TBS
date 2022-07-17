import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import OtherNavBar from "../Components/OtherNavBar";

const News = () => {
  return (
    <div className="pages">
      <OtherNavBar page="News" />
      <div id="news">
        <section>
          <h1>
            Stay up to date with Tando Business Solutions news and technological
            ventures{" "}
          </h1>
          <hr />
          <img
            id="news-img"
            alt="Ooops"
            src="https://www.tandobs.co.za/wp-content/uploads/2021/03/digital-transformation-article-900x313.png"
          />
          <div>
            {" "}
            <h1>
              {" "}
              Digital transformation's impact on businesses within South Africa
            </h1>{" "}
            <Link to=""> Read More >>> </Link>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};
export default News;
