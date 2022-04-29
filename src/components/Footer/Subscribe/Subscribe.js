import React, { useState } from "react";

//styles
import "./Subscribe.scss";

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
      setValidate(true);
      setSubEmail("");
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
        <button className="sub-button" type="submit">
          Sign up
        </button>
      </form>
    </div>
  );
}

export default Subscribe;
