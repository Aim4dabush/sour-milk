import React, { useContext } from "react";

//styles
import "./GCThankYou.scss";
import { CloseButton } from "../../../../StyledComponents/OverlayCloseButtons/OverlayCloseButtons";

//Context
import { Overlay } from "../../../../App";

//fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

function GCThankYou({ selection, setPurchaseMade, setSelectionMade }) {
  const { setGiftCard, setOpacity } = useContext(Overlay);

  const handleToggle = () => {
    setPurchaseMade(false);
    setSelectionMade(false);
    setGiftCard(false);
    setOpacity(false);
  };

  return (
    <div className="gc-thank-you">
      <img
        src={process.env.PUBLIC_URL + "/images/gift_card.svg"}
        alt="gift card"
      />
      <div className="purchase-thank-you">
        <h2>Thank You</h2>
        <p>Your gift card has been loaded with ${selection}</p>
        <p>
          Check out our <a href="#">terms & conditions</a>
        </p>
        <a href="#">How to use your gift card</a>
        <img
          src={process.env.PUBLIC_URL + "/images/sour_milk_small.svg"}
          alt="sour milk"
        />
      </div>
      <CloseButton type="button" onClick={handleToggle}>
        <FontAwesomeIcon icon={faClose} />
      </CloseButton>
    </div>
  );
}

export default GCThankYou;
