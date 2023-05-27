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
  Count
} from "./HeaderNavMenu.style";

export const HeaderNavMenu = () => {
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
        <BtnMenu type="button">
          <SvgBag /><Count>5</Count>
        </BtnMenu>
        <BtnMenu type="button">
          <SvgHeard /><Count>5</Count>
        </BtnMenu>
        <BtnMenu type="button">
          <SvgWeight /><Count>5</Count>
        </BtnMenu>
      </BtnNav>
    </AllMenu>
  );
};
