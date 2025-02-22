import { useEffect, useState } from "react";

export type PaginateProps<T> = {
  itemsPerPage: number;
  items: T[];
};

export default function usePaginate<T>({
  itemsPerPage,
  items,
}: PaginateProps<T>) {
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedItems = items.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const nextPage = () => {
    if (currentPage >= totalPages) return;

    setCurrentPage((currentPage) => currentPage + 1);
  };

  const previousPage = () => {
    if (currentPage <= 1) return;
    setCurrentPage((currentPage) => currentPage - 1);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  return {
    paginatedItems,
    currentPage,
    totalPages,
    nextPage,
    previousPage,
  };
}
