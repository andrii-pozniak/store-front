import React from "react";
import { ProductCard } from "../ProductCard/ProductCard";

export const GetCurrentProducts = ({products, productsPerPage, category, pageNumber}) => {
    const getCurrentProducts = () => {
        if (!products) {
          return [];
        }
        const indexOfLastProduct = pageNumber * productsPerPage ;
        const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
        
        return products.slice(indexOfFirstProduct, indexOfLastProduct);
      };

      return (
        <>
        {getCurrentProducts (products, category, pageNumber).map((item) => (
            <ProductCard
              key={item._id}
              name={item.name}
              imageURL={item.imageURL}
              additionalCategory={item.additionalCategory}
              codeProduct={item.codeProduct}
              priceProduct={item.priceProduct}
              status={item.status}
            />
          ))}
        </>
      )
  }; 