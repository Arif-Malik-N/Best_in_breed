import { Link } from "react-router-dom";
import { notification, profile } from "../assets/images";
import { AiOutlineDown } from "react-icons/ai";
import type { ProfileAndNotProps } from "../utils/interfaces";

const ProfileAndNotification: React.FC<ProfileAndNotProps> = ({
  className = "",
}) => {
  return (
    <>
      {/* Profile */}
      <div className={className}>
        <Link to="/profile">
          <div className="flex cursor-pointer">
            <div className="bg-gray-200 rounded-full">
              <img src={profile} alt="profile" />
            </div>
            <AiOutlineDown className="ml-1 mt-4" />
          </div>
        </Link>
      </div>

      {/* Notification */}
      <Link to="/notification" className="outline-none">
        <div className={className}>
          <div className="relative bg-gray-400 w-10 h-10 rounded-full flex items-center justify-center">
            <img src={notification} alt="notification" />
            {/* White circle background for red dot */}
            <span className="absolute top-[7px] right-[7px] w-2.5 h-2.5 bg-white rounded-full flex items-center justify-center">
              <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
            </span>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProfileAndNotification;
