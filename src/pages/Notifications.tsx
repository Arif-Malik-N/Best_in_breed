import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/store";
import {
  getNotifications,
  markAllNotifyRead,
} from "../store/notification/notificationAction";
import { avatar } from "../assets/images";
import Loader from "../components/Loader";

export default function Notifications() {
  const dispatch = useAppDispatch();

  const { notifications } = useAppSelector((state) => state.notificationSlices);
  const { isLoading } = useAppSelector((state) => state.commonSlice);

  useEffect(() => {
    (async () => {
      const response = await dispatch(markAllNotifyRead()).unwrap();
      if (response?.success) dispatch(getNotifications());
    })();
  }, []);

  return (
    <div className="py-5">
      <h1 className="font-bold mb-6 text-xl">Notifications</h1>

      <div>
        {isLoading ? (
          <Loader isBlue={true} padding={10} />
        ) : notifications?.result?.length === 0 ? (
          <h3 className="xxs:text-sm sm:text-base text-red-400 py-5 font-semibold text-center">
            No new notifications yet
          </h3>
        ) : (
          notifications?.result?.map(
            ({ _id, clientPictureUrl, name, message, createdAgo }) => (
              <div
                key={_id}
                className="flex items-center gap-2 sm:gap-4 py-2 sm:py-3 px-2 sm:px-5 border-b border-gray-200 last:border-none"
              >
                <img
                  src={clientPictureUrl || avatar}
                  alt={name}
                  className="w-12 h-12 sm:w-20 sm:h-20 rounded-full object-cover"
                />
                <div className="flex flex-col flex-grow">
                  <span className="text-sm sm:text-base font-bold text-gray-800">
                    {name}
                  </span>
                  <span className="text-xs sm:text-sm text-gray-600">
                    {message}
                  </span>
                  <small className="text-xs text-gray-650 sm:mt-1">
                    {createdAgo}
                  </small>
                </div>
              </div>
            )
          )
        )}
      </div>
    </div>
  );
}
