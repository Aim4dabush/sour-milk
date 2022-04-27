import React from "react";

//styles
import "./Stars.scss";

function Stars() {
  return (
    <div className="stars">
      <h2 className="star-title">Leave a Review</h2>
      <div className="star-row">
        <span class="material-symbols-outlined">star</span>
        <span class="material-symbols-outlined">star</span>
        <span class="material-symbols-outlined">star</span>
        <span class="material-symbols-outlined">star</span>
        <span class="material-symbols-outlined">star</span>
      </div>
    </div>
  );
}

export default Stars;
