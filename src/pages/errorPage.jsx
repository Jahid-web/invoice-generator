import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="dark:bg-gray-900 h-screen w-screen flex flex-col justify-center items-center gap-4">
      <h1 className="text-gray-900 dark:text-gray-400 text-2xl">
        404 Not Found
      </h1>
      <Link className="dark:text-slate-300 text-sm capitalize" to={"/login"}>
        back to login page
      </Link>
    </div>
  );
};

export default ErrorPage;
