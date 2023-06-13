import React from "react";
import { Logo, FistWord, SecondWord, Text, Number } from "./HeaderLogo.style";

export const HeaderLogo = ({ secondWordColor, colorNumber }) => {
  return (
    <>
      <Logo>
        <FistWord>PLUS</FistWord>
        <SecondWord color={secondWordColor}>МІНУС</SecondWord>
        <Number color={colorNumber}>7</Number>
      </Logo>
      <Text color={colorNumber}>інтернет магазин</Text>
    </>
  );
};
