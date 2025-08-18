import React, { useEffect, useState } from "react";
import { augustDataWithImage } from "../utils/arrays";
import type { EventItem } from "../utils/interfaces";
import Calendar from "../components/Calendar";
import EventList from "../components/EventList";

const Schedule = () => {
  const [events, setEvents] = useState<EventItem[]>([]); // to store events

  const today = new Date(); // get current date
  const monthName = today.toLocaleString("default", { month: "short" }); //get current month

  const formattedDate = `${today.getDate()}-${monthName.toLowerCase()} ${today.getFullYear()}`;

  // Get events for today
  useEffect(() => {
    const eventsForToday = augustDataWithImage?.[formattedDate] || [];
    setEvents(eventsForToday);
  }, [formattedDate]);

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // to render every step component at the top
  }, []);

  return (
    <div>
      {/* Calendar */}
      <Calendar />

      {/* Upcoming Sessions List */}
      <div className="shadow rounded-lg border bg-gray-150 p-3 sm:p-5 overflow-auto sm:max-h-[540px]">
        <h1 className="text-lg sm:text-xl font-semibold">Upcoming Sessions</h1>
        <EventList
          events={events}
          emptyMessage="No sessions today."
          className="gap-5 py-3 sm:py-4 px-3 sm:px-10 bg-white"
        />
      </div>
    </div>
  );
};

export default Schedule;
