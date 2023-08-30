import React, { useState, useEffect, useContext } from "react";
import { CategoriesLink } from "../CategoryLink/CategoryLink";

import {
  CardProduct,
  Header,
  PagePagination,
  PageCount,
} from "./CardsProduct.style";
import { CustomPagination } from "../CustomPagination/CustomPagination";
import { GetCurrentProducts } from "../CardsProduct/GetCurrentProducts";
import { DataContext } from "../Context/DataContext";

export const CardsProducts = () => {
  const [discountedProducts, setDiscountedProducts] = useState([]);
  const [bestSellingProducts, setBestSellingProducts] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);

  const { data, uniqueCategories } = useContext(DataContext);

  const [currentPage, setCurrentPage] = useState({
    discounted: 1,
    bestSelling: 1,
    newArrivals: 1,
  });
  const productsPerPage = 4;

  useEffect(() => {
    if (data) {
      const items = data;
      const discounted = items?.filter((item) =>
        item.additionalCategory.includes("Кращі цінові пропозиції")
      );
      setDiscountedProducts(discounted);

      const bestSelling = items?.filter((item) =>
        item.additionalCategory.includes("Хіти продаж")
      );
      setBestSellingProducts(bestSelling);

      const newProducts = items?.filter((item) =>
        item.additionalCategory.includes("Новинки")
      );
      setNewArrivals(newProducts);
    }
  }, [data]);

  const paginate = (pageNumber, category) => {
    setCurrentPage((prevCurrentPage) => ({
      ...prevCurrentPage,
      [category]: pageNumber,
    }));
  };

  return (
    <>
      <PagePagination>
        <Header>Кращі цінові пропозиції</Header>
        <PageCount>{discountedProducts.length} товари</PageCount>
        <CustomPagination
          productsPerPage={productsPerPage}
          totalProducts={discountedProducts.length}
          paginate={paginate}
          category="discounted"
        />
      </PagePagination>
      <CardProduct>
        {discountedProducts && discountedProducts.length > 0 ? (
          <GetCurrentProducts
            products={discountedProducts}
            category={"discounted"}
            pageNumber={currentPage.discounted}
            productsPerPage={productsPerPage}
          />
        ) : (
          <p>Нет товаров для отображения</p>
        )}
      </CardProduct>
      <PagePagination>
        <Header>Хіти продаж</Header>
        <PageCount>{bestSellingProducts.length} товари</PageCount>
        <CustomPagination
          productsPerPage={productsPerPage}
          totalProducts={bestSellingProducts.length}
          paginate={paginate}
          category="bestSelling"
        />
      </PagePagination>

      <CardProduct>
        {bestSellingProducts && bestSellingProducts.length > 0 ? (
          <GetCurrentProducts
            products={bestSellingProducts}
            category={"bestSelling"}
            pageNumber={currentPage.discounted}
            productsPerPage={productsPerPage}
          />
        ) : (
          <p>Нет товаров для отображения</p>
        )}
      </CardProduct>
      <PagePagination>
        <Header>Новинки</Header>
        <PageCount>{newArrivals.length} товари</PageCount>
        <CustomPagination
          productsPerPage={productsPerPage}
          totalProducts={newArrivals.length}
          paginate={paginate}
          category="newArrivals"
        />
      </PagePagination>

      <CardProduct>
        {newArrivals && newArrivals.length > 0 ? (
          <GetCurrentProducts
            products={newArrivals}
            category={"newArrivals"}
            pageNumber={currentPage.newArrivals}
            productsPerPage={productsPerPage}
          />
        ) : (
          <p>Нет товаров для отображения</p>
        )}
      </CardProduct>
      <CategoriesLink uniqueCategories={uniqueCategories} />
    </>
  );
};
