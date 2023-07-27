import React, { useState } from "react";
import { Stack } from "@mui/material";
import { ReactComponent as ArrowSvg } from "../Header/assest/arrow-forward.svg";
import { ReactComponent as ArrowBAckSvg } from "../Header/assest/arrow-back.svg";
import { Button } from "../CustomPagination/CustomPagination.style";

export const CustomPagination = ({ productsPerPage, totalProducts, paginate, category }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalProducts / productsPerPage);

//   const handlePageChange = (event, page) => {
//     setCurrentPage(page);
//     paginate(page, category);
//   };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
      paginate(currentPage + 1, category);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
      paginate(currentPage - 1, category);
    }
  };

  return (
    <Stack direction="row" spacing={1} justifyContent="end">
    
      <Button onClick={handlePrevPage} disabled={currentPage === 1}>
      <ArrowBAckSvg />
          </Button>
      <Button onClick={handleNextPage} disabled={currentPage === totalPages}>
      <ArrowSvg fill="white"/>
      </Button>
    </Stack>
  );
};