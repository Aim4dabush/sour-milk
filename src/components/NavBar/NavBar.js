import React from "react";

//styles
import "./NavBar.scss";

function NavBar() {
  return (
    <div className="nav-bar">
      <ul className="left">
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Events</a>
        </li>
        <li>
          <a href="#">Contacts</a>
        </li>
      </ul>
      <img
        src={process.env.PUBLIC_URL + "/images/sour_milk_nav_bar.svg"}
        alt="logo"
      />
      <ul className="right">
        <li>
          <a href="#">Shop</a>
        </li>
        <li>
          <a href="#">Cart</a>
        </li>
        <li>
          <button type="button">Search</button>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
