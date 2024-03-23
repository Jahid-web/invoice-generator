import React from "react";
import { FaBars } from "react-icons/fa";
import { MdPerson } from "react-icons/md";
import { useAuthContext } from "../auth/authContextProvider";
import { Navigate } from "react-router-dom";

const Navbar = () => {
  const { currentUser, logout } = useAuthContext();

  return (
    <nav className=" bg-slate-400 dark:bg-gray-800 flex items-center justify-between gap-8  transition-all duration-200 ease-in-out lg:px-12 px-4 py-2">
      <div className="flex items-center gap-2">
        <div className="w-12 h-12 md:w-14 md:h-14 rounded-full flex justify-center items-center overflow-hidden object-cover ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            with="130"
            height="125"
            viewBox="0 0 176 212"
            version="1.1"
          >
            <path d="" stroke="none" fill="#ec2424" fillRule="evenodd" />
            <path
              d="M 13.001 5.123 C 11.626 5.672, 9.446 7.106, 8.155 8.310 C 2.770 13.338, 3 9.020, 3 105.049 C 3 203.642, 2.665 198.485, 9.373 203.270 L 12.500 205.500 88 205.500 L 163.500 205.500 166.627 203.270 C 173.393 198.444, 173.060 203.813, 172.766 104.139 C 172.503 15.015, 172.480 14.119, 170.438 11.385 C 169.304 9.866, 167.134 7.696, 165.616 6.562 C 162.954 4.573, 161.459 4.490, 123.466 4.217 L 84.075 3.934 83.751 75.717 C 83.511 128.946, 83.111 148.435, 82.203 151.118 C 78.714 161.431, 72.715 165.500, 61 165.500 C 55.197 165.500, 52.445 164.980, 48.838 163.203 C 41.555 159.615, 35.414 153.586, 32.018 146.689 C 27.731 137.979, 27.208 131.965, 29.954 122.925 C 31.873 116.608, 32.975 114.842, 38.332 109.497 C 42.669 105.169, 45.963 102.847, 49.428 101.671 C 59.180 98.364, 67.454 100.323, 66.807 105.785 C 66.524 108.172, 65.932 108.473, 59.341 109.578 C 49.946 111.154, 44.151 115.049, 40.600 122.176 C 33.123 137.179, 41.356 154.348, 57.064 156.509 C 63.160 157.347, 69.378 155.606, 71.946 152.341 C 73.975 149.762, 74 148.850, 74 76.865 L 74 4 44.750 4.063 C 27.816 4.100, 14.448 4.546, 13.001 5.123 M 116.718 101.037 C 107.943 103.229, 100.571 108.736, 96.449 116.176 C 93.703 121.134, 93.502 122.222, 93.523 132 C 93.542 140.766, 93.922 143.326, 95.824 147.500 C 99.940 156.533, 108.427 163.019, 118.621 164.924 C 124.205 165.967, 126.746 165.375, 127.549 162.844 C 128.447 160.015, 126.518 158.305, 121.598 157.567 C 115.445 156.644, 108.682 152.019, 105.469 146.538 C 102.144 140.864, 101.097 131.297, 103.041 124.352 C 104.820 117.998, 111.056 111.582, 117 109.990 C 122.576 108.496, 130.613 109.350, 133.275 111.719 C 135.848 114.009, 138 119.114, 138 122.927 L 138 125.919 129.750 126.210 C 116.372 126.681, 120.383 128.467, 135.518 128.778 C 151.128 129.100, 151.026 129.163, 149.063 120.391 C 145.986 106.639, 130.760 97.529, 116.718 101.037"
              stroke="none"
              fill="#ec242c"
              fillRule="evenodd"
            />
          </svg>
        </div>
        <span className="self-center md:text-2xl  whitespace-nowrap dark:text-slate-300 text-lg font-bold">
          DEL
        </span>
      </div>

      <div className="flex justify-center items-center gap-4">
        <FaBars className="text-lg dark:text-slate-100 cursor-pointer md:hidden" />
        <span className="text-slate-100 dark:text-gray-200 capitalize text-sm font-semibold">
          {currentUser?.displayName}
        </span>
        <span className="w-10 h-10 rounded-full flex justify-center items-center overflow-hidden border border-gray-400 dark:border-gray-700">
          <MdPerson className="text-gray-400 dark:text-gray-500 text-3xl" />
        </span>
        {currentUser && (
          <button
            onClick={() => logout()}
            className="text-xs px-4 py-1 rounded-md bg-gray-400 border border-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-600 text-gray-800 dark:text-gray-300 capitalize"
          >
            logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
