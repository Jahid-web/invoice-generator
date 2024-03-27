import React, { useState } from "react";
import { MdOutlineAttachment } from "react-icons/md";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import useInvoice from "../hooks/useInvoice";
import Pagination from "../components/pagination";
import usePagination from "../hooks/usePagination";
import { formatMoney } from "../utils/appFeatures";

const DataTable = ({ setModalOpen, setEdit }) => {
  const [toggleInd, setToggleInd] = useState(null);
  const { invoices } = useInvoice();
  const {
    startIndex,
    endIndex,
    currentItems,
    paginationNumbers,
    totalPages,
    paginate,
    prevPage,
    nextPage,
    currentPage,
  } = usePagination(invoices);

  const handleClick = (id) => {
    setEdit(id);
  };

  return (
    <div>
      {!currentItems ? (
        "loading..."
      ) : (
        <>
          <table className="table-auto w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-800 dark:text-gray-300">
              <tr>
                <th className="px-4 py-1.5 w-[8rem] text-center border dark:border-x dark:border-gray-900">
                  Invoice No.
                </th>
                <th className="px-4 py-1.5 w-[13rem] text-center border dark:border-x dark:border-gray-900">
                  Payable TO
                </th>
                <th className="px-4 py-1.5 w-[8rem] text-center border dark:border-x dark:border-gray-900">
                  Memo No.
                </th>
                <th className="px-4 py-1.5 min-w-[26rem] text-center border dark:border-x dark:border-gray-900">
                  Description
                </th>
                <th className="px-4 py-1.5 w-[10rem] text-center border dark:border-x dark:border-gray-900">
                  Bill Amount
                </th>
                <th className="px-4 py-1.5 w-[10rem] text-center border dark:border-x dark:border-gray-900">
                  Advance Amount
                </th>
                <th className="px-4 py-1.5 w-[8rem] text-center border dark:border-x dark:border-gray-900">
                  View File
                </th>
                <th className="px-4 py-1.5 min-w-[8rem] text-center">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((item, i) => (
                <tr className="border-b dark:border-gray-700" key={i}>
                  <td className="px-4 py-2 text-center">{item.invoiceNo}</td>
                  <td className="px-4 py-2 text-center capitalize">
                    {item.payableTo}
                  </td>
                  <td className="px-4 py-2 text-center">{item.voucherNo}</td>
                  <td className="px-4 py-2 line-clamp-2">{item.description}</td>
                  <td className="px-4 py-2 text-right">
                    {formatMoney(item.billAmount)}
                  </td>
                  <td className="px-4 py-2 text-right">
                    {formatMoney(item.advanceAmount)}
                  </td>
                  <td className="px-4 py-1.5 flex justify-center items-center">
                    {item.preVoucher !== "" ? (
                      <a href={item.preVoucher} target="_blank">
                        <MdOutlineAttachment className="text-xl text-center cursor-pointer" />
                      </a>
                    ) : (
                      <span>Nothing</span>
                    )}
                  </td>
                  <td className="px-4 py-1.5 ">
                    <div className="flex flex-row items-center justify-center gap-2">
                      <button className="text-xs rounded-sm px-2 py-0.5 bg-gray-300 dark:bg-green-800/20 border border-gray-400 dark:border-gray-700 capitalize text-gray-800 dark:text-gray-400">
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
                          onClick={() => setToggleInd(i)}
                        />
                        {toggleInd === i && (
                          <div
                            className={`z-20 w-32 shadow-lg absolute right-full -top-1/2`}
                          >
                            <ul
                              // style={{ display: `${action ? "block" : "none"}` }}
                              className="w-full bg-slate-300 dark:bg-gray-800 rounded-sm text-sm divide-y divide-gray-400 dark:divide-gray-700"
                            >
                              <li className="cursor-pointer flex items-center justify-center dark:hover:bg-gray-900/75 py-1.5">
                                <span className="text-sm capitalize">
                                  delete
                                </span>
                              </li>
                              <li
                                onClick={() => {
                                  setModalOpen(true),
                                    setToggleInd(null),
                                    handleClick(item.id);
                                }}
                                className="cursor-pointer flex items-center justify-center dark:hover:bg-gray-900/75 py-1.5"
                              >
                                <span className="text-sm capitalize">edit</span>
                              </li>
                              <li className="cursor-pointer flex items-center justify-center dark:hover:bg-gray-900/75 py-1.5">
                                <span className="text-sm capitalize">
                                  archive
                                </span>
                              </li>
                            </ul>
                          </div>
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
        </>
      )}
    </div>
  );
};

export default DataTable;
