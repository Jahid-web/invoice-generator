import React from "react";
import { CgChevronLeft, CgChevronRight } from "react-icons/cg";
import useInvoice from "../hooks/useInvoice";

const Pagination = () => {
  const { paginationNumbers, totalPages } = useInvoice();

  return (
    <nav className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4">
      <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
        Showing
        <span className="font-semibold text-gray-900 dark:text-white px-2">
          1-10
        </span>
        of
        <span className="font-semibold text-gray-900 dark:text-white px-2">
          1000
        </span>
      </span>

      <ul className="inline-flex items-stretch -space-x-px">
        <li>
          <a
            href="#"
            className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <span className="sr-only">Previous</span>
            <CgChevronLeft />
          </a>
        </li>
        {paginationNumbers.map((num) => (
          <li key={num}>
            <a
              href="#"
              className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
            >
              {num}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#"
            className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
          >
            ...
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
          >
            {totalPages}
          </a>
        </li>

        <li>
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
