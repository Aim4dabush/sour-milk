import React from "react";

//styles
import "./Links.scss";

function Links() {
  return (
    <div className="links">
      <ul>
        <li>
          <a href="#discount">Home</a>
        </li>
        <li>
          <a href="#contact">Contact Us</a>
        </li>
        <li>
          <a href="#about">About Us</a>
        </li>
        <li>
          <a href="#">Terms & Conditions</a>
        </li>
        <li>
          <a href="#">Return Policy</a>
        </li>
        <li>
          <a href="#star">Leave a Review</a>
        </li>
        <li>
          <a href="#">Privacy Policy</a>
        </li>
        <li>
          <a href="#">Shipping Info</a>
        </li>
      </ul>
    </div>
  );
}

export default Links;
