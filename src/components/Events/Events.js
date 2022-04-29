import React, { useContext, useState } from "react";

//styles
import "./Events.scss";

//components
import EventCard from "./EventCard/EventCard";
import InfoCard from "./InfoCard/InfoCard";

//context
import { Overlay } from "../../App";

//data
import { events } from "./EventsData/EventsData";

function Events() {
  const [moreInfo, setMoreInfo] = useState(false);
  const [chosenCard, setChosenCard] = useState("");
  const { opacity } = useContext(Overlay);
  return (
    <div className="events" id="events">
      {moreInfo && (
        <InfoCard
          chosenCard={chosenCard}
          events={events}
          setMoreInfo={setMoreInfo}
        />
      )}
      <h2 className={`${opacity && "overlay"}`}>Events</h2>
      <div className={`${opacity && "overlay"}`}>
        {events.map((event) => {
          return (
            <EventCard
              key={event.id}
              id={event.id}
              title={event.title}
              image={event.image}
              setChosenCard={setChosenCard}
              setMoreInfo={setMoreInfo}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Events;
