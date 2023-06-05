import React, { useState, useEffect } from "react";
import { ProductCard } from "../ProductCard/ProductCard";
// import { useParams } from "react-router-dom";
import { fetchProductCards } from "../../Utils/api/getCard";
import { CardProduct, Header } from "./CardsProduct.style";

export const CardsProducts = () => {
  // const { additionalCategory } = useParams();
  const [, setStatus] = useState("pending");
  const [data, setData] = useState(null);
  const [discountedProducts, setDiscountedProducts] = useState([]);
  const [bestSellingProducts, setBestSellingProducts] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);

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
    if (data ) {
      const items  = data;
      const discounted = items?.filter(
        (item) => item.additionalCategory.includes("Кращі цінові пропозиції")
      );
      setDiscountedProducts(discounted);

      const bestSelling = items?.filter(
        (item) => item.additionalCategory.includes("Хіти продаж")
      );
      setBestSellingProducts(bestSelling);

      const newProducts = items?.filter(
        (item) => item.additionalCategory.includes("Новинки")
      );
      setNewArrivals(newProducts);
    }
  }, [data]);

  return (
    <>
      <Header>Кращі цінові пропозиції</Header>
      <CardProduct>
        {discountedProducts.length > 0 ? (
          discountedProducts.map((item) => (
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
      <CardProduct>
        {bestSellingProducts.length > 0 ? (
          bestSellingProducts.map((item) => (
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
      <CardProduct>
        {newArrivals.length > 0 ? (
          newArrivals.map((item) => (
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