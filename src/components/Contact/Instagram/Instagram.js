import React from "react";

//styles
import "./Instagram.scss";

function Instagram() {
  return (
    <div className="instagram">
      <a
        href="https://www.instagram.com/sourmilkshopfresno/"
        target="_blank"
        rel="noreferrer"
      >
        <div className="top">
          <img
            src={process.env.PUBLIC_URL + "/images/contacts/instagram_top.svg"}
            alt="instagram top"
          />
        </div>
        <div className="bottom">
          <img
            src={
              process.env.PUBLIC_URL + "/images/contacts/instagram_bottom.svg"
            }
            alt="instagram bottom"
          />
        </div>
      </a>
    </div>
  );
}

export default Instagram;
