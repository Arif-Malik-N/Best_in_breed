export const formatTimeTo12Hour = (value: string): string => {
  const [hourStr, minuteStr] = value?.split(":");

  let hour = Number(hourStr);
  const minute = Number(minuteStr);

  const ampm = hour >= 12 ? "PM" : "AM";
  hour = hour % 12 || 12; // Convert '0' to '12' and keep others in 12-hour format

  return `${String(hour).padStart(2, "0")}:${String(minute).padStart(
    2,
    "0"
  )} ${ampm}`;
};

export const formatTimeRangeTo12Hour = (range: string): string => {
  const [start, end] = range?.split(" - ");
  return start && end
    ? `${formatTimeTo12Hour(start)} - ${formatTimeTo12Hour(end)}`
    : range;
};

// regix
export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const phoneRegex = /^(\+1\s?)?(\(?\d{3}\)?[\s.-]?)?\d{3}[\s.-]?\d{4}$/;
export const addressRegex = /^\d+\s[A-z]+\s[A-z]+.*$/;
export const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
