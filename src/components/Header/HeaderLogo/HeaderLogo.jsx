import React from "react";
import { Logo, FistWord, SecondWord, Text, Number } from "./HeaderLogo.style";

export const HeaderLogo = () => {
  return (
    <div>
      <Logo>
        <FistWord>PLUS</FistWord>
        <SecondWord>МІНУС</SecondWord>
        <Number>7</Number>
      </Logo>
      <Text>інтернет магазин</Text>
    </div>
  );
};
