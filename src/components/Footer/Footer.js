import React from "react";

//styles
import "./Footer.scss";

//components
import Links from "./Links/Links";
import SocialMedia from "./SocialMedia/SocialMedia";
import Subscribe from "./Subscribe/Subscribe";

//fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

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
          <FontAwesomeIcon icon={faCopyright} /> 2022 Sour Milk
        </p>
      </div>
      <div className="right">
        <Subscribe />
      </div>
    </div>
  );
}

export default Footer;
