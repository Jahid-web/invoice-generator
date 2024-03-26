import { useEffect, useState } from "react";

export default function usePagination(invoices) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(5);

  const endIndex = currentPage * itemPerPage;
  const startIndex = endIndex - itemPerPage;
  const currentItems = invoices.slice(startIndex, endIndex);

  const paginationNumbers = [];

  for (let i = 1; i <= Math.ceil(invoices.length / itemPerPage); i++) {
    paginationNumbers.push(i);
  }

  const totalPages = Math.ceil(invoices.length / itemPerPage);
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
