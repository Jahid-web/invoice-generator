import {
  addDoc,
  collection,
  updateDoc,
  onSnapshot,
  doc,
  setDoc,
} from "firebase/firestore";
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

  const updateInvoice = async (id, data) => {
    try {
      console.log(id, data);
      setError("");
      setLoading(true);
      const updateRef = doc(db, "invoices", id);
      await updateDoc(updateRef, data, { marge: true });
      setLoading(false);
    } catch (error) {
      setError("Failed to update the document!");
    }
  };

  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, "invoices"),
      (snap) => {
        let list = [];
        setError("");
        setLoading(true);
        snap.docs.forEach((doc) => list.push({ id: doc.id, ...doc.data() }));
        setInvoices(list);
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
    updateInvoice,
  };
}
