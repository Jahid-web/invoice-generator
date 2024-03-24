import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase.config";
import { useEffect, useState } from "react";

export default function useInvoice() {
  const [invoices, setInvoices] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(1);
  // const [startPageIndex, setStartPageIndex] = useState(0);
  // const [endPageIndex, setEndPageIndex] = useState(itemPerPage - 1);

  const endIndex = currentPage * itemPerPage;
  const startIndex = endIndex - itemPerPage;
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

  const totalPages = Math.ceil(invoices.length / itemPerPage);

  // const displayPage = (pageNo) => {
  //   setCurrentPage(pageNo);
  //   let lastPageIndex = itemPerPage * pageNo - 1;
  //   let firstPageIndex = itemPerPage * pageNo - itemPerPage;

  //   setStartPageIndex(firstPageIndex);

  //   if (lastPageIndex > invoices.length) {
  //     setEndPageIndex(invoices.length - 1);
  //   } else {
  //     setEndPageIndex(lastPageIndex);
  //   }
  // };

  const paginate = (pageNo) => {
    setCurrentPage(pageNo);
  };

  // previous page
  const prevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== Math.ceil(invoices.length / itemPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  return {
    invoices,
    currentPage,
    totalPages,
    paginate,
    currentItems,
    startIndex,
    endIndex,
    paginationNumbers,
    prevPage,
    nextPage,
  };
}
