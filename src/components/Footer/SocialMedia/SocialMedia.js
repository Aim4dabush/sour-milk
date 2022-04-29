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
          <FontAwesomeIcon className="icons" icon={faFacebookSquare} />
        </a>
        <a href="https://www.instagram.com/sourmilkshopfresno/?hl=en">
          <FontAwesomeIcon className="icons" icon={faInstagramSquare} />
        </a>
        <a href="#">
          <FontAwesomeIcon className="icons" icon={faTumblrSquare} />
        </a>
        <a href="#">
          <FontAwesomeIcon className="icons" icon={faTwitter} />
        </a>
      </div>
    </div>
  );
}

export default SocialMedia;
