import React, { useContext } from "react";

//styles
import "./OurStory.scss";

//components
import Questions from "./Questions/Questions";

//context
import { Overlay } from "../../App";

function OurStory() {
  const { opacity } = useContext(Overlay);
  return (
    <div className={`our-story ${opacity && "overlay"}`} id="about">
      <h1>Our Story</h1>
      <div>
        <Questions />
        <img
          src={process.env.PUBLIC_URL + "/images/our_story.svg"}
          alt="our story"
        />
      </div>
    </div>
  );
}

export default OurStory;
