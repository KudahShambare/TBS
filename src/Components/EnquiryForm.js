import React from "react";

const EnquiryForm = () => {
  return (
    <form>
      <div id="contact-us-bio">
        <input type="text" placeholder="First name" required />
        <input type="text" placeholder="Last name" required />
        <input type="email" placeholder="Your email" required />
        <input type="text" number="10" placeholder="Your phone" required />
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
      <br />
      <button id="enquiry-button">Send Now </button>
    </form>
  );
};
export default EnquiryForm;
