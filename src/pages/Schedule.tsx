import { useEffect, useState } from "react";
import type { EventItem } from "../utils/interfaces";
import Calendar from "../components/Calendar";
import EventList from "../components/EventList";
import { useAppDispatch } from "../store/store";
import { getSessions } from "../store/session/sessionAction";

const Schedule = () => {
  const dispatch = useAppDispatch();
  const [events, setEvents] = useState<EventItem[]>([]); // to store events

  const today = new Date(); // get current date
  const monthName = today.toLocaleString("default", { month: "short" }); //get current month

  // Get events for selected date
  useEffect(() => {
    const date = today.toLocaleDateString("en-GB").split("/").join("-"); // today's date to send api
    const formattedDate = `${today.getDate()}-${monthName} ${today.getFullYear()}`; // today's date come from api

    (async () => {
      const res = await dispatch(
        getSessions({ startDate: date, endDate: date })
      ).unwrap();

      const events = res?.data?.result?.[formattedDate] || [];
      setEvents(events);
    })();

    window.scrollTo({ top: 0, behavior: "smooth" }); // to render every step component at the top
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {/* Calendar */}
      <Calendar />

      {/* Upcoming Sessions List */}
      <div className="shadow rounded-lg border bg-gray-150 p-3 sm:p-5 overflow-auto sm:max-h-[540px]">
        <h1 className="text-lg sm:text-xl font-semibold">Today's Sessions</h1>
        <EventList
          events={events}
          emptyMessage="No session available for today."
          className="gap-5 py-3 sm:py-4 px-3 sm:px-10 bg-white"
        />
      </div>
    </div>
  );
};

export default Schedule;
