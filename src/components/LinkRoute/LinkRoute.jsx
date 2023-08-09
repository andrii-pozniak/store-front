import React from "react";
import { ContainerLink, CategoryLink, StyleArrowForwardIosIcon } from "./LinkRoute.Style";

export const LinkRoute = ({children}) => {

return (
    <>
    <ContainerLink>
        <CategoryLink to="/">
          Інтернет магазин
          <StyleArrowForwardIosIcon />
        </CategoryLink>
        <CategoryLink >
          {children}
          <StyleArrowForwardIosIcon />
        </CategoryLink>
      </ContainerLink>
    </>
)
}