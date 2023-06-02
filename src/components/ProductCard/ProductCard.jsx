import React from "react";
import {
  CardBody,
  Image,
  CodPage,
  NamePage,
  CountPage,
  CategoryPage,
  CodCategory,
  Span,
  BtnBuy,
} from "./ProductCard.style";

export const ProductCard = ({
  id,
  name,
  imageURL,
  additionalCategory,
  codeProduct,
  priceProduct,
}) => {
  return (
    <CardBody>
      <CodCategory>
        <CategoryPage>{additionalCategory}</CategoryPage>
        <CodPage>Код: {codeProduct}</CodPage>
      </CodCategory>
      <Image src={imageURL} alt={name} />
      <NamePage>{name}</NamePage>
      <CountPage>
        {priceProduct} <Span>грн</Span>
      </CountPage>
      <BtnBuy>Купити</BtnBuy>
    </CardBody>
  );
};
