import React, { useContext } from "react";

//styles
import { CloseButton } from "../../../../StyledComponents/OverlayCloseButtons/OverlayCloseButtons";
import { StyledContactCard } from "../../StyledContactCard";

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
    <StyledContactCard className="review-thank-you">
      <h3>Thank You for your feedback!</h3>
      <p>Cheers!</p>
      <img
        src={process.env.PUBLIC_URL + "/images/sour_milk_small.svg"}
        alt="sour milk"
      />
      <CloseButton type="button" onClick={handleClose}>
        <FontAwesomeIcon icon={faClose} />
      </CloseButton>
    </StyledContactCard>
  );
}

export default ReviewThankYou;
