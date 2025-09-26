import React from "react";
import Button from "../buttons/Button";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { useAppDispatch } from "../../store/store";
import { getClientsWithContract } from "../../store/client/clientAction";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages }) => {
  const dispatch = useAppDispatch();

  const handlePaginationBtnClicked = (page: number) => {
    const data = { searchName: "", page: page, perPage: 10 };
    dispatch(getClientsWithContract(data));
  };

  return (
    <div className="flex justify-end items-center gap-2 sm:gap-4 pt-4 sm:pt-8 sm:pr-10">
      <span className="text-sm text-gray-700">Page</span>
      {/* Previous */}
      {currentPage > 1 && (
        <Button
          name={<FaAngleLeft />}
          className="w-[28px] h-[28px] flex items-center justify-center rounded-md border bg-white text-gray-700 hover:bg-gray-100 outline-none"
          onClick={() => handlePaginationBtnClicked(currentPage - 1)}
        />
      )}
      {/* Page numbers */}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <Button
          key={page}
          name={page}
          className={`w-[28px] h-[28px] flex items-center justify-center rounded-md border text-sm outline-none ${
            currentPage === page
              ? "bg-brand-blue text-white"
              : "bg-white text-gray-700 hover:bg-gray-100"
          }`}
          onClick={() => handlePaginationBtnClicked(page)}
        />
      ))}
      {/* Next */}
      {currentPage < totalPages && (
        <Button
          name={<FaAngleRight />}
          className="w-[28px] h-[28px] flex items-center justify-center rounded-md border bg-white text-gray-700 hover:bg-gray-100 outline-none"
          onClick={() => handlePaginationBtnClicked(currentPage + 1)}
        />
      )}
    </div>
  );
};

export default Pagination;
