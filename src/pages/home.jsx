import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { CgChevronLeft, CgChevronRight } from "react-icons/cg";
import DataTable from "../components/dataTable";
import Navbar from "../components/navbar";
import TabMenu from "../components/tabMenu";
import InvoiceForm from "../components/InvoiceForm";

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="max-w-screen-2xl mx-auto md:px-12 overflow-hidden dark:bg-gray-900 relative">
      {modalOpen && <InvoiceForm setModalOpen={setModalOpen} />}

      <Navbar />
      <TabMenu />
      <div className="h-full ">
        <h1 className="text-center text-lg md:text-2xl text-slate-700 dark:text-gray-300 capitalize font-bold tracking-wider my-4">
          Daily Invoice List
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
          <div className="w-full md:w-1/2">
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

          <div className="flex items-center gap-4 w-full md:w-auto">
            <button
              onClick={() => setModalOpen(true)}
              className="text-xs w-full md:text-sm text-gray-800 px-6 py-2 uppercase dark:text-gray-300 bg-blue-700 rounded-lg dark:bg-gray-900 border border-gray-400 dark:border-gray-700 hover:bg-gray-800"
            >
              add invoice
            </button>
            <select
              id="filter-field"
              className="bg-gray-900 border border-gray-700 text-gray-800 dark:text-gray-400 text-sm rounded-lg focus:ring-0 focus:border focus:dark:border-gray-700 w-full py-2"
            >
              {/* <option value={selected}>Choose category</option> */}
              <option value="Md. Shafiqul Islam">Md. Shafiqul Islam</option>
              <option value="Md. Masud Rana">Md. Masud Rana</option>
              <option value="Wasa Bill">wasa bill</option>
              <option value="Internet Bill">internet bill To</option>
            </select>
          </div>
        </div>
        {/* table data here */}
        <div className="overflow-x-auto mt-2">
          <DataTable />
        </div>
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
            <li>
              <a
                href="#"
                className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
              >
                1
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
              >
                2
              </a>
            </li>
            <li>
              <a
                href="#"
                aria-current="page"
                className="flex items-center justify-center text-sm z-10 py-2 px-3 leading-tight text-primary-600 bg-primary-50 border border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
              >
                3
              </a>
            </li>
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
                100
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
      </div>
    </div>
  );
};

export default Home;
