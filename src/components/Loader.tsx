import type { LoaderProps } from "../utils/interfaces";

const Loader = ({ isNormal = false }: LoaderProps) => {
  return (
    <div
      className={`flex justify-center items-center ${
        isNormal ? "py-10" : "py-0"
      }`}
    >
      <div
        className={`w-7 h-7 border-4 border-t-transparent rounded-full animate-spin ${
          isNormal ? "border-brand-blue" : "border-white"
        }`}
      ></div>
    </div>
  );
};

export default Loader;
