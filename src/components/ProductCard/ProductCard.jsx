import React from "react";
import CategoryItem from "../CategoryItem/CategoryItem";
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
  StatusPage,
  BtnHeard,
  SvgStar,
  SvgFeedback,
  StarBody,
  CardInfo
} from "./ProductCard.style";

import {
  SvgHeard,
  SvgWeight,
} from "../Header/HeaderNavMenu/HeaderNavMenu.style";

export const ProductCard = ({
  
  name,
  imageURL,
  additionalCategory,
  codeProduct,
  priceProduct,
  status,
}) => {
  const sortOrder = [
    "Знижки",
    "Кращі цінові пропозиції",
    "Новинки",
    "Безкоштовно"
  ];

  additionalCategory.sort((a, b) => {
    return sortOrder.indexOf(a) - sortOrder.indexOf(b);
  });
  return (
    <CardBody>
      <CodCategory>
        <CategoryPage> {additionalCategory.map((category) => (
              <CategoryItem key={category} category={category} />
            ))}</CategoryPage>
        <CodPage>Код: {codeProduct}</CodPage>
      </CodCategory>
      <Image src={imageURL} alt={name} />
      <NamePage>{name}</NamePage>
      <CardInfo>
        <StatusPage status={status}>{status}</StatusPage>
        <StarBody>
          <SvgStar />
          <SvgStar />
          <SvgStar />
          <SvgStar />
          <SvgStar />
          <SvgFeedback /> 5 
        </StarBody> 
        <BtnHeard button="button">
          <SvgWeight /> В обране
        </BtnHeard>
        <BtnHeard button="button">
          <SvgHeard /> Порівняти
        </BtnHeard>
        <CountPage>
          {priceProduct} <Span>грн</Span>
        </CountPage>
        <BtnBuy>Купити</BtnBuy>
      </CardInfo>
    </CardBody>
  );
};
