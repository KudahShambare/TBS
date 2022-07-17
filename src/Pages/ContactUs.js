import React from "react";
import OtherNavBar from "../Components/OtherNavBar";
import Footer from "../Components/Footer";
import { SocialIcon } from "react-social-icons";

const ContactUs = () => {
  return (
    <div className="pages">
      <OtherNavBar page="Contact Us" />
      <div id="contact-us">
        <section>
          <h1> Get in touch for any kind of help and information </h1>
          <section id="contact-us-plee">
            <SocialIcon network="email" />
            <section>
              <h3> Contact Us For More Information</h3>
              <p>
                Please fill in the information as much as possible so that we
                can assist you as soon as we can.{" "}
              </p>
            </section>{" "}
          </section>
        </section>
        <section>
          <h4>
            {" "}
            We are pleased to hear from you. So please feel free to contact us.{" "}
          </h4>
          <form>
            <div id="contact-us-bio">
              <input type="text" placeholder="First name" required />
              <input type="text" placeholder="Last name" required />
              <input type="email" placeholder="Your email" required />
              <input
                type="text"
                number="10"
                placeholder="Your phone"
                required
              />
              <select>
                <option> Enquiry </option>
                <option> Jobs </option>
                <option> Consulting</option>
                <option>Application Support </option>
                <option>Software Development </option>
                <option> Become Our Partner</option>
                <option> Others </option>
              </select>
              <br />
              <textarea placeholder="Message" />
            </div>
          </form>
        </section>
      </div>
      <Footer />
    </div>
  );
};
export default ContactUs;
