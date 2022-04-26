import React from "react";

//styles
import "./SideBar.scss";

function SideBar() {
  return (
    <div className="side-bar">
      <button type="button">Gift Card</button>
      <ul>
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
