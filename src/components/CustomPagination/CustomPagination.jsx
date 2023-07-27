import React, { useState } from "react";
import { Pagination } from "@mui/material";

export const CustomPagination = ({
  productsPerPage,
  totalProducts,
  paginate,
  category,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalProducts / productsPerPage);
console.log("productsPerPage", productsPerPage)
console.log("totalPages", totalPages)
  const handlePageChange = (event, page) => {
    setCurrentPage(page);
    paginate(page, category);
  };

  return (
    <Pagination
      sx={{ ml: "auto" }}
      count={totalPages}
      page={currentPage}
      onChange={handlePageChange}
      variant="outlined"
      shape="rounded"
    />
  );
};
