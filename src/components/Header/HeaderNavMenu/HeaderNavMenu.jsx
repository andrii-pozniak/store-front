import React from "react";
import {
  AllProducts,
  BtnAllProducts,
  ProductsSvg,
  Button,
  BlockBtn,
  AllMenu,
  BtnNav,
  SvgSearch,
  SvgHeard,
  SvgWeight,
  SvgBag,
  BtnMenu,
  BadgeStyle,
  StyleLink
} from "./HeaderNavMenu.style";
import { ListItemIcon } from "@mui/material";

export const HeaderNavMenu = ({
  handleCart,
  orderLength,
  handleFavorite,
  lengthFavorite,
  lengthCompared,
  handleCompared
}) => {

  return (
    <AllMenu>
      <AllProducts>
        <ProductsSvg />
        <BtnAllProducts type="button">Всі товари</BtnAllProducts>
      </AllProducts>
      <BlockBtn>
        <Button>Акції</Button>
        <StyleLink to={"paymentDelivery"}>ДОСТАВКА</StyleLink>
        <StyleLink to={"guarantee"}>Гарантії</StyleLink>
        <StyleLink to={"paymentDelivery"}>ОПЛАТА</StyleLink>
        <Button>опт</Button>
        <Button>контакти</Button>
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
