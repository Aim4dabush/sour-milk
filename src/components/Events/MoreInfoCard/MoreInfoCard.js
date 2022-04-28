import React, { useContext, useState } from "react";

//styles
import "./MoreInfoCard.scss";

//context
import { Overlay } from "../../../App";

//fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

function MoreInfoCard({ chosenCard, events, setMoreInfo }) {
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
    <div className={`more-info-card ${extend && "extend"}`}>
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
      <button className="event-close" type="button" onClick={handleCloseClick}>
        <FontAwesomeIcon icon={faClose} />
      </button>
    </div>
  );
}

export default MoreInfoCard;
