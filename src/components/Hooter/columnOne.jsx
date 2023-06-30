import React from "react";
import { HeaderLogo } from "../Header/HeaderLogo/HeaderLogo";
import {
  StyleTypography,
  Circle,
  Container,
  ContainerSocial,
  ItemHeader,
} from "./Hooter.Style";
//
import { ReactComponent as FacebookSvg } from "../Header/assest/HoterImg/facebook.svg";
import { ReactComponent as InstaSvg } from "../Header/assest/HoterImg/insta.svg";
import { ReactComponent as YoutubeSvg } from "../Header/assest/HoterImg/youtube.svg";

export const ColumnOne = () => {
  return (
    <>
      <HeaderLogo secondWordColor="white" colorNumber="white" />
      <Container>
        <StyleTypography>
          Высокотехнологичная продукции с современным дизайном
        </StyleTypography>
        <ItemHeader>Приєднуйтесь</ItemHeader>
      </Container>
      <ContainerSocial>
        <Circle>
          <FacebookSvg />
        </Circle>
        <Circle>
          <InstaSvg />
        </Circle>
        <Circle>
          <YoutubeSvg />
        </Circle>
      </ContainerSocial>
      <StyleTypography>© 2023 Інтернет-магазин</StyleTypography>
    </>
  );
};
