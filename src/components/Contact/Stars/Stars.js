import React, { useContext } from "react";

//styles
import "./Stars.scss";

//context
import { Overlay } from "../../../App";

function Stars() {
  const { opacity } = useContext(Overlay);
  return (
    <div className={`star ${opacity && "overlay"}`} id="star">
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
