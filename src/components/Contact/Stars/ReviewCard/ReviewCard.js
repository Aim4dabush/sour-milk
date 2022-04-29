import React, { useContext, useState } from "react";

//styles
import "./ReviewCard.scss";
import { CloseButton } from "../../../../StyledComponents/OverlayCloseButtons/OverlayCloseButtons";
import { ContactButton } from "../../../../StyledComponents/SubmitButtons/ContactButton";
import { StyledContactCard } from "../../StyledContactCard";

//context
import { Overlay } from "../../../../App";

//fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

function ReviewCard({
  setClickRating,
  setRated,
  submitRating,
  setSubmitRating,
}) {
  const [improveMessage, setImproveMessage] = useState("");
  const [validate, setValidate] = useState(true);
  const { setOpacity } = useContext(Overlay);

  const handleOnChange = (e) => {
    setImproveMessage(e.target.value);
  };

  const handleClose = () => {
    setSubmitRating(false);
    setOpacity(false);
    setRated(false);
    setClickRating(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (improveMessage === "") {
      setValidate(false);
    } else {
      setValidate(true);
      setImproveMessage("");
      setSubmitRating(!submitRating);
    }
  };
  return (
    <StyledContactCard className="review-card">
      <h2 className="review-title">Thank You</h2>
      <p>Please tell us how we can improve</p>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <textarea
            className={`${!validate && "error"}`}
            cols="30"
            id="improve"
            name="improve"
            rows="10"
            value={improveMessage}
            onChange={handleOnChange}
          />
          {!validate && <p>Please enter a message!</p>}
        </div>
        <ContactButton type="submit">Submit</ContactButton>
      </form>
      <CloseButton type="button" onClick={handleClose}>
        <FontAwesomeIcon icon={faClose} />
      </CloseButton>
    </StyledContactCard>
  );
}

export default ReviewCard;
