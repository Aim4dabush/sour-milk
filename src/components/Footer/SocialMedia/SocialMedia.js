import React from "react";

//styles
import "./SocialMedia.scss";

//fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faTumblrSquare,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function SocialMedia() {
  return (
    <div className="social-media">
      <h2>Follow Us</h2>
      <div className="social-media-icons">
        <a href="https://www.facebook.com/search/top?q=sourmilkshopfresno">
          <FontAwesomeIcon icon={faFacebookSquare} className="icons" />
        </a>
        <a href="https://www.instagram.com/sourmilkshopfresno/?hl=en">
          <FontAwesomeIcon icon={faInstagramSquare} className="icons" />
        </a>
        <a href="">
          <FontAwesomeIcon icon={faTumblrSquare} className="icons" />
        </a>
        <a href="">
          <FontAwesomeIcon icon={faTwitter} className="icons" />
        </a>
      </div>
    </div>
  );
}

export default SocialMedia;
