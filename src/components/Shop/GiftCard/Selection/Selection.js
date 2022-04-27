import React, { useContext, useState } from "react";

//styles
import "./Selection.scss";

//context
import { Overlay } from "../../../../App";

//fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

function Selection({ setSelection, setSelectionMade }) {
  const { setOpacity, setGiftCard } = useContext(Overlay);

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
    if (index) {
      setSelectionMade(true);
      setSelection(giftValues[index]);
    }
  };

  const handleToggle = () => {
    setOpacity(false);
    setGiftCard(false);
    setSelectionMade(false);
  };

  return (
    <div className="selection">
      <img
        src={process.env.PUBLIC_URL + "/images/gift_card.svg"}
        alt="gift card"
      />
      <div className="gift-card-selection">
        <form onSubmit={handleSubmit}>
          <h3>Gift Cards</h3>
          <div className="twenty-five">
            <input
              type="checkbox"
              name="twentyFive"
              id="twenty-five"
              value="25"
              checked={giftCardSelection.twentyFive}
              onChange={handleChange}
            />
            $25 Gift card
          </div>
          <div className="fifty">
            <input
              type="checkbox"
              name="fifty"
              id="fifty"
              value="50"
              checked={giftCardSelection.fifty}
              onChange={handleChange}
            />
            $50 Gift card
          </div>
          <div className="one-hundred">
            <input
              type="checkbox"
              name="oneHundred"
              id="one-hundred"
              value="100"
              checked={giftCardSelection.oneHundred}
              onChange={handleChange}
            />
            <label htmlFor="oneHundred">$100 Gift card</label>
          </div>
          <div className="two-hundred">
            <input
              type="checkbox"
              name="twoHundred"
              id="two-hundred"
              value="200"
              checked={giftCardSelection.twoHundred}
              onChange={handleChange}
            />
            $200 Gift card
          </div>
          <a href="#">Terms & conditions apply</a>
          <button className="gift-card-button" type="submit">
            Select
          </button>
        </form>
      </div>
      <button className="selection-close" type="button" onClick={handleToggle}>
        <FontAwesomeIcon icon={faClose} />
      </button>
    </div>
  );
}

export default Selection;