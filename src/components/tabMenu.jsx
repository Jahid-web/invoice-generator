import React from "react";

function TabMenu() {
  return (
    <ul className=" flex items-center my-4 space-x-2">
      <li className="text-xs cursor-pointer border border-gray-400 dark:border-gray-700 font-semibold text-gray-800 dark:text-gray-400 uppercase px-4 py-2 rounded-lg hover:bg-gray-800">
        daily invoice list
      </li>
      <li className="text-xs cursor-pointer border border-gray-400 dark:border-gray-700 font-semibold text-gray-800 dark:text-gray-400 uppercase px-4 py-2 rounded-lg hover:bg-gray-800">
        Approved invoice list
      </li>
    </ul>
  );
}

export default TabMenu;
