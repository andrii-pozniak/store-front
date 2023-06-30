import React from "react";
import { Divider } from "@mui/material";

import { Headline, ItemContainer, ItemHooter } from "./Hooter.Style";

export const ColumnSecond = ({ uniqueCategories }) => {

  return (
    <>
      <Headline>Каталог продукції</Headline>
      <Divider orientation="horizontal" flexItem color="#95CD41" width="48px" />

      <ItemContainer>
        {uniqueCategories.map((category, index) => (
          <ItemHooter key={index}>{category}</ItemHooter>
        ))}
      </ItemContainer>
    </>
  );
};
