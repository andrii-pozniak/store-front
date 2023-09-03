import React from "react";
import {
  AllProducts,
  BtnAllProducts,
  ProductsSvg,
  BlockBtn,
  AllMenu,
  BtnNav,
  SvgSearch,
  SvgHeard,
  SvgWeight,
  SvgBag,
  BtnMenu,
  BadgeStyle,
  StyleLink,
} from "./HeaderNavMenu.style";
import { ListItemIcon } from "@mui/material";

export const HeaderNavMenu = ({
  handleCart,
  orderLength,
  handleFavorite,
  lengthFavorite,
  lengthCompared,
  handleCompared,
  openMenu,
  handleMenu
}) => {
  console.log("first", openMenu);
  const isMobile = window.innerWidth <= 991;

  const handleClick = () => {
    if (isMobile) {
      handleMenu(); 
    }
  };
  return (
    <AllMenu>     
      <AllProducts>
        <ProductsSvg />
        <BtnAllProducts type="button">Всі товари</BtnAllProducts>
      </AllProducts>
      <BlockBtn className={openMenu ? "active" : ""}>
        <StyleLink to={'stock'} onClick={handleClick}>Акції</StyleLink>
        <StyleLink to={"paymentDelivery"} onClick={handleClick}>ДОСТАВКА</StyleLink>
        <StyleLink to={"guarantee"} onClick={handleClick}>Гарантії</StyleLink>
        <StyleLink to={"paymentDelivery"} onClick={handleClick}>ОПЛАТА</StyleLink>
        <StyleLink to={'wholesale'} onClick={handleClick}>опт</StyleLink>
        <StyleLink to={"contacts"} onClick={handleClick}>контакти</StyleLink>
      </BlockBtn>
      <BtnNav>
        <BtnMenu type="button">
          <SvgSearch />
        </BtnMenu>
        <ListItemIcon sx={{ justifyContent: "center", alignItems: "center" }}>
          <BadgeStyle color="secondary" badgeContent={orderLength}>
            <SvgBag onClick={handleCart} />
          </BadgeStyle>
        </ListItemIcon>
        <ListItemIcon sx={{ justifyContent: "center", alignItems: "center" }}>
          <BadgeStyle color="secondary" badgeContent={lengthFavorite}>
            <SvgWeight onClick={handleFavorite} />
          </BadgeStyle>
        </ListItemIcon>
        <ListItemIcon sx={{ justifyContent: "center", alignItems: "center" }}>
          <BadgeStyle color="secondary" badgeContent={lengthCompared}>
            <SvgHeard onClick={handleCompared} />
          </BadgeStyle>
        </ListItemIcon>
      </BtnNav>
    </AllMenu>
  );
};
