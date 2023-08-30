import React, { useState } from "react";
import { PaginationStyle } from "./CustomPagination.style";

export const CustomPagination = ({
  productsPerPage,
  totalProducts,
  paginate,
  category,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalProducts / productsPerPage);
  const handlePageChange = (event, page) => {
    setCurrentPage(page);
    paginate(page, category);
  };

  return (
    <PaginationStyle
      sx={{ ml: "auto" }}
      count={totalPages}
      page={currentPage}
      onChange={handlePageChange}
      variant="outlined"
      shape="rounded"
    />
  );
};
