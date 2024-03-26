import { addDoc, collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "../firebase.config";
import { useEffect, useState } from "react";
import { getInvoiceNo } from "../utils/appFeatures";
import Toastify from "../utils/Toastify";

export default function useInvoice(uploadedUrl) {
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const [getInvNo, setGetInvNo] = useState(getInvoiceNo());

  const addNewInvoice = async (invoiceData) => {
    try {
      setError("");
      setLoading(true);
      invoiceData.invoiceNo = getInvNo;
      invoiceData.preVoucher = uploadedUrl;
      console.log(invoiceData);
      await addDoc(collection(db, "invoices"), invoiceData);
      Toastify({
        type: "success",
        message: "Invoice Save successfully!",
        position: "top-center",
      });
      setLoading(false);
    } catch (err) {
      console.log(err);

      setLoading(false);
      setError("Failed to add new invoice!");
      Toastify({
        type: "error",
        message: "Failed to add new invoice!",
        position: "top-center",
      });
    }
  };

  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, "invoices"),
      (snap) => {
        setError("");
        setLoading(true);
        const data = snap.docs.map((doc) => doc.data());
        setInvoices(data);
        setLoading(false);
      },
      (err) => {
        setLoading(false);
        setError("Someting went wrong!");
        console.log(err);
      }
    );

    return () => unsub();
  }, []);

  return {
    invoices,
    addNewInvoice,
    error,
    loading,
    getInvNo,
  };
}
