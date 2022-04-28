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
  const [clickRating, setClickRating] = useState(null);
  const [hoverRating, setHoverRating] = useState(null);
  const { opacity, setOpacity } = useContext(Overlay);

  return (
    <div className="star" id="star">
      {rated && !submitRating ? (
        <ReviewCard
          setRated={setRated}
          submitRating={submitRating}
          setSubmitRating={setSubmitRating}
          setClickRating={setClickRating}
        />
      ) : null}
      {submitRating && (
        <ReviewThankYou
          setRated={setRated}
          setSubmitRating={setSubmitRating}
          setClickRating={setClickRating}
        />
      )}
      <h2 className={`star-title ${opacity && "overlay"}`}>Leave a Review</h2>
      <div className={`star-row ${opacity && "overlay"}`}>
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;
          return (
            <button
              type="radio"
              name="starRating"
              id="starRating"
              value={ratingValue}
              onClick={() => {
                setClickRating(ratingValue);
                setOpacity(true);
                setRated(true);
              }}
              onMouseEnter={() => setHoverRating(ratingValue)}
              onMouseLeave={() => setHoverRating(null)}
              className={`rating ${
                ratingValue <= (hoverRating || clickRating) ? "yellow" : null
              }`}
            >
              <FontAwesomeIcon icon={faStar} />
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Stars;
