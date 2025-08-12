import React, { useState, useMemo, useEffect } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { augustDataWithImage, septemberDataWithImage } from "../utils/arrays";
import type { EventItem } from "../utils/interfaces";

const UpcomminSession = () => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth()); // in number
  const [currentYear, setCurrentYear] = useState(today.getFullYear()); // in number
  const [selectedDate, setSelectedDate] = useState(today); // by default today and selected should be same
  const [weekIndex, setWeekIndex] = useState(0);
  const [isSelectFromPagination, setIsSelectFromPagination] = useState(false);
  const [events, setEvents] = useState<EventItem[]>([]);

  // Get month name
  const monthName = new Date(currentYear, currentMonth).toLocaleString(
    "default",
    {
      month: "short",
      year: "numeric",
    }
  );

  // Days in current month
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  // Create array of dates for the month
  const allDates = useMemo(() => {
    const arr = [];
    for (let i = 1; i <= daysInMonth; i++) {
      arr.push(new Date(currentYear, currentMonth, i));
    }
    return arr;
  }, [currentMonth, currentYear, daysInMonth]);

  // Split into weeks starting from 1st
  const weeks = useMemo(() => {
    const chunked = [];
    for (let i = 0; i < allDates.length; i += 7) {
      chunked.push(allDates.slice(i, i + 7));
    }
    return chunked;
  }, [allDates]);

  // Select today's week on load
  useEffect(() => {
    const todayIndex = weeks.findIndex((week) =>
      week.some(
        (date) =>
          date.getDate() === selectedDate.getDate() &&
          date.getMonth() === selectedDate.getMonth() &&
          date.getFullYear() === selectedDate.getFullYear()
      )
    );
    if (todayIndex !== -1) {
      setWeekIndex(todayIndex);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [weeks]);

  // Get events for selected date
  useEffect(() => {
    if (!isSelectFromPagination) {
      const events =
        augustDataWithImage?.[
          `${selectedDate.getDate()}-${monthName.toLowerCase()}`
        ] || [];
      setEvents(events);
    } else {
      const events =
        septemberDataWithImage?.[`1-${monthName.toLowerCase()}`] || [];
      setEvents(events);
      setSelectedDate(weeks[0]?.filter((date) => date)[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentMonth, selectedDate, monthName]);

  // Handle week navigation
  const prevWeek = () => setWeekIndex((prev) => Math.max(prev - 1, 0));
  const nextWeek = () =>
    setWeekIndex((prev) => Math.min(prev + 1, weeks.length - 1));

  // Handle month navigation
  const prevMonth = () => {
    setIsSelectFromPagination(true);
    setCurrentMonth((prev) => {
      if (prev === 0) {
        setCurrentYear((y) => y - 1);
        return 11;
      }
      return prev - 1;
    });
    setWeekIndex(0);
  };
  const nextMonth = () => {
    setIsSelectFromPagination(true);
    setCurrentMonth((prev) => {
      if (prev === 11) {
        setCurrentYear((y) => y + 1);
        return 0;
      }
      return prev + 1;
    });
    setWeekIndex(0);
  };

  const handleDateChange = (value: string) => {
    setIsSelectFromPagination(false);
    if (value) {
      const dateObj = new Date(value);
      setSelectedDate(dateObj);
      setCurrentMonth(dateObj.getMonth()); // update month
      setCurrentYear(dateObj.getFullYear()); // update year

      // update weekIndex to show the selected date's week
      const weekIdx = weeks.findIndex((week) =>
        week.some(
          (d) =>
            d.getDate() === dateObj.getDate() &&
            d.getMonth() === dateObj.getMonth() &&
            d.getFullYear() === dateObj.getFullYear()
        )
      );
      if (weekIdx !== -1) {
        setWeekIndex(weekIdx);
      }
    }
  };

  return (
    <div className="col-span-3 lg:col-span-1 rounded-xl bg-white border xxs:mt-5 lg:mt-0 xxs:p-2 sm:p-3">
      <h1 className="text-lg font-bold mt-4 mb-2">Upcoming Sessions</h1>
      {/* Header */}
      <div className="flex justify-between place-items-center my-3">
        <div className="flex items-center gap-2">
          <input
            type="date"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleDateChange(e.target.value)
            }
            className="w-[22px] text-brand-blue cursor-pointer focus:outline-none"
          />

          <h1 className="xxs:text-lg sm:text-xl font-semibold text-brand-blue">
            {monthName}
          </h1>
        </div>
        <div className="flex gap-2">
          <AiOutlineLeft
            className="text-brand-blue cursor-pointer"
            onClick={prevMonth}
          />
          <AiOutlineRight
            className="text-brand-blue cursor-pointer"
            onClick={nextMonth}
          />
        </div>
      </div>

      {/* Week navigation */}
      <div className="flex justify-evenly items-center mt-6 xxs:mb-3 lg:mb-6 overflow-x-auto">
        <div>
          <AiOutlineLeft
            className="text-brand-blue cursor-pointer"
            onClick={prevWeek}
          />
        </div>
        <div className="flex gap-1 2xl:gap-1.5">
          {weeks[weekIndex]?.map((date) => {
            const isSelected =
              date.getDate() === selectedDate.getDate() &&
              date.getMonth() === selectedDate.getMonth();
            return (
              <div
                key={date.toISOString()}
                onClick={() => {
                  setSelectedDate(date);
                  setIsSelectFromPagination(false);
                }}
                className={`xxs:w-[35px] xxs:h-[40px] sm:w-[45px] sm:h-[45px] text-center pt-1 rounded-lg cursor-pointer ${
                  isSelected ? "bg-brand-blue text-white" : "bg-gray-400"
                }`}
              >
                <div className="xxs:text-xs sm:text-xs">
                  {date.toLocaleDateString("default", { weekday: "short" })}
                </div>
                <div className="xxs:text-xs sm:text-xs font-bold">
                  {date.getDate()}
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <AiOutlineRight
            className="text-brand-blue cursor-pointer"
            onClick={nextWeek}
          />
        </div>
      </div>

      {/* Events list */}
      {events.length > 0 ? (
        <div className="overflow-auto max-h-[450px] lg:max-h-[325px]">
          {events.map((ev, idx) => (
            <div
              key={idx}
              className={`flex items-center gap-3 p-2 bg-gray-400 rounded-xl ${
                idx !== 0 && "xxs:mt-2 lg:mt-3"
              }`}
            >
              <img
                src={ev.image}
                alt={ev.name}
                className="w-[65px] h-[65px] rounded-xl object-cover"
              />
              <div className="space-y-1">
                <div className="text-sm font-bold">{ev.name}</div>
                <div className="text-xs">{ev.description}</div>
                <div className="text-xs">
                  {ev.startTime} - {ev.endTime}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h3 className="xxs:text-sm sm:text-base text-red-400 py-5 font-semibold text-center">
          No sessions for this date.
        </h3>
      )}
    </div>
  );
};

export default UpcomminSession;
