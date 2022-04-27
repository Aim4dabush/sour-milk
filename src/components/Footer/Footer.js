import React from "react";

//styles
import "./Footer.scss";

//components
import Links from "./Links/Links";
import SocialMedia from "./SocialMedia/SocialMedia";
import Subscribe from "./Subscribe/Subscribe";

function Footer() {
  return (
    <div className="footer">
      <div className="left">
        <Links />
        <SocialMedia />
      </div>
      <div className="middle">
        <img
          src={process.env.PUBLIC_URL + "/images/sour_milk_large.svg"}
          alt="sour milk"
        />
        <p>
          <span class="material-symbols-outlined">copyright</span> 2022 Sour
          Milk
        </p>
      </div>
      <div className="right">
        <Subscribe />
      </div>
    </div>
  );
}

export default Footer;
