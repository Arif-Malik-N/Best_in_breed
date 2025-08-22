import React from "react";
import { notifications } from "../utils/arrays";

export default function Notifications() {
  return (
    <div className="py-5">
      <h1 className="text-center font-bold mb-6 text-xl">Notifications</h1>

      <div>
        {notifications.map(({ id, img, name, description, time }) => (
          <div
            key={id}
            className="flex items-center gap-2 sm:gap-4 py-2 sm:py-3 px-2 sm:px-5 border-b border-gray-200 last:border-none"
          >
            <img
              src={img}
              alt={name}
              className="w-12 h-12 sm:w-20 sm:h-20 rounded-full object-cover"
            />
            <div className="flex flex-col flex-grow">
              <span className="text-sm sm:text-base font-medium text-gray-800">
                {name}
              </span>
              <span className="text-xs sm:text-sm text-gray-600">
                {description}
              </span>
              <small className="text-xs text-gray-650 sm:mt-1">{time}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
