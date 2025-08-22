const EventList = ({
  selectedDate = Date(),
  events = [],
  emptyMessage = "No sessions available.",
  scrollable = false, // controls scroll vs normal
  className = "", // background of event card
}) => {
  if (!events || events.length === 0) {
    return (
      <h3 className="xxs:text-sm sm:text-base text-red-400 py-5 font-semibold text-center">
        {emptyMessage}
      </h3>
    );
  }
  const currentDate = new Date(selectedDate);
  const dateAndMonth = currentDate.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
  });

  return (
    <div
      className={`${
        scrollable ? "overflow-auto max-h-[450px] lg:max-h-[325px]" : "mt-5"
      }`}
    >
      {events.map(({ name, image, description, startTime, endTime }, idx) => (
        <div
          key={idx}
          className={`flex items-center rounded-xl ${className} ${
            idx !== 0 && (scrollable ? "xxs:mt-2 lg:mt-3" : "xxs:mt-3 lg:mt-5")
          }`}
        >
          {image && (
            <img
              src={image}
              alt={name}
              className="w-[65px] h-[65px] rounded-xl object-cover"
            />
          )}
          <div className="space-y-1">
            <div
              className={`${
                scrollable ? "text-sm font-bold" : "text-base font-semibold"
              }`}
            >
              {name}
            </div>
            <div className="text-xs">{description}</div>
            <div className="text-xs">
              {dateAndMonth} | {startTime} - {endTime}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventList;
