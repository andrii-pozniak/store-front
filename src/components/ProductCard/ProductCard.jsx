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
  SvgStar,
  SvgFeedback,
  StarBody,
  CardInfo,
} from "./ProductCard.style";
import NoPhoto from '../../components/Header/assest/iconsNo.png';
import {
  SvgHeard, CheckedSvgHeard 
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
    handleComparedClick,
    removeForCompared,
    removeForFavorite   
  } = useContext(DataContext);
  const{ setFavoriteLength, setComparedLength } = useContext(FavoriteLengthContext)
  const [isFavorite, setIsFavorite] = useState(false);
  const [isCompared, setIsCompared] = useState(false);
  
  const handleButtonClick = () => {
    handleBuyClick({
      id,
      name,
      imageURL,
      priceProduct,
    });
  };

const handleFavoriteCheckboxChange = () => {
  setIsFavorite(prevIsFavorite => !prevIsFavorite);

  if (!isFavorite) {
    setFavoriteLength((prevLength) => prevLength + 1);
    handleFavoriteClick({
      id,
      name,
      imageURL,
      priceProduct,
      additionalCategory,
      codeProduct,
      isFavorite: true,
    });
  } else {
    setFavoriteLength((prevLength) => prevLength - 1);
    handleFavoriteClick({
      id,
      name,
      imageURL,
      priceProduct,
      additionalCategory,
      codeProduct,
      isFavorite: false,
      
    } );
    removeForFavorite( id)
  }
};

const handleComparedCheckboxChange = () => {
  setIsCompared(prevIsCompared => !prevIsCompared);

  if (!isCompared) {
    setComparedLength((prevLength) => prevLength + 1);
    handleComparedClick({
      id,
      name,
      imageURL,
      priceProduct,
      additionalCategory,
      codeProduct,
      isCompared: true,
    });
  } else {
    setComparedLength((prevLength) => prevLength - 1);
    handleComparedClick({
      id,
      name,
      imageURL,
      priceProduct,
      additionalCategory,
      codeProduct,
      isCompared: false,
      
    } );
    removeForCompared( id)
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
          {additionalCategory.map((category, index) => (
            <CategoryItem key={index} category={category} />
          ))}
        </CategoryPage>
        <CodPage>Код: {codeProduct}</CodPage>
      </CodCategory>
      {imageURL && imageURL !== ""? <Image src={imageURL} alt={name} />: <Image src={NoPhoto} alt="NoPhoto"/>}
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
       
        <FormControlLabel
          control={
            <Checkbox
              icon={<SvgHeard />}
              checkedIcon={<CheckedSvgHeard/>}
              name="checkedH"
              checked={isCompared}
              onChange={() => handleComparedCheckboxChange(id)}
            />
          }
          label="Порівняти"
        />
        <CountPage>
          {priceProduct} <Span>грн</Span>
        </CountPage>
        <BtnBuy onClick={() => handleButtonClick()}>Купити</BtnBuy>
      </CardInfo>
    </CardBody>
  );
};
