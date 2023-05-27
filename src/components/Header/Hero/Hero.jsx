import React from "react";
import {
  HeroBackground,
  Image,
  SvgNumber,
  Month,
  SecondPage,
  Rings,
  RingOne,
  RingSecond,
  BtnBuy,
  SvgOne,
  SvgTwo,
  SvgThree,
  SvgFour,
  SvgFive,
  PageInform,
  Inform
} from "./Hero.styled";
import Hare from "../../Header/assest/hare.png";
import Recycled from "../../Header/assest/img-recycled.png";

export const Hero = () => {
  return (
    <>
      <HeroBackground>
        <Image src={Hare} alt="Hare" />
        <SvgNumber />
        <Month>МІСЯЦІВ</Month>
        <SecondPage>ГАРАНТІЇ</SecondPage>
        <Rings>
          <RingOne>
            <RingSecond></RingSecond>
          </RingOne>
          <BtnBuy type="button">Купити</BtnBuy>
        </Rings>
        <SvgOne/>
        <SvgTwo/>
        <SvgThree/>
        <SvgFour/>
        <SvgFive/>
        <Inform>
        <img src={Recycled} alt="Recycled"/>
        <PageInform>Надаємо послуги з утилізації та заміни батарейок</PageInform>

        </Inform>
      </HeroBackground>
    </>
  );
};
