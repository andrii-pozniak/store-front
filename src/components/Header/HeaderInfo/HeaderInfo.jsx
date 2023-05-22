import React from "react";
import { 
    HeaderUp,
     Page,
     PhoneNumber,
     Map,
     MapIcon
 } from "./HeaderInfo.styled";


export const HeaderInfo = () => {
  return (
    <HeaderUp>
      <PhoneNumber> +380 677 209 299</PhoneNumber>
      <Page>пн-пт 9:00-18:00 сб-нд 9:00-17:00</Page>
      <Map href="https://www.google.com/maps/place" ><MapIcon/></Map>
      <button type="button">UK</button>
    </HeaderUp>
  );
};
