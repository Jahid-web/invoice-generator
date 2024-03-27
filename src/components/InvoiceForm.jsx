import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { LuLoader2 } from "react-icons/lu";
import SelectionOptionMenu from "./SelectionOptionMenu";
import InputField from "./InputField";
import { storage } from "../firebase.config";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import useInvoice from "../hooks/useInvoice";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FiCheck } from "react-icons/fi";
import { category } from "../data/data";
import { projectName } from "../data/data";

const InvoiceForm = ({ setModalOpen, id, data }) => {
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
    preVoucher: "",
  });
  const [uploadedUrl, setUploadedUrl] = useState("");
  const [uploadFile, setUploadFile] = useState();
  const [progressStatus, setProgressStatus] = useState();
  const { addNewInvoice, error, loading, getInvNo, updateInvoice } =
    useInvoice(uploadedUrl);
  const [editId, setEditId] = useState(id);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        await updateInvoice(editId, invoiceData);
        setModalOpen(false);
        setEditId("");
      } else {
        await addNewInvoice(invoiceData);
        setModalOpen(false);
      }
    } catch (err) {
      console.log(err);
    }

    setInvoiceData({
      category: "",
      project: "",
      payableTo: "",
      voucherNo: "",
      voucherDate: "",
      invoiceNo: "",
      description: "",
      billAmount: "",
      advanceAmount: "",
      preVoucher: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInvoiceData({
      ...invoiceData,
      [name]: value,
    });
  };

  useEffect(() => {
    const uploadFiletoStorage = () => {
      const fileName = `${getInvNo}-${uploadFile.name}`;
      const uploadRef = ref(storage, `voucher/${fileName}`);
      const uploadTask = uploadBytesResumable(uploadRef, uploadFile);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgressStatus(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (err) => {
          console.log(err);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            setUploadedUrl(url);
          });
        }
      );
    };
    uploadFile && uploadFiletoStorage();
  }, [uploadFile]);

  useEffect(() => {
    if (editId) {
      const invoice = data.filter((item) => item.id === id);
      setInvoiceData(invoice[0]);
      setEditId("");
    }
  }, [editId]);

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
            {/* {error && (
              <span className="text-sm text-red-400  text-center">{error}</span>
            )} */}
            <div className="grid gap-4 mb-4 grid-cols-2">
              <SelectionOptionMenu
                label={"Category"}
                name={"category"}
                options={category}
                value={invoiceData.category}
                onChange={handleChange}
                htmlFor="category"
              />
              <SelectionOptionMenu
                label={"Project"}
                name={"project"}
                options={projectName}
                value={invoiceData.project}
                onChange={handleChange}
                htmlFor="project"
              />
              <InputField
                label={"Payable TO"}
                type={"text"}
                name={"payableTo"}
                value={invoiceData.payableTo}
                onChange={handleChange}
                htmlFor="payableTo"
              />
              <div className="col-span-2 sm:col-span-1">
                <input
                  type="number"
                  name="invoiceNo"
                  id="invoiceNo"
                  className="bg-gray-50  text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700  dark:text-white dark:focus:ring-0 dark:focus:border-gray-500"
                  value={invoiceData.invoiceNo || getInvNo}
                  required=""
                  readOnly
                  autoComplete="off"
                />
              </div>
              <InputField
                label={"Voucher No."}
                type={"text"}
                name={"voucherNo"}
                value={invoiceData.voucherNo}
                onChange={handleChange}
                htmlFor="voucherNo"
              />
              <InputField
                label={"Voucher Date"}
                type={"date"}
                name={"voucherDate"}
                value={invoiceData.voucherDate}
                onChange={handleChange}
                htmlFor="voucherDate"
              />
              <div className="col-span-2">
                <textarea
                  id="description"
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="description here"
                  name="description"
                  value={invoiceData.description}
                  onChange={handleChange}
                  autoComplete="off"
                ></textarea>
              </div>
              <InputField
                label={"Bill Amount"}
                type={"number"}
                name={"billAmount"}
                value={invoiceData.billAmount}
                onChange={handleChange}
                htmlFor="billAmount"
              />
              <InputField
                label={"Advance Amount"}
                type={"number"}
                name={"advanceAmount"}
                value={invoiceData.advanceAmount}
                onChange={handleChange}
                htmlFor="advanceAmount"
              />
              <div className="col-span-2">
                <div className="flex items-center gap-2 pr-3">
                  <input
                    className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    id="file_input"
                    type="file"
                    onChange={(e) => setUploadFile(e.target.files[0])}
                    autoComplete="off"
                  />
                  {uploadFile && (
                    <>
                      {progressStatus !== null && progressStatus < 100 ? (
                        <AiOutlineLoading3Quarters className="text-2xl text-gray-500 animate-spin" />
                      ) : (
                        <FiCheck className="text-2xl text-green-600" />
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
            <button
              disabled={progressStatus !== null && progressStatus < 100}
              type="submit"
              className={`${
                progressStatus !== null && progressStatus < 100
                  ? "bg-blue-700 opacity-30"
                  : "bg-blue-700 "
              } text-white inline-flex items-center  hover:bg-blue-800 focus:ring-0 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700`}
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
