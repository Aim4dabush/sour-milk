import React from "react";

//styles
import "./Contact.scss";

//components
import ContactForm from "./ContactForm/ContactForm";
import Instagram from "./Instagram/Instagram";

function Contact() {
  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <div>
        <ContactForm />
        <Instagram />
      </div>
    </div>
  );
}

export default Contact;
