import React, { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import { ProductCard } from "../ProductCard/ProductCard";
import { ContainerCard } from "./Category.style";

export const YouSaw = () => {
  const { order, favorite, compared } = useContext(DataContext);
  return (
    <>
      {(Boolean(order.length) ||
        Boolean(compared.length) ||
        Boolean(favorite.length)) && (
        <>
          <h2>Ви дивилися</h2>
          <ContainerCard>
            {Boolean(order.length) &&
              order?.map((item) => (
                <ProductCard
                  key={item.name}
                  id={item._id}
                  name={item.name}
                  imageURL={item.imageURL}
                  additionalCategory={item.additionalCategory}
                  codeProduct={item.codeProduct}
                  priceProduct={item.priceProduct}
                  status={item.status}
                />
              ))}

            {Boolean(compared.length) &&
              compared?.map((item) => (
                <ProductCard
                  key={item.name}
                  id={item._id}
                  name={item.name}
                  imageURL={item.imageURL}
                  additionalCategory={item.additionalCategory}
                  codeProduct={item.codeProduct}
                  priceProduct={item.priceProduct}
                  status={item.status}
                />
              ))}
            {Boolean(favorite.length) &&
              favorite?.map((item) => (
                <ProductCard
                  key={item.name}
                  id={item._id}
                  name={item.name}
                  imageURL={item.imageURL}
                  additionalCategory={item.additionalCategory}
                  codeProduct={item.codeProduct}
                  priceProduct={item.priceProduct}
                  status={item.status}
                />
              ))}
          </ContainerCard>
        </>
      )}
    </>
  );
};
