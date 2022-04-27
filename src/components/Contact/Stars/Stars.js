import React from "react";

//styles
import "./Stars.scss";

function Stars() {
  return (
    <div className="stars" id="star">
      <h2 className="star-title">Leave a Review</h2>
      <div className="star-row">
        <span className="material-symbols-outlined">star</span>
        <span className="material-symbols-outlined">star</span>
        <span className="material-symbols-outlined">star</span>
        <span className="material-symbols-outlined">star</span>
        <span className="material-symbols-outlined">star</span>
      </div>
    </div>
  );
}

export default Stars;
