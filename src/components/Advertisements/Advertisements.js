import React, { useContext } from "react";

//styles
import "./Advertisements.scss";

//context
import { Overlay } from "../../App";

function Advertisements() {
  const { opacity } = useContext(Overlay);
  return (
    <div className={`advertisements ${opacity && "overlay"}`}>
      <img
        alt="hours"
        src={process.env.PUBLIC_URL + "/images/store_hours.svg"}
      />
      <div className="address">
        <p>
          Bringing you <br /> small independent brands <br /> & local art.
        </p>
        <a
          href="https://www.google.com/maps/dir//1474+N+Van+Ness+Ave,+Fresno,+CA+93728/@36.7627216,-119.8074936,15z/data=!4m9!4m8!1m0!1m5!1m1!1s0x8094675073e4964f:0x2b2b86d82be9c95a!2m2!1d-119.7987389!2d36.7627216!3e0"
          target="_blank"
          rel="noreferrer"
        >
          1474 N Van Ness <br /> Fresno, CA
        </a>
      </div>
      <div className="new-arrivals">
        <img
          alt="rainbow glitter eye shadow"
          src={
            process.env.PUBLIC_URL + "/images/rainbow_glitter_eye_shadow.svg"
          }
        />
        <a href="#new-arrivals">New Arrivals</a>
      </div>
    </div>
  );
}

export default Advertisements;
