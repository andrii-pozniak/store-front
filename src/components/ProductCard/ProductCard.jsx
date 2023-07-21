import React, { useContext, useState } from "react";
import CategoryItem from "../CategoryItem/CategoryItem";
import { FormControlLabel, Checkbox } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { DataContext } from "../Context/DataContext";
import { FavoriteLengthContext } from "../Context/FavoriteLengthContext";
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
  CardInfo,
} from "./ProductCard.style";

import {
  SvgHeard,  
} from "../Header/HeaderNavMenu/HeaderNavMenu.style";

export const ProductCard = ({
  id,
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
    "Безкоштовно",
  ];
  const {
    handleBuyClick,
    handleFavoriteClick, 
    removeForFavorite   
  } = useContext(DataContext);
  const{ setFavoriteLength,  } = useContext(FavoriteLengthContext)
  const [isFavorite, setIsFavorite] = useState(false);
  // const [favoriteLength, setFavoriteLength] = useState(0);
  
  const handleButtonClick = () => {
    handleBuyClick({
      id,
      name,
      imageURL,
      priceProduct,
    });
  };
// console.log("isFavorite", isFavorite)
const handleFavoriteCheckboxChange = () => {
  setIsFavorite(prevIsFavorite => !prevIsFavorite);

  // Используем обновленное состояние isFavorite вместо прежнего значения
  if (!isFavorite) {
    setFavoriteLength((prevLength) => prevLength + 1);
    handleFavoriteClick({
      id,
      name,
      imageURL,
      priceProduct,
      isFavorite: true,
    });
  } else {
    setFavoriteLength((prevLength) => prevLength - 1);
    handleFavoriteClick({
      id,
      name,
      imageURL,
      priceProduct,
      isFavorite: false,
      
    } );
    removeForFavorite()
  }
};

  additionalCategory.sort((a, b) => {
    return sortOrder.indexOf(a) - sortOrder.indexOf(b);
  });
  return (
    <CardBody>
      <CodCategory>
        <CategoryPage>
          {" "}
          {additionalCategory.map((category) => (
            <CategoryItem key={category} category={category} />
          ))}
        </CategoryPage>
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
        {/* <BtnHeard button="button" onClick={() => handleButtonClick()}>
          <SvgWeight onClick={() => handleButtonClick()} /> В обране
        </BtnHeard> */}
        <FormControlLabel
          control={
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite />}
              name="checkedH"
              checked={isFavorite}
              onChange={() => handleFavoriteCheckboxChange(id)}
            />
          }
          label="В обране"
        />
        <BtnHeard button="button" onClick={() => handleButtonClick()}>
          <SvgHeard /> Порівняти
        </BtnHeard>
        <CountPage>
          {priceProduct} <Span>грн</Span>
        </CountPage>
        <BtnBuy onClick={() => handleButtonClick()}>Купити</BtnBuy>
      </CardInfo>
    </CardBody>
  );
};
