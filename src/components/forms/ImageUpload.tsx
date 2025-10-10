import React from "react";
import { FaRegEdit } from "react-icons/fa";
import type { ImageUploadProps } from "../../utils/interfaces";
import { avatar } from "../../assets/images";

const ImageUpload: React.FC<ImageUploadProps> = React.memo(
  ({ image, name, handleImageUpdate }) => {
    const [isImageLoaded, setIsImageLoaded] = React.useState(false);

    return (
      <div className="place-items-center">
        <div className="xxs:w-[100px] xxs:h-[100px] md:w-[144px] md:h-[144px] rounded-full relative">
          <img
            src={isImageLoaded ? image || avatar : avatar}
            className="xxs:w-[100px] xxs:h-[100px] md:w-[144px] md:h-[144px] rounded-full object-cover"
            onLoad={() => setIsImageLoaded(true)}
          />

          {/* Edit Icon with file input */}
          <div className="absolute top-0 right-[calc(50%-65px)]">
            <label htmlFor="profile-upload" className="cursor-pointer">
              <div className="bg-white rounded-full p-1">
                <div className="bg-brand-blue rounded-full p-1.5">
                  <FaRegEdit className="text-white w-5 h-5" />
                </div>
              </div>
            </label>
            <input
              id="profile-upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpdate}
            />
          </div>
        </div>
        {name && (
          <div className="xxs:text-lg sm:text-xl lg:text-2xl font-bold mt-3">
            {name}
          </div>
        )}
      </div>
    );
  }
);

export default ImageUpload;
