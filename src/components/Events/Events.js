import React from "react";

//styles
import "./Events.scss";

//components
import EventsCard from "./EventsCard/EventsCard";

//data
import { events } from "./EventsData/EventsData";

function Events() {
  return (
    <div className="events" id="events">
      <h2>Events</h2>
      <div>
        {events.map((event) => {
          return (
            <EventsCard
              key={event.id}
              title={event.title}
              image={event.image}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Events;
