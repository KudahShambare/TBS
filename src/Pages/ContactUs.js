import React from "react";
import OtherNavBar from "../Components/OtherNavBar";
import Footer from "../Components/Footer";
import { SocialIcon } from "react-social-icons";
import EnquiryForm from "../Components/EnquiryForm";

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
          <EnquiryForm />
        </section>
      </div>
      <Footer />
    </div>
  );
};
export default ContactUs;
