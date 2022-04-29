import React, { useContext } from "react";

//styles
import { StyledEventCard } from "./StyledEventCard";

//context
import { Overlay } from "../../../App";

function EventCard({ id, title, image, setChosenCard, setMoreInfo }) {
  const { setOpacity } = useContext(Overlay);

  const handleClick = () => {
    setOpacity(true);
    setMoreInfo(true);
    setChosenCard(id);
  };

  return (
    <StyledEventCard>
      <button type="button" onClick={handleClick}>
        <img src={image} alt={title} />
      </button>
      <p>{title}</p>
    </StyledEventCard>
  );
}

export default EventCard;
