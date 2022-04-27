import React from "react";

//styles
import "./Subscribe.scss";

function Subscribe() {
  return (
    <div className="subscribe">
      <h3>Subscribe!</h3>
      <p>Be the first to know about sales, restacks and new arrivals!</p>
      <input type="text" name="email" id="email" placeholder="Email address" />
      <button className="sub-button" type="button">
        Sign up
      </button>
    </div>
  );
}

export default Subscribe;
