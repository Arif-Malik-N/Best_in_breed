import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import dayGridPlugin from "@fullcalendar/daygrid";
import Button from "./buttons/Button";
import { useAppDispatch, useAppSelector } from "../store/store";
import { getSessions } from "../store/session/sessionAction";
import Loader from "./Loader";
import { formatTimeRangeTo12Hour } from "../utils/utilities";

type CalendarEvent = {
  title: string;
  start: Date;
  end?: Date;
  extendedProps?: {
    description?: string;
    image?: string;
    color?: string;
  };
};

const Calendar = React.memo(() => {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.commonSlice);

  const calendarRef = React.useRef<FullCalendar | null>(null); // to change calendar date with custom calendar header
  const [currentRange, setCurrentRange] = useState(""); // for set calendar range
  const [currentView, setCurrentView] = useState("timeGridWeek"); // for custum button to know which button is press
  const [calenderEvent, setCalenderEvent] = useState<CalendarEvent[]>([]);

  // Convert "10:00 AM" into proper Date with given date string
  function parseDateTime(dateStr: string, timeStr: string): Date {
    return new Date(`${dateStr} ${timeStr}`);
  }

  // Update current visible range
  const handleDatesSet = (arg: any) => {
    const start = arg.start;
    const end = arg.end;
    const options: Intl.DateTimeFormatOptions = {
      month: "short",
      day: "numeric",
      year: "numeric",
    };
    setCurrentRange(
      `${start.toLocaleDateString(
        undefined,
        options
      )} – ${end.toLocaleDateString(undefined, options)}`
    );
  };

  const dayAndYear: boolean = ["dayGridYear", "dayGridMonth"].includes(
    currentView
  );

  // Get events for selected date
  useEffect(() => {
    if (currentRange) {
      (async () => {
        const [startDate, endDate] = currentRange.split("–").map((s) => {
          const d = new Date(s.trim());
          return `${String(d.getDate()).padStart(2, "0")}-${String(
            d.getMonth() + 1
          ).padStart(2, "0")}-${d.getFullYear()}`;
        });

        const res = await dispatch(
          getSessions({ startDate: startDate, endDate: endDate })
        ).unwrap();

        // Convert augustData -> CalendarEvent[]
        const calendarEvents: CalendarEvent[] = Object.entries(
          res?.data?.result
        ).flatMap(([dateStr, evs]) =>
          evs.map((ev, idx) => {
            const start = parseDateTime(dateStr, ev.startTime);
            const end = parseDateTime(dateStr, ev.endTime);

            return {
              title: ev.name,
              start,
              end,
              extendedProps: {
                description: ev.description,
                image: ev.dogImageUrl,
                color: idx % 2 === 0 ? "#0052FF" : "black", // alternate colors
              },
            };
          })
        );
        setCalenderEvent(calendarEvents);
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentRange]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // to render every step component at the top
  }, []);

  // to print cards in calendar
  function renderEventContent(eventInfo: any) {
    const { event } = eventInfo;
    const { description, image, color } = event.extendedProps as any;

    return (
      <div
        className={`border-2 xl:ml-1 rounded-lg py-1 px-1 min-w-[120px] bg-white ${
          dayAndYear ? "lg:min-w-[130px]" : "lg:px-2"
        }`}
        style={{ borderColor: color }}
      >
        {/* Time */}
        <div className="flex justify-between">
          <span
            className={`rounded p-1 ${
              dayAndYear ? "text-[6.5px]" : "font-bold text-[8px]"
            }`}
            style={{ background: color, color: "white" }}
          >
            {formatTimeRangeTo12Hour(eventInfo.timeText)}
          </span>
          {/* Avatar */}
          {image && (
            <img src={image} alt="avatar" className="w-5 h-5 rounded-lg" />
          )}
        </div>

        {/* Title & Description */}
        <div className="mt-1 font-semibold text-xs text-[#5C5C5C]">
          {dayAndYear ? (
            <>
              <div className="font-bold">{event.title}</div>
              <div>{description}</div>
            </> // for month and year view
          ) : (
            `${event.title} - ${description}` // for day and week view
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="mb-10 bg-white">
      <div className="relative">
        {/* Custom Header */}
        <div className="sm:flex items-center justify-between p-5 lg:p-10 space-y-4 sm:space-y-0 mb-2 sm:mb-0">
          {/* View Tabs */}
          <div className="flex justify-center">
            {[
              { label: "Year", view: "dayGridYear" },
              { label: "Month", view: "dayGridMonth" },
              { label: "Week", view: "timeGridWeek" },
              { label: "Day", view: "timeGridDay" },
            ].map(({ label, view }) => {
              const isActive = currentView === view; // <-- track active view
              return (
                <div key={label}>
                  <Button
                    name={label}
                    className={`p-2 lg:w-[70px] border transition text-center text-sm outline-none ${
                      isActive ? "text-black font-semibold" : "text-gray-600"
                    } ${
                      label === "Year"
                        ? "rounded-l-full"
                        : label === "Day"
                        ? "rounded-r-full"
                        : ""
                    }`}
                    onClick={() => {
                      calendarRef.current?.getApi().changeView(view);
                      setCurrentView(view); // <-- store selected view in state
                    }}
                  />
                </div>
              );
            })}
          </div>

          {/* Navigation and date range */}
          <div className="flex space-x-2 lg:space-x-10 items-center justify-center">
            {[
              { action: "prev", icon: <AiOutlineLeft size={18} /> },
              { action: "next", icon: <AiOutlineRight size={18} /> },
            ].map(({ action, icon }) => (
              <React.Fragment key={action}>
                <Button
                  name={icon}
                  onClick={() => calendarRef.current?.getApi()[action]()}
                  className="p-1 xs:p-2 lg:w-[40px] lg:h-[40px] flex items-center justify-center rounded-full border bg-white hover:bg-gray-100 outline-none cursor-pointer"
                />
                {/* Date Range */}
                {action === "prev" && (
                  <h2 className="text-sm font-semibold">{currentRange}</h2>
                )}{" "}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="w-full overflow-x-auto">
          <div className="min-w-[800px] sm:min-w-[900px]">
            <FullCalendar
              ref={calendarRef} // to set date range with manual header
              plugins={[timeGridPlugin, dayGridPlugin, interactionPlugin]}
              initialView="timeGridWeek" // initially week
              events={calenderEvent}
              height="auto"
              slotMinTime="06:00:00"
              slotMaxTime="23:59:00"
              allDaySlot={false}
              nowIndicator={true} // red line to indicate current time
              headerToolbar={false} // Hide default header
              datesSet={handleDatesSet} // Update range text
              eventContent={renderEventContent} // render cards in calendar
              eventTimeFormat={{
                hour: "2-digit",
                minute: "2-digit",
                hour12: dayAndYear ? true : false,
              }}
              displayEventEnd={true} // <-- important, shows the END time as well
            />
          </div>
        </div>
      </div>
      {/* Loader overlay (shows only when loading) */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/60 z-10">
          <Loader isBlue={true} padding={10} />
        </div>
      )}
    </div>
  );
});

export default Calendar;
