import React from "react";
import {
  HeaderUp,
  Page,
  PhoneNumber,
  Map,
  MapIcon,
  BurgerMenu,
  Container,
} from "./HeaderInfo.styled";

export const HeaderInfo = ({ openMenu, handleMenu }) => {
  return (
    <Container>
      <HeaderUp>
        <PhoneNumber> +380 677 209 299</PhoneNumber>
        <Page>пн-пт 9:00-18:00 сб-нд 9:00-17:00</Page>
        <Map href="https://www.google.com/maps/place">
          <MapIcon />
        </Map>
        <button type="button">UK</button>
      </HeaderUp>
      <BurgerMenu
        onClick={handleMenu}
        className={openMenu ? "active" : ""}
      >
        <span></span>
      </BurgerMenu>
    </Container>
  );
};
