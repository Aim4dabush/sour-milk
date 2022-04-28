import React, { useContext } from "react";

//styles
import "./ContactForm.scss";

//component
import ContactThankYou from "../ContactThankYou/ContactThankYou";

//context
import { Overlay } from "../../../App";

function ContactForm() {
  const { opacity, setOpacity } = useContext(Overlay);

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpacity(true);
  };

  return (
    <div className="contact-form">
      {opacity && <ContactThankYou />}
      <div className={`form ${opacity && "overlay"}`}>
        <h3>Contact Form</h3>
        <form onSubmit={handleSubmit}>
          <div className="name">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className="email">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className="message">
            <label htmlFor="message">Message</label>
            <textarea name="message" cols="30" rows="10"></textarea>
          </div>
          <div className="email-promotions">
            <input
              type="checkbox"
              name="emailPromotions"
              id="email-promotions"
            />
            <p>Sign up to get discount codes/promotional emails</p>
          </div>
          <button className="contact-button" type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
