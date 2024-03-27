import React, { useState } from "react";
import DataTable from "../components/dataTable";
import Navbar from "../components/navbar";
import TabMenu from "../components/tabMenu";
import InvoiceForm from "../components/InvoiceForm";
import Filtering from "../components/Filtering";

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="max-w-full mx-auto xl:px-12 px-2 dark:bg-gray-900 relative h-screen">
      {modalOpen && <InvoiceForm setModalOpen={setModalOpen} />}

      <Navbar />
      <TabMenu />
      <div className="">
        <h1 className="text-center text-lg md:text-2xl text-slate-700 dark:text-gray-300 capitalize font-bold tracking-wider my-4">
          Daily Invoice List
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
          <Filtering />

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
        <div className="overflow-x-auto mt-2 ">
          <DataTable setModalOpen={setModalOpen} />
        </div>
      </div>
    </div>
  );
};

export default Home;
