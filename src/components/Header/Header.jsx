import React from "react";
import { HeaderInfo } from "./HeaderInfo/HeaderInfo";
import { HeaderLogo } from "./HeaderLogo/HeaderLogo";
import { HeaderNavMenu } from "./HeaderNavMenu/HeaderNavMenu";
import { HeaderBody } from "./Header.style";

export const Header = () => {
  return (
    <>
      <HeaderInfo />
      <HeaderBody>
        <HeaderLogo
          secondWordColor='#333333'
          colorNumber='#333333'/>
        <HeaderNavMenu />
      </HeaderBody>
    </>
  );
};
