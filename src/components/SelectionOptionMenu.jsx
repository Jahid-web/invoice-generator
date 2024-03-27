import React from "react";

const SelectionOptionMenu = ({ label, options, name, value, onChange }) => {
  return (
    <div className="col-span-2 sm:col-span-1">
      <select
        id={label}
        name={name}
        value={value}
        onChange={onChange}
        autoComplete="off"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-0 dark:focus:border-gray-500"
      >
        {/* <option selected="">Select category</option> */}

        {options.map((op, i) => (
          <option key={i} value={op}>
            {op}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectionOptionMenu;
