import React from "react";
import { FaRegEdit } from "react-icons/fa";
import type { ImageUploadProps } from "../../utils/interfaces";
import { avatar, client1 } from "../../assets/images";

const ImageUpload: React.FC<ImageUploadProps> = ({
  image,
  name,
  handleImageUpdate,
}) => {
  return (
    <div className="place-items-center">
      <div className="bg-brand-blue xxs:w-[100px] xxs:h-[100px] md:w-[144px] md:h-[144px] rounded-full relative">
        <img
          src={image || avatar}
          className="xxs:w-[100px] xxs:h-[100px] md:w-[144px] md:h-[144px] rounded-full object-cover"
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
};

export default ImageUpload;
