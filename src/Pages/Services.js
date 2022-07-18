import React from "react";
import Footer from "../Components/Footer";
import OtherNavBar from "../Components/OtherNavBar";
import Partners from "../Components/Partners";

const Services = () => {
  return (
    <div className="pages">
      <OtherNavBar page="Our Services" />
      <div className="services">
        <div id="all-services">
          <section className="single-service">
            <h1>Software Development </h1>

            <p>
              {" "}
              Software Development is a process to create computer software
              using one or more specific programming languages that provides
              functionality to address particular business or personal
              objectives.{" "}
            </p>
            <p>
              ​​Our software development service seeks to develop an effective
              and efficient software program for your specific business needs.
              Our staff follows the following steps to create the optimal
              software for your business:{" "}
            </p>
            <ol>
              <li> Analyze Requirements</li>
              <li> System Analysis</li>
              <li> Develop System</li>
              <li> Implement System</li>
              <li> Overview and Follow-up </li>
            </ol>
            <p>
              {" "}
              At Tando Business Solutions we can manage projects from start to
              end whether it is a new project or an existing project. We span
              our software development into different technologies but
              specialise in Java , Microsoft .NET as well as Javascript web
              technologies such as Angular and REACT and both Native and Hybrid
              mobile tech.{" "}
            </p>

            <h4> Our Software Solutions include:</h4>
            <ul>
              <li>Mobile and Web Application Solutions</li>
              <li>API and Microservices Development</li>
              <li> Systems Integration Database Development</li>
              <li> Azure and AWS Cloud Stations</li>
              <li> Software and Data Architecture</li>
              <li>Data Analytics </li>
            </ul>
          </section>
          <section className="single-service">
            <h1> Consultancy </h1>
            <p>
              {" "}
              IT consultancy is the process of advising on the best use of
              technology to achieve certain objectives. This might include
              determining suitable software for your requirements, or
              streamlining your processes through automation to reduce costs and
              improve your service offerin{" "}
            </p>
            <p>
              {" "}
              Our Information Technology (IT) Service provides top tier
              consulting for your technology needs. To provide the optimal
              service for your technological needs, our consultants provide a
              systems analysis, advice, resources, and skills on how to
              implement the most efficient and reliable technological practices
              for your company’s needs. Our staff are driven by quality,
              competent, talented, and passionate candidates with a sense of
              understanding that performance and delivery are key to our
              business.{" "}
            </p>
            <h4> Our Consultancy Services includes the following skills: </h4>
            <ul>
              <li>Software and Mobile Developers</li>
              <li>Business and Systems Analysts</li>
              <li>
                Project Managers Software Testers (Automated and Manual) Systems
              </li>
              <li>Integrations Specialists IT Security Risk and Governance </li>
            </ul>
          </section>
          <section className="single-service">
            <h1> Application Support </h1>
            <p>
              {" "}
              Application Support is a challenging, dynamic, and exciting
              technological venture that involves maintaining IT Systems for
              daily business processes to run efficiently.{" "}
            </p>
            <p>
              {" "}
              At Tando Business Solutions, our app support team strives to
              ensure the technology side of your business’s operations
              programming is running smoothly. We provide our clients with
              application maintenance, support, and debugging. We follow up our
              services with a debriefing to our clients and follow up to confirm
              that your systems are running efficiently. Application Support is
              a challenging, dynamic, and exciting capability involved in
              maintaining IT Systems that enable your daily business processes.{" "}
            </p>

            <h4>
              {" "}
              Our team is competent and has great ability. We derive solutions
              based on the following components:{" "}
            </h4>

            <ul>
              <li>Technological knowledge</li>
              <li>Business Expertise</li>
              <li> Company Culture</li>
              <li> Daily Business Operations</li>
              <li> Diagnostic Skills</li>
              <li> Additional Support Tools </li>
            </ul>
          </section>
        </div>
        <Partners />
      </div>
      <Footer />
    </div>
  );
};
export default Services;
