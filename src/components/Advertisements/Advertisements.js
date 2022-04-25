import React from "react";

//styles
import "./Advertisements.scss";

function Advertisements() {
  return (
    <div className="advertisements">
      <img
        src={process.env.PUBLIC_URL + "/images/store_hours.svg"}
        alt="hours"
      />
      <div className="address">
        <p>
          Bringing you <br /> small independent brands <br /> & local art.
        </p>
        <a href="#">
          1474 N Van Ness <br /> Fresno, CA
        </a>
      </div>
      <div className="new-arrivals">
        <img
          src={
            process.env.PUBLIC_URL +
            "/images/local_artist/rainbow_glitter_eye_shadow.svg"
          }
          alt="rainbow glitter eye shadow"
        />
        <a href="#">New Arrivals</a>
      </div>
    </div>
  );
}

export default Advertisements;
