import React from "react";

//styles
import "./OurStory.scss";

//components
import Questions from "./Questions/Questions";

function OurStory() {
  return (
    <div className="our-story" id="about">
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
