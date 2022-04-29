import React, { useState } from "react";

//styles
import "./NavBar.scss";

//fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="nav-bar">
      <ul className="left">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#events">Events</a>
        </li>
        <li>
          <a href="#contact">Contacts</a>
        </li>
      </ul>
      <img
        alt="logo"
        src={process.env.PUBLIC_URL + "/images/sour_milk_nav_bar.svg"}
      />
      <ul className="right">
        <li>
          <a href="#shop">Shop</a>
        </li>
        <li>
          <a href="#">Cart</a>
        </li>
        <li>
          <a
            className={`search ${open && "toggle"}`}
            href="#"
            onClick={() => setOpen(true)}
          >
            Search
          </a>
        </li>
        <div className={`search-bar ${open && "toggle"}`}>
          <input id="searchBar" name="searchBar" type="search" />
          <FontAwesomeIcon icon={faMagnifyingGlass} className="magnify-glass" />
          <button type="button" onClick={() => setOpen(false)}>
            <FontAwesomeIcon className="close" icon={faClose} />
          </button>
        </div>
      </ul>
    </div>
  );
}

export default NavBar;
