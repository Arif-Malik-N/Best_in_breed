import type { LoaderProps } from "../utils/interfaces";

const Loader = ({ isBlue = false, padding = 0 }: LoaderProps) => {
  return (
    <div className={`flex justify-center items-center ${`py-${padding}`}`}>
      <div
        className={`w-7 h-7 border-4 border-t-transparent rounded-full animate-spin ${
          isBlue ? "border-brand-blue" : "border-white"
        }`}
      ></div>
    </div>
  );
};

export default Loader;
