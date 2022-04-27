import React, { useContext, useState } from "react";

//styles
import "./Purchase.scss";

//context
import { Overlay } from "../../../../App";

//fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

function Purchase({ selection, setPurchaseMade, setSelectionMade }) {
  const { setGiftCard, setOpacity } = useContext(Overlay);
  const [purchaseInfo, setPurchaseInfo] = useState({
    name: "",
    creditCard: Number,
    cvv: Number,
    expiration: "",
    zipCode: Number,
  });

  const handleOnChange = (e) => {
    return setPurchaseInfo({
      ...purchaseInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setPurchaseMade(true);
    setSelectionMade(false);
    console.log(purchaseInfo);
  };

  const handleToggle = () => {
    setPurchaseMade(false);
    setSelectionMade(false);
    setGiftCard(false);
    setOpacity(false);
  };

  return (
    <div className="purchase">
      <img
        src={process.env.PUBLIC_URL + "/images/gift_card.svg"}
        alt="gift card"
      />
      <div className="gift-card-payment">
        <form onSubmit={handleOnSubmit}>
          <h2>${selection} Gift Card</h2>
          <h3>Credit Card Information</h3>
          <div className="name">
            Name on Card
            <input
              type="text"
              name="name"
              id="name"
              onChange={handleOnChange}
            />
          </div>
          <div className="credit-card">
            Card Number
            <input
              type="number"
              name="creditCard"
              id="credit-card"
              onChange={handleOnChange}
            />
          </div>
          <div className="cvv-expiration">
            CVV{" "}
            <input
              type="number"
              name="cvv"
              id="cvv"
              onChange={handleOnChange}
            />
            Exp. Date{" "}
            <input
              type="date"
              name="expiration"
              id="expiration"
              onChange={handleOnChange}
            />
          </div>
          <div className="zip-code">
            Zip Code{" "}
            <input
              type="number"
              name="zipCode"
              id="zip-code"
              onChange={handleOnChange}
            />
          </div>
          <a href="#">Terms & Conditions apply</a>
          <button type="submit" className="credit-card-button">
            Purchase
          </button>
        </form>
      </div>
      <button className="purchase-close" onClick={handleToggle}>
        <FontAwesomeIcon icon={faClose} />
      </button>
    </div>
  );
}

export default Purchase;
