import React, { useContext } from "react";

//styles
import "./ContactThankYou.scss";
import { CloseButton } from "../../../StyledComponents/OverlayCloseButtons/OverlayCloseButtons";
import { StyledContactCard } from "../StyledContactCard";

//context
import { Overlay } from "../../../App";

//fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

function ContactThankYou({ thankYou, setThankYou }) {
  const { opacity, setOpacity } = useContext(Overlay);

  const handleClose = () => {
    setOpacity(!opacity);
    setThankYou(!thankYou);
  };
  return (
    <StyledContactCard className="contact-thank-you">
      <h2>Thank You!</h2>
      <p>
        We usually respond with in 24 hours. If you need immediate assistance
        please come by our store or call us @ (***)***-****
      </p>
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

export default ContactThankYou;
