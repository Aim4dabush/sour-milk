import React, { useContext } from "react";

//styles
import "./SideBar.scss";

//components
import GiftCard from "../GiftCard/GiftCard";

//context
import { Overlay } from "../../../App";

function SideBar() {
  const { giftCard, opacity, setGiftCard, setOpacity } = useContext(Overlay);

  return (
    <div className="side-bar">
      <div>
        <button
          className="side-bar-button"
          type="button"
          onClick={() => {
            setOpacity(true);
            setGiftCard(true);
          }}
        >
          Gift Card
        </button>
        {giftCard && <GiftCard />}
      </div>
      <ul className={`${opacity && "overlay"}`}>
        <li>
          <a href="#">Accessories</a>
        </li>
        <li>
          <a href="#">Apparel</a>
        </li>
        <li>
          <a href="#">Art & Prints</a>
        </li>
        <li>
          <a href="#">Bags</a>
        </li>
        <li>
          <a href="#">Books & Zines</a>
        </li>
        <li>
          <a href="#">Hair</a>
        </li>
        <li>
          <a href="#">Patches</a>
        </li>
        <li>
          <a href="#">Pins</a>
        </li>
        <li>
          <a href="#">Stationary</a>
        </li>
        <li>
          <a href="#">Misc.</a>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
