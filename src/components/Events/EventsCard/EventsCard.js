import React from "react";

//styles
import "./EventsCard.scss";

function EventsCard({ title, image }) {
  return (
    <div className="events-card">
      <button type="button">
        <img src={image} alt={title} />
      </button>
      <p>{title}</p>
    </div>
  );
}

export default EventsCard;
