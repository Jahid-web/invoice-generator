import React from "react";
import { CgChevronLeft, CgChevronRight } from "react-icons/cg";

const Pagination = ({
  invoices,
  startIndex,
  endIndex,
  paginationNumbers,
  totalPages,
  paginate,
  prevPage,
  nextPage,
  currentPage,
}) => {
  return (
    <nav className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4">
      <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
        Showing
        <span className="font-semibold text-gray-900 dark:text-white px-2">
          {startIndex}-{endIndex}
        </span>
        of
        <span className="font-semibold text-gray-900 dark:text-white px-2">
          {invoices}
        </span>
      </span>

      <ul className="inline-flex items-stretch -space-x-px">
        <li onClick={() => prevPage()}>
          <a
            href="#"
            className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <span className="sr-only">Previous</span>
            <CgChevronLeft />
          </a>
        </li>
        {paginationNumbers.map((num) => (
          <li onClick={() => paginate(num)} key={num}>
            <a
              href="#"
              className={`flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ${
                currentPage === num ? "dark:bg-gray-800" : "dark:bg-gray-900"
              } dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white`}
            >
              {num}
            </a>
          </li>
        ))}

        <li onClick={() => nextPage()}>
          <a
            href="#"
            className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
          >
            <span className="sr-only">Next</span>
            <CgChevronRight />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
