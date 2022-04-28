import React, { useContext } from "react";

//styles
import "./ReviewThankYou.scss";

//context
import { Overlay } from "../../../../App";

//fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

function ReviewThankYou({ setClickRating, setRated, setSubmitRating }) {
  const { setOpacity } = useContext(Overlay);

  const handleClose = () => {
    setOpacity(false);
    setRated(false);
    setSubmitRating(false);
    setClickRating(null);
  };
  return (
    <div className="review-thank-you">
      <p>Thank You for your feedback!</p>
      <p>Cheers!</p>
      <img
        src={process.env.PUBLIC_URL + "/images/sour_milk_small.svg"}
        alt="sour milk"
      />
      <button type="button" className="review-close" onClick={handleClose}>
        <FontAwesomeIcon icon={faClose} />
      </button>
    </div>
  );
}

export default ReviewThankYou;
