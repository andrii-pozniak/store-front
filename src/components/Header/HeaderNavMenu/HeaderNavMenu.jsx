import React from "react";
// import { ReactComponent as AllProductsSvg } from '../../Header/assest/menu.svg';
import { 
    AllProducts,
    BtnAllProducts,
    ProductsSvg,
 } from "./HeaderNavMenu.style";

export const HeaderNavMenu = () => {
    return (
        <div>
            <AllProducts>
                <ProductsSvg/>
                <BtnAllProducts type="button">Всі товари</BtnAllProducts>
            </AllProducts>
        </div>
    )
}