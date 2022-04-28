import React, { useContext } from "react";

//styles
import "./EventsCard.scss";

//context
import { Overlay } from "../../../App";

function EventsCard({ id, title, image, setChosenCard, setMoreInfo }) {
  const { setOpacity } = useContext(Overlay);

  const handleClick = () => {
    setOpacity(true);
    setMoreInfo(true);
    setChosenCard(id);
  };

  return (
    <div className="events-card">
      <button type="button" onClick={handleClick}>
        <img src={image} alt={title} />
      </button>
      <p>{title}</p>
    </div>
  );
}

export default EventsCard;
