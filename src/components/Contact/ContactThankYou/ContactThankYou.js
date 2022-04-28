import React, { useContext } from "react";

//styles
import "./ContactThankYou.scss";

//context
import { Overlay } from "../../../App";

//fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

function ContactThankYou({ thankYou, setThankYou }) {
  const { opacity, setOpacity } = useContext(Overlay);

  const handleClose = () => {
    setOpacity(!opacity);
    setThankYou(!thankYou);
  };
  return (
    <div className="contact-thank-you">
      <h2>Thank You!</h2>
      <p>
        We usually respond with in 24 hours. If you need immediate assistance
        please come by our store or call us @ (***)***-****
      </p>
      <img
        src={process.env.PUBLIC_URL + "/images/sour_milk_small.svg"}
        alt="sour milk"
      />
      <button type="button" className="contact-close" onClick={handleClose}>
        <FontAwesomeIcon icon={faClose} />
      </button>
    </div>
  );
}

export default ContactThankYou;
