import React, { useContext, useState } from "react";

//styles
import { CloseButton } from "../../../StyledComponents/OverlayCloseButtons/OverlayCloseButtons";
import { StyledInfoCard } from "./StyledInfoCard";

//context
import { Overlay } from "../../../App";

//fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

function InfoCard({ chosenCard, events, setMoreInfo }) {
  const [extend, setExtend] = useState(false);
  const { setOpacity } = useContext(Overlay);

  const event = events.find((selection) => {
    return selection.id === chosenCard;
  });

  const handleCloseClick = () => {
    setMoreInfo(false);
    setOpacity(false);
    setExtend(false);
  };

  const handleExtendClick = () => {
    setExtend(!extend);
  };
  return (
    <StyledInfoCard Card className={`more-info-card ${extend && "extend"}`}>
      <img src={event.image} alt={event.title} />
      <div className="info">
        <h2>{event.title}</h2>
        <p className="schedule">{event.schedule}</p>
        <p className="info">{event.info}</p>
        <p className="other-info">{event.otherInfo}</p>
        <p className="banner">{event.banner}</p>
      </div>
      <button className="info-button" type="button" onClick={handleExtendClick}>
        more info
      </button>
      <CloseButton type="button" onClick={handleCloseClick}>
        <FontAwesomeIcon icon={faClose} />
      </CloseButton>
    </StyledInfoCard>
  );
}

export default InfoCard;
