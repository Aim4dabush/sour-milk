import React, { useContext } from "react";

//styles
import { StyledEventCard } from "./StyledEventCard";

//context
import { Overlay } from "../../../App";

function EventCard({ id, image, setChosenCard, setMoreInfo, title }) {
  const { setOpacity } = useContext(Overlay);

  const handleClick = () => {
    setChosenCard(id);
    setOpacity(true);
    setMoreInfo(true);
  };

  return (
    <StyledEventCard>
      <button type="button" onClick={handleClick}>
        <img alt={title} src={image} />
      </button>
      <p>{title}</p>
    </StyledEventCard>
  );
}

export default EventCard;
