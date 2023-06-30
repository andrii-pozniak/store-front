import React from "react";
import { Divider } from "@mui/material";

import {
    Headline,
    ItemContainer,
    ItemHooter
  } from "./Hooter.Style";

export const ColumnThird = () => {

    return (
        <>
         <Headline>Інформація</Headline>
            <Divider
              orientation="horizontal"
              flexItem
              color="#95CD41"
              width="48px"
            />
            <ItemContainer>
              <ItemHooter>Способи оплати</ItemHooter>
              <ItemHooter>Cпособи доставки</ItemHooter>
              <ItemHooter>Гарантія</ItemHooter>
              <ItemHooter>Питання та відповіді</ItemHooter>
              <ItemHooter>Про компанію</ItemHooter>
              <ItemHooter>Контакти</ItemHooter>
            </ItemContainer>
        </>
         
    )
}