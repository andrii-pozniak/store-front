import React from "react";

export const ProductCard = (
  name,
  imageURL,
  additionalCategory,
  codeProduct,
  priceProduct
) => {
  return (
    <div>
        <p>{additionalCategory}</p>
        <p>Код: {codeProduct}</p>
      <img src={imageURL} alt={name} />
      <p>{name}</p>
      <div>
      <button type="button">В обране</button>
      <button type="button">Порівняти</button>
      
      </div>
      <div>
      <p>{priceProduct} грн</p>
      <button type="button">Купити</button>
      </div>
      
    </div>
  );
};
