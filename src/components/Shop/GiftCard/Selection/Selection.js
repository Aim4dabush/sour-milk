import React, { useContext, useState } from "react";

//styles
import "./Selection.scss";
import { CloseButton } from "../../../../StyledComponents/OverlayCloseButtons/OverlayCloseButtons";
import { PurchaseButton } from "../../../../StyledComponents/SubmitButtons/PurchaseButton";

//context
import { Overlay } from "../../../../App";

//fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

function Selection({ setSelection, setSelectionMade }) {
  const { setOpacity, setGiftCard } = useContext(Overlay);
  const [noSelection, setNoSelection] = useState(true);
  const [giftCardValue, setGiftCardValue] = useState({
    twentyFive: "",
    fifty: "",
    oneHundred: "",
    twoHundred: "",
  });
  const [giftCardSelection, setGiftCardSelection] = useState({
    twentyFive: false,
    fifty: false,
    oneHundred: false,
    twoHundred: false,
  });

  const handleChange = (e) => {
    setGiftCardValue({ ...giftCardValue, [e.target.name]: e.target.value });
    setGiftCardSelection({
      ...giftCardSelection,
      [e.target.name]: e.target.checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const giftSelections = Object.values(giftCardSelection);
    const giftValues = Object.values(giftCardValue);
    const index = giftSelections.indexOf(true);
    if (index >= 0) {
      setNoSelection(true);
      setSelection(giftValues[index]);
      setSelectionMade(true);
    } else {
      setNoSelection(false);
      setSelectionMade(false);
    }
  };

  const handleToggle = () => {
    setGiftCard(false);
    setOpacity(false);
    setSelectionMade(false);
  };

  return (
    <div className="selection">
      <img
        alt="gift card"
        src={process.env.PUBLIC_URL + "/images/gift_card.svg"}
      />
      <div className="gift-card-selection">
        <form onSubmit={handleSubmit}>
          <h3>Gift Cards</h3>
          <div className="twenty-five">
            <input
              checked={giftCardSelection.twentyFive}
              id="twenty-five"
              name="twentyFive"
              type="checkbox"
              value="25"
              onChange={handleChange}
            />
            <label
              className={`${!noSelection && "error"}`}
              htmlFor="twentyFive"
            >
              $25 Gift card
            </label>
          </div>
          <div className="fifty">
            <input
              checked={giftCardSelection.fifty}
              id="fifty"
              name="fifty"
              type="checkbox"
              value="50"
              onChange={handleChange}
            />
            <label className={`${!noSelection && "error"}`} htmlFor="fifty">
              $50 Gift card
            </label>
          </div>
          <div className="one-hundred">
            <input
              checked={giftCardSelection.oneHundred}
              id="one-hundred"
              name="oneHundred"
              type="checkbox"
              value="100"
              onChange={handleChange}
            />
            <label
              className={`${!noSelection && "error"}`}
              htmlFor="oneHundred"
            >
              $100 Gift card
            </label>
          </div>
          <div className="two-hundred">
            <input
              checked={giftCardSelection.twoHundred}
              id="two-hundred"
              name="twoHundred"
              type="checkbox"
              value="200"
              onChange={handleChange}
            />
            <label
              className={`${!noSelection && "error"}`}
              htmlFor="twoHundred"
            >
              $200 Gift card
            </label>
          </div>
          {!noSelection && <p>Please choose a card!</p>}
          <a href="#">Terms & conditions apply</a>
          <PurchaseButton type="submit">Select</PurchaseButton>
        </form>
      </div>
      <CloseButton type="button" onClick={handleToggle}>
        <FontAwesomeIcon icon={faClose} />
      </CloseButton>
    </div>
  );
}

export default Selection;
