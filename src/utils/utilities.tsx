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

// Utility to get today's date string
const getTodayStr = () => new Date().toISOString().split("T")[0];

// Utility to check if date is in the past
export const isPastDate = (dateStr: string) =>
  new Date(dateStr) < new Date(getTodayStr());

export const fetchPlaces = async (input: string) => {
  const apiUrl = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(
    input
  )}&key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}`;

  try {
    const response = await fetch(apiUrl);
    const json = await response.json();

    if (json.predictions) {
      return json.predictions;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching places:", error);
  }
};

export const fetchPlaceDetails = async (placeId: string) => {
  const apiUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${
    import.meta.env.VITE_GOOGLE_MAPS_API_KEY
  }`;

  try {
    const response = await fetch(apiUrl);
    const json = await response.json();
    if (json.result) {
      return json.result?.address_components[2]?.long_name || "";
    }
  } catch (error) {
    console.error("Error fetching place details:", error);
  }
};

// regix
export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// export const phoneRegex = /^(\+1\s?)?(\(?\d{3}\)?[\s.-]?)?\d{3}[\s.-]?\d{4}$/;
export const phoneRegex = /^(\+?1[\s.-]?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
export const addressRegex = /^\d+\s[A-z]+\s[A-z]+.*$/;
export const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
export const mailingAddressRegex =
  /^(?:\d+\s[A-Za-z0-9\s.#,]+(?:\s[A-Za-z]+)?,\s[A-Za-z\s]+,\s[A-Z]{2}\s\d{5}(?:-\d{4})?)$/;
// /^[a-zA-Z0-9\s,.\-#]+(?:\s+[A-Z]{2}\s+\d{5}(?:-\d{4})?)?$/;
