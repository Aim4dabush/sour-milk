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
    creditCard: "",
    cvv: "",
    expiration: "",
    zipCode: "",
  });
  const [purchaseValidate, setPurchaseValidate] = useState({
    nameValidate: true,
    creditCardValidate: true,
    cvvValidate: true,
    expirationValidate: true,
    zipCodeValidate: true,
  });

  const handleOnChange = (e) => {
    return setPurchaseInfo({
      ...purchaseInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (purchaseInfo.name === "") {
      setPurchaseValidate((prevState) => {
        return { ...prevState, nameValidate: false };
      });
    } else {
      setPurchaseValidate((prevState) => {
        return { ...prevState, nameValidate: true };
      });
    }

    if (purchaseInfo.creditCard === "") {
      setPurchaseValidate((prevState) => {
        return { ...prevState, creditCardValidate: false };
      });
    } else {
      setPurchaseValidate((prevState) => {
        return { ...prevState, creditCardValidate: true };
      });
    }

    if (purchaseInfo.cvv === "") {
      setPurchaseValidate((prevState) => {
        return { ...prevState, cvvValidate: false };
      });
    } else {
      setPurchaseValidate((prevState) => {
        return { ...prevState, cvvValidate: true };
      });
    }

    if (purchaseInfo.expiration === "") {
      setPurchaseValidate((prevState) => {
        return { ...prevState, expirationValidate: false };
      });
    } else {
      setPurchaseValidate((prevState) => {
        return { ...prevState, expirationValidate: true };
      });
    }

    if (purchaseInfo.zipCode === "") {
      setPurchaseValidate((prevState) => {
        return { ...prevState, zipCodeValidate: false };
      });
    } else {
      setPurchaseValidate((prevState) => {
        return { ...prevState, zipCodeValidate: true };
      });
    }

    const purchase = Object.values(purchaseInfo);
    if (purchase.includes("")) {
      setPurchaseMade(false);
      setSelectionMade(true);
    } else {
      setPurchaseMade(true);
      setSelectionMade(false);
    }
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
            <label htmlFor="name">Name on Card</label>
            <div className="form-control">
              <input
                className={`${!purchaseValidate.nameValidate && "error"}`}
                type="text"
                name="name"
                id="name"
                value={purchaseInfo.name}
                onChange={handleOnChange}
              />
              {!purchaseValidate.nameValidate && (
                <p className="purchase-validate-error">Please enter a name!</p>
              )}
            </div>
          </div>
          <div className="credit-card">
            <label htmlFor="name">Card Number</label>
            <div className="form-control">
              <input
                className={`${!purchaseValidate.creditCardValidate && "error"}`}
                type="number"
                name="creditCard"
                id="credit-card"
                value={purchaseInfo.creditCard}
                onChange={handleOnChange}
              />
              {!purchaseValidate.creditCardValidate && (
                <p className="purchase-validate-error">
                  Please enter a credit card number!
                </p>
              )}
            </div>
          </div>
          <div className="cvv-expiration">
            <label htmlFor="name">CVV</label>
            <div className="form-control">
              <input
                className={`${!purchaseValidate.cvvValidate && "error"}`}
                type="number"
                name="cvv"
                id="cvv"
                value={purchaseInfo.cvv}
                onChange={handleOnChange}
              />
              {!purchaseValidate.cvvValidate && (
                <p className="purchase-validate-error">
                  Please enter a cvv number!
                </p>
              )}
            </div>
            <label htmlFor="name">Exp. Date</label>
            <div className="form-control">
              <input
                className={`${!purchaseValidate.expirationValidate && "error"}`}
                type="date"
                name="expiration"
                id="expiration"
                value={purchaseInfo.expiration}
                onChange={handleOnChange}
              />
              {!purchaseValidate.expirationValidate && (
                <p className="purchase-validate-error">
                  Please enter a expiration!
                </p>
              )}
            </div>
          </div>
          <div className="zip-code">
            <label htmlFor="name">Zip Code</label>
            <div className="form-control">
              <input
                className={`${!purchaseValidate.zipCodeValidate && "error"}`}
                type="number"
                name="zipCode"
                id="zip-code"
                value={purchaseInfo.zipCode}
                onChange={handleOnChange}
              />
              {!purchaseValidate.zipCodeValidate && (
                <p className="purchase-validate-error">
                  Please enter a zip code!
                </p>
              )}
            </div>
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
