import React, { useContext, useState } from "react";

//styles
import "./ContactForm.scss";
import { ContactButton } from "../../../StyledComponents/SubmitButtons/ContactButton";

//component
import ContactThankYou from "../ContactThankYou/ContactThankYou";

//context
import { Overlay } from "../../../App";

function ContactForm() {
  const { opacity, setOpacity } = useContext(Overlay);
  const [thankYou, setThankYou] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
    promotion: false,
  });
  const [formValidation, setFormValidation] = useState({
    nameValidated: true,
    emailValidated: true,
    messageValidated: true,
  });

  const handleOnChange = (e) => {
    return setContactForm({ ...contactForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (contactForm.name === "") {
      setFormValidation((prevState) => {
        return { ...prevState, nameValidated: false };
      });
    } else {
      setFormValidation((prevState) => {
        return { ...prevState, nameValidated: true };
      });
    }

    if (contactForm.email === "") {
      setFormValidation((prevState) => {
        return { ...prevState, emailValidated: false };
      });
    } else {
      setFormValidation((prevState) => {
        return { ...prevState, emailValidated: true };
      });
    }

    if (contactForm.message === "") {
      setFormValidation((prevState) => {
        return { ...prevState, messageValidated: false };
      });
    } else {
      setFormValidation((prevState) => {
        return { ...prevState, messageValidated: true };
      });
    }

    const validation = Object.values(contactForm);
    if (validation.includes("")) {
      setOpacity(false);
      setThankYou(false);
    } else {
      setOpacity(true);
      setThankYou(true);
      setContactForm({
        name: "",
        email: "",
        message: "",
        promotion: false,
      });
    }
  };

  return (
    <div className="contact-form">
      {thankYou && (
        <ContactThankYou setThankYou={setThankYou} thankYou={thankYou} />
      )}
      <div className={`form ${opacity && "overlay"}`}>
        <h3>Contact Form</h3>
        <form onSubmit={handleSubmit}>
          <div className="name">
            <label htmlFor="name">Name</label>
            <div className="form-control">
              <input
                className={`${!formValidation.nameValidated && "error"}`}
                name="name"
                type="text"
                value={contactForm.name}
                onChange={handleOnChange}
              />
              {!formValidation.nameValidated && <p>Please enter a name!</p>}
            </div>
          </div>
          <div className="email">
            <label htmlFor="email">Email</label>
            <div className="form-control">
              <input
                className={`${!formValidation.emailValidated && "error"}`}
                name="email"
                type="email"
                value={contactForm.email}
                onChange={handleOnChange}
              />
              {!formValidation.emailValidated && <p>Please enter an e-mail!</p>}
            </div>
          </div>
          <div className="message">
            <label htmlFor="message">Message</label>
            <div className="form-control">
              <textarea
                className={`${!formValidation.messageValidated && "error"}`}
                cols="30"
                name="message"
                rows="10"
                value={contactForm.message}
                onChange={handleOnChange}
              ></textarea>
              {!formValidation.messageValidated && (
                <p>Please enter a message!</p>
              )}
            </div>
          </div>
          <div className="promotion">
            <input
              checked={contactForm.promotion}
              id="promotion"
              name="promotion"
              type="checkbox"
              onChange={handleOnChange}
            />
            <p>Sign up to get discount codes/promotional emails</p>
          </div>
          <ContactButton className="contact-button" type="submit">
            Send
          </ContactButton>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
