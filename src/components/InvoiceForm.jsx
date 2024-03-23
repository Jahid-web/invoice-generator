import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { LuLoader2 } from "react-icons/lu";
import SelectionOptionMenu from "./SelectionOptionMenu";
import InputField from "./InputField";
import useInvoice from "../hooks/useInvoice";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase.config";

const InvoiceForm = ({ setModalOpen }) => {
  const [invoiceData, setInvoiceData] = useState({
    category: "",
    project: "",
    payableTo: "",
    voucherNo: "",
    voucherDate: "",
    invoiceNo: "",
    description: "",
    billAmount: "",
    advanceAmount: "",
  });
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      const docRef = await addDoc(collection(db, "invoices"), invoiceData);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError("Failed to add new invoice!");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInvoiceData({
      ...invoiceData,
      invoiceNo: "123456",
      [name]: value,
    });
  };
  return (
    <div className="overflow-y-auto overflow-x-hidden  fixed top-0 right-0 left-0 z-50 bg-gray-800 bg-opacity-60 flex justify-center items-center w-full md:inset-0 h-full">
      <div className="relative p-4 w-full max-w-xl max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Create New Invoice
            </h3>
            <span>
              <AiOutlineClose
                className="dark:text-gray-400 cursor-pointer"
                onClick={() => setModalOpen(false)}
              />
            </span>
          </div>

          <form onSubmit={handleSubmit} className="p-4 md:p-5">
            {error && (
              <span className="text-sm text-red-400  text-center">{error}</span>
            )}
            <div className="grid gap-4 mb-4 grid-cols-2">
              <SelectionOptionMenu
                label={"Category"}
                name={"category"}
                options={["salary", "convence", "misc."]}
                value={invoiceData.category}
                onChange={handleChange}
              />
              <SelectionOptionMenu
                label={"Project"}
                name={"project"}
                options={["SAIA CTG", "Irshal Colony", "Jessore"]}
                value={invoiceData.project}
                onChange={handleChange}
              />
              <InputField
                label={"Payable TO"}
                type={"text"}
                name={"payableTo"}
                value={invoiceData.payableTo}
                onChange={handleChange}
              />
              <div className="col-span-2 sm:col-span-1">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Invoice No.
                </label>
                <input
                  type="number"
                  name="invoiceNo"
                  id="invoiceNo"
                  className="bg-gray-50  text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700  dark:text-white dark:focus:ring-0 dark:focus:border-gray-500"
                  value="43356"
                  required=""
                  readOnly
                  // defaultValue="123456"
                />
              </div>
              <InputField
                label={"Voucher No."}
                type={"text"}
                name={"voucherNo"}
                value={invoiceData.voucherNo}
                onChange={handleChange}
              />
              <InputField
                label={"Voucher Date"}
                type={"date"}
                name={"voucherDate"}
                value={invoiceData.voucherDate}
                onChange={handleChange}
              />
              <div className="col-span-2">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Description
                </label>
                <textarea
                  id="description"
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="description here"
                  name="description"
                  value={invoiceData.description}
                  onChange={handleChange}
                ></textarea>
              </div>
              <InputField
                label={"Bill Amount"}
                type={"number"}
                name={"billAmount"}
                value={invoiceData.billAmount}
                onChange={handleChange}
              />
              <InputField
                label={"Advance Amount"}
                type={"number"}
                name={"advanceAmount"}
                value={invoiceData.advanceAmount}
                onChange={handleChange}
              />
              <div className="col-span-2">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Upload file
                </label>
                <input
                  className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  id="file_input"
                  type="file"
                />
              </div>
            </div>
            <button
              type="submit"
              className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-0 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 "
            >
              {!loading ? (
                "Add new Invoice"
              ) : (
                <span className="flex items-center justify-center">
                  <LuLoader2 className="animate-spin h-5 w-5 mr-3" />
                  adding...
                </span>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InvoiceForm;
