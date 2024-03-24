import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase.config";
import { useEffect, useState } from "react";

export default function useInvoice() {
  const [invoices, setInvoices] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(10);

  const totalPages = Math.ceil(invoices.length / itemPerPage);
  const startIndex = (currentPage - 1) * itemPerPage;
  const endIndex = startIndex + itemPerPage;
  const currentItems = invoices.slice(startIndex, endIndex);

  const paginationNumbers = [];

  useEffect(() => {
    const getInvoices = async () => {
      const invoices = collection(db, "invoices");
      const snapshot = await getDocs(invoices);
      const data = snapshot.docs.map((doc) => doc.data());
      setInvoices(data);
    };

    getInvoices();
  }, []);

  for (let i = 1; i <= Math.ceil(invoices.length / itemPerPage); i++) {
    paginationNumbers.push(i);
  }

  return { invoices, currentItems, totalPages, paginationNumbers };
}
