import React, { useState, useEffect } from "react";
import { ProductCard } from "../ProductCard/ProductCard";
import { fetchProductCards } from "../../Utils/api/getCard";
import { CardProduct, Header } from "./CardsProduct.style";
import { CustomPagination } from "../CustomPagination/CustomPagination";

export const CardsProducts = () => {
  const [, setStatus] = useState("pending");
  const [data, setData] = useState(null);
  const [discountedProducts, setDiscountedProducts] = useState([]);
  const [bestSellingProducts, setBestSellingProducts] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);
  const [currentPage, setCurrentPage] = useState({
    discounted: 1,
    bestSelling: 1,
    newArrivals: 1,
  });
  const productsPerPage = 4;

  useEffect(() => {
    (async () => {
      try {
        setStatus("pending");
        const fetchedData = await fetchProductCards();
        setStatus("fulfilled");
        setData(fetchedData);
        console.log("data", fetchedData);
      } catch (error) {
        setStatus("rejected");
      }
    })();
  }, []);

  useEffect(() => {
    if (data) {
      const items = data.products;
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

  const getCurrentProducts = (products, category, pageNumber) => {
    
    if (!products) {
      return [];
    }
    console.log("discountedProducts", products)
    const indexOfLastProduct = pageNumber * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    return products.slice(indexOfFirstProduct, indexOfLastProduct);
  };

  return (
    <>
      <Header>Кращі цінові пропозиції</Header>
      <CustomPagination
        productsPerPage={productsPerPage}
        totalProducts={discountedProducts.length}
        paginate={paginate}
        category="discounted"
      />
      <CardProduct>
        {discountedProducts && discountedProducts.length > 0 ? (
          getCurrentProducts(discountedProducts, "discounted", currentPage.discounted).map((item) => (
            <ProductCard
              key={item._id}
              id={item._id}
              name={item.name}
              imageURL={item.imageURL}
              additionalCategory={item.additionalCategory}
              codeProduct={item.codeProduct}
              priceProduct={item.priceProduct}
              status={item.status}
            />
          ))
        ) : (
          <p>Нет товаров для отображения</p>
        )}
      </CardProduct>

      <Header>Хіти продаж</Header>
      <CustomPagination
        productsPerPage={productsPerPage}
        totalProducts={bestSellingProducts.length}
        paginate={paginate}
        category="bestSelling"
      />
      <CardProduct>
        {bestSellingProducts && bestSellingProducts.length > 0 ? (
          getCurrentProducts(bestSellingProducts, "bestSelling", currentPage.bestSelling).map((item) => (
            <ProductCard
              key={item._id}
              name={item.name}
              imageURL={item.imageURL}
              additionalCategory={item.additionalCategory}
              codeProduct={item.codeProduct}
              priceProduct={item.priceProduct}
              status={item.status}
            />
          ))
        ) : (
          <p>Нет товаров для отображения</p>
        )}
      </CardProduct>

      <Header>Новинки</Header>
      <CustomPagination
        productsPerPage={productsPerPage}
        totalProducts={newArrivals.length}
        paginate={paginate}
        category="newArrivals"
      />
      <CardProduct>
        {newArrivals && newArrivals.length > 0 ? (
          getCurrentProducts(newArrivals, "newArrivals", currentPage.newArrivals).map((item) => (
            <ProductCard
              key={item._id}
              name={item.name}
              imageURL={item.imageURL}
              additionalCategory={item.additionalCategory}
              codeProduct={item.codeProduct}
              priceProduct={item.priceProduct}
              status={item.status}
            />
          ))
        ) : (
          <p>Нет товаров для отображения</p>
        )}
      </CardProduct>
    </>
  );
};
