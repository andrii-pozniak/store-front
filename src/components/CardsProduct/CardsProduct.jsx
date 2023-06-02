import React, { useState, useEffect } from "react";
import { ProductCard } from "../ProductCard/ProductCard";
// import { useParams } from "react-router-dom";
import { fetchProductCards } from "../../Utils/api/getCard";
import { CardProduct } from "./CardsProduct.style";

export const CardsProducts = () => {
  // const { additionalCategory } = useParams();
  const [, setStatus] = useState("pending");
  const [data, setData] = useState(null);

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

  if (data) {
    const { additionalCategory, data: items } = data;

    let filteredData = [];
    filteredData = data?.filter((item) => item.additionalCategory === "Знижки");
      console.log("filteredData", filteredData);
    if (additionalCategory === "Знижки") {
      console.log("additionalCategory", additionalCategory);
      filteredData = items.filter((item) => item.additionalCategory === "Знижки");
      console.log("filteredData", filteredData);
    } else if (additionalCategory === "Хіти продаж") {
      filteredData = items.filter((item) => item.additionalCategory === "Хіти продаж");
    } else if (additionalCategory === "Новинки") {
      filteredData = items.filter((item) => item.additionalCategory === "Новинки");
    }

    return (
      <>
        {additionalCategory === "Знижки" }
        <h2>Знижки</h2>
        <CardProduct>
        
          {filteredData.length > 0 ? (
            filteredData?.map((item) => (
              <ProductCard
                key={item._id}
                id={item._id}
                name={item.name}
                imageURL={item.imageURL}
                additionalCategory={item.additionalCategory}
                codeProduct={item.codeProduct}
                priceProduct={item.priceProduct}
              />
            ))
          ) : (
            <p>Нет товаров для отображения</p>
          )}
        </CardProduct>

        {additionalCategory === "Хіти продаж" && <h2>хіт</h2>}
        <CardProduct>
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <ProductCard
                key={item._id}
                name={item.name}
                imageURL={item.imageURL}
                additionalCategory={item.additionalCategory}
                codeProduct={item.codeProduct}
                priceProduct={item.priceProduct}
              />
            ))
          ) : (
            <p>Нет товаров для отображения</p>
          )}
        </CardProduct>

        {additionalCategory === "Новинки" && <h2>Новинки</h2>}
        <CardProduct>
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <ProductCard
                key={item._id}
                name={item.name}
                imageURL={item.imageURL}
                additionalCategory={item.additionalCategory}
                codeProduct={item.codeProduct}
                priceProduct={item.priceProduct}
              />
            ))
          ) : (
            <p>Нет товаров для отображения</p>
          )}
        </CardProduct>
      </>
    );
  }

  return null;
};