import React, { useState } from "react";
import { NativeSelects } from "../../components/Category/NativeSelects";
import { HeaderItem, ContainerCard, SpanFood } from "./Category.style";
import { CustomPagination } from "../CustomPagination/CustomPagination";
import { GetCurrentProducts } from "../CardsProduct/GetCurrentProducts";

export const ProductCategoryCards = ({ data, category }) => {
  const [productsPerPage, setProductsPerPage] = useState(12); 
  const [currentPage , setCurrentPage] = useState(1);
  console.log("category", category)
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    
  };
  return (
    <>
      {data && (
        <HeaderItem>
          {category} <SpanFood>{data.length} товари</SpanFood>
        </HeaderItem>
      )}
      <NativeSelects setProductsPerPage={setProductsPerPage}/>
      <ContainerCard>
      <GetCurrentProducts
          products={data}
          category={category}
          pageNumber={currentPage} 
          productsPerPage={productsPerPage}
          />
       
      </ContainerCard>
     { data && <CustomPagination
        productsPerPage={productsPerPage}
        totalProducts={data.length}
        paginate={paginate}
        category={data.category}
      />}
    </>
  );
};
