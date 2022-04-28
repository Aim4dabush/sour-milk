import React, { useContext, useState } from "react";

//styles
import "./Stars.scss";

//component
import ReviewCard from "./ReviewCard/ReviewCard";
import ReviewThankYou from "./ReviewThankYou/ReviewThankYou";

//context
import { Overlay } from "../../../App";

//fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Stars() {
  const [rated, setRated] = useState(false);
  const [submitRating, setSubmitRating] = useState(false);
  const { opacity, setOpacity } = useContext(Overlay);

  const handleRatingClick = () => {
    setOpacity(!opacity);
    setRated(!rated);
  };

  return (
    <div className="star" id="star">
      {rated && !submitRating ? (
        <ReviewCard
          setRated={setRated}
          submitRating={submitRating}
          setSubmitRating={setSubmitRating}
        />
      ) : null}
      {submitRating && (
        <ReviewThankYou setRated={setRated} setSubmitRating={setSubmitRating} />
      )}
      <h2 className={`star-title ${opacity && "overlay"}`}>Leave a Review</h2>
      <div className={`star-row ${opacity && "overlay"}`}>
        <button type="button" className={`rating`} onClick={handleRatingClick}>
          <FontAwesomeIcon icon={faStar} />
        </button>
        <button type="button" className={`rating`} onClick={handleRatingClick}>
          <FontAwesomeIcon icon={faStar} />
        </button>
        <button type="button" className={`rating`} onClick={handleRatingClick}>
          <FontAwesomeIcon icon={faStar} />
        </button>
        <button type="button" className={`rating`} onClick={handleRatingClick}>
          <FontAwesomeIcon icon={faStar} />
        </button>
        <button type="button" className={`rating`} onClick={handleRatingClick}>
          <FontAwesomeIcon icon={faStar} />
        </button>
      </div>
    </div>
  );
}

export default Stars;
