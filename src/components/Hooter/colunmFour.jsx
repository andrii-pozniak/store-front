import React from "react";
import { Divider } from "@mui/material";
import { ReactComponent as VisaSvg } from "../Header/assest/HoterImg/visa.svg";
import { ReactComponent as MastercardSvg } from "../Header/assest/HoterImg/mastercard.svg";

import {
  Headline,
  ItemContainer,
  ItemPage,
  HeaderPage,
  ContainerCard,
} from "./Hooter.Style";

export const ColumnFour = () => {
  return (
    <>
      <Headline>Магазин електроніки</Headline>
      <Divider orientation="horizontal" flexItem color="#95CD41" width="48px" />
      <ItemContainer>
        <ItemPage>Приймання замовлень за телефоном</ItemPage>
        <ItemPage>пн-пт 9:00-18:00</ItemPage>
        <ItemPage>сб-нд 9:00-17:00</ItemPage>
        <ItemPage>Приймання замовлень через сайт</ItemPage>
        <ItemPage> Цілодобово пн-нд</ItemPage>
        <HeaderPage>+380 677 209 299</HeaderPage>
      </ItemContainer>
      <ContainerCard>
        <VisaSvg />
        <MastercardSvg />
      </ContainerCard>
    </>
  );
};
