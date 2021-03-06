import React, { useState } from "react";

//styles
import "./Subscribe.scss";
import { ContactButton } from "../../../StyledComponents/SubmitButtons/ContactButton";

function Subscribe() {
  const [subEmail, setSubEmail] = useState("");
  const [validate, setValidate] = useState(true);

  const handleOnChange = (e) => {
    setSubEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (subEmail === "") {
      setValidate(false);
    } else {
      setSubEmail("");
      setValidate(true);
    }
  };

  return (
    <div className="subscribe">
      <h3>Subscribe!</h3>
      <p>Be the first to know about sales, restacks and new arrivals!</p>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <input
            className={`${!validate && "error"}`}
            id="email"
            name="email"
            placeholder="Email address"
            type="text"
            value={subEmail}
            onChange={handleOnChange}
          />
          {!validate && <p>Please enter an email!</p>}
        </div>
        <ContactButton type="submit">Sign up</ContactButton>
      </form>
    </div>
  );
}

export default Subscribe;
