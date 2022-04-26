import React, { useState } from "react";

//styles
import "./NavBar.scss";

//fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

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
          <a
            href="#"
            onClick={() => setOpen(true)}
            className={`search ${open && "toggle"}`}
          >
            Search
          </a>
        </li>
        <div className={`search-bar ${open && "toggle"}`}>
          <input type="search" name="searchBar" id="searchBar" />
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <button type="button" onClick={() => setOpen(false)}>
            <FontAwesomeIcon icon={faClose} />
          </button>
        </div>
      </ul>
    </div>
  );
}

export default NavBar;
