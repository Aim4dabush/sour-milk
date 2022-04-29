import React, { useContext } from "react";

//styles
import "./Instagram.scss";

//context
import { Overlay } from "../../../App";

function Instagram() {
  const { opacity } = useContext(Overlay);
  return (
    <div className={`instagram ${opacity && "overlay"}`}>
      <a
        href="https://www.instagram.com/sourmilkshopfresno/"
        target="_blank"
        rel="noreferrer"
      >
        <div className="top">
          <img
            alt="instagram top"
            src={process.env.PUBLIC_URL + "/images/contacts/instagram_top.svg"}
          />
        </div>
        <div className="bottom">
          <img
            alt="instagram bottom"
            src={
              process.env.PUBLIC_URL + "/images/contacts/instagram_bottom.svg"
            }
          />
        </div>
      </a>
    </div>
  );
}

export default Instagram;
