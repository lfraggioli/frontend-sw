import React from "react";

interface PaginationProps {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  itemsPerPage,
  totalItems,
  onPageChange,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center mt-4">
      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => onPageChange(pageNumber)}
          className={`mr-2 ${
            currentPage === pageNumber ? "bg-blue-500" : "bg-gray-200"
          } hover:bg-gray-500 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center`}
        >
          {pageNumber}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
