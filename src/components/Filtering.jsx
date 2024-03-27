import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Filtering = () => {
  return (
    <div className="w-full xl:w-1/2">
      <form className="flex items-center">
        <label className="sr-only">Search</label>
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <AiOutlineSearch className="w-6 h-6 dark:text-gray-400" />
          </div>
          <input
            type="text"
            id="simple-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-0 focus:border-gray-400 block w-full pl-10 p-2 dark:bg-gray-900 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-0 dark:focus:border-gray-700"
            placeholder="Search"
            required=""
          />
        </div>
      </form>
    </div>
  );
};

export default Filtering;
