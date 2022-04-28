import React from "react";

//styles
import "./Contact.scss";

//components
import ContactForm from "./ContactForm/ContactForm";
import Instagram from "./Instagram/Instagram";
import Stars from "./Stars/Stars";

function Contact() {
  return (
    <div className={`contact`} id="contact">
      <h2>Contact Us</h2>
      <div className="contact-instagram">
        <ContactForm />
        <Instagram />
      </div>
      <Stars />
      <a href="#discount">Back to Top</a>
    </div>
  );
}

export default Contact;
