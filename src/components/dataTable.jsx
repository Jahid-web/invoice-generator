import React, { useState } from "react";
import { MdOutlineAttachment } from "react-icons/md";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import useInvoice from "../hooks/useInvoice";
import Pagination from "../components/pagination";

const DataTable = () => {
  const [action, setAction] = useState(false);
  const {
    invoices,
    startIndex,
    endIndex,
    currentItems,
    paginationNumbers,
    totalPages,
    paginate,
    prevPage,
    nextPage,
    currentPage,
  } = useInvoice();
  return (
    <div>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-800 dark:text-gray-300">
          <tr>
            <th className="px-4 py-3">Invoice</th>
            <th className="px-4 py-3">Payable TO</th>
            <th className="px-4 py-3">Previous Voucher</th>
            <th className="px-4 py-3">Description</th>
            <th className="px-4 py-3">Bill Amount</th>
            <th className="px-4 py-3">Advance Amount</th>
            <th className="px-4 py-3">View Voucher</th>
            <th className="px-4 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item, i) => (
            <tr className="border-b dark:border-gray-700" key={i}>
              <td className="px-4 py-3">{item.invoiceNo}</td>
              <td className="px-4 py-3">{item.payableTo}</td>
              <td className="px-4 py-3">{item.voucherNo}</td>
              <td className="px-4 py-3">${item.description}</td>
              <td className="px-4 py-3">${item.billAmount}</td>
              <td className="px-4 py-3 text-right">{item.advanceAmount}</td>
              <td className="px-4 py-3 flex justify-center items-center">
                <MdOutlineAttachment className="text-xl text-center cursor-pointer" />
              </td>
              <td className="px-4 py-3 ">
                <div className="flex flex-row items-center justify-center gap-2">
                  <button className="text-xs rounded-lg px-2 py-0.5 bg-gray-300 dark:bg-gray-800 border border-gray-400 dark:border-gray-700 capitalize text-gray-800 dark:text-gray-400">
                    approve
                  </button>
                  {/* <button
                  onClick={(e) => setAction(!action)}
                  className="text-xs uppercase rounded-sm bg-green-500/10 dark:bg-gray-500/20 dark:text-green-500 px-4 py-.5"
                  >
                  action
                </button> */}
                  <span className="relative">
                    <HiOutlineDotsHorizontal
                      className="text-lg cursor-pointer "
                      onClick={(e) => setAction(i)}
                    />
                    {action === i && (
                      <ul
                        // style={{ display: `${action ? "block" : "none"}` }}
                        className="z-20 absolute right-full w-32 py-1 top-2 space-y-2 bg-slate-300 dark:bg-gray-800 rounded-sm text-sm divide-y divide-gray-400 dark:divide-gray-700"
                      >
                        <li className="cursor-pointer flex items-center justify-center">
                          <span className="text-sm capitalize">delete</span>
                        </li>
                        <li className="cursor-pointer flex items-center justify-center">
                          <span className="text-sm capitalize">edit</span>
                        </li>
                        <li className="cursor-pointer flex items-center justify-center">
                          <span className="text-sm capitalize">archive</span>
                        </li>
                      </ul>
                    )}
                  </span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        currentPage={currentPage}
        prevPage={prevPage}
        nextPage={nextPage}
        invoices={invoices.length}
        startIndex={startIndex}
        endIndex={endIndex}
        paginate={paginate}
        paginationNumbers={paginationNumbers}
        totalPages={totalPages}
      />
    </div>
  );
};

export default DataTable;
