import React from "react";

const InputField = ({ label, type, name, value, onChange }) => {
  return (
    <div className="col-span-2 sm:col-span-1">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-400 focus:border-gray-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-0 dark:focus:border-gray-500"
        placeholder="Type product name"
        required=""
      />
    </div>
  );
};

export default InputField;
