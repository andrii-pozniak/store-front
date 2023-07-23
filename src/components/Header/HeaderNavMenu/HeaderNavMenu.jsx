import React from "react";
// import { ReactComponent as AllProductsSvg } from '../../Header/assest/menu.svg';
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
  Count,
  BadgeStyle,
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
        <Button>ДОСТАВКА</Button>
        <Button>Гарантії</Button>
        <Button>ОПЛАТА</Button>
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
        {/* <BtnMenu type="button">
          <SvgHeard />
          <Count>5</Count>
        </BtnMenu> */}
        {/* <BtnMenu type="button">
          <SvgWeight />
          <Count>5</Count>
        </BtnMenu> */}
      </BtnNav>
    </AllMenu>
  );
};
