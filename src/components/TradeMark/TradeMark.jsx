import React from "react";
import { Image,TradeBody, ImageFour } from "./TradeMark.style";
import MarkOne from "../../components/Header/assest/TradeMark/Rectangle 6.png";
import MarkTwo from "../../components/Header/assest/TradeMark/Rectangle 7.png";
import MarkThree from "../../components/Header/assest/TradeMark/Rectangle 8.png";
import MarkFour from "../../components/Header/assest/TradeMark/Vector.png";
import MarkFive from "../../components/Header/assest/TradeMark/Rectangle 10.png";
import MarkSix from "../../components/Header/assest/TradeMark/Rectangle 11.png";
import MarkSeven from "../../components/Header/assest/TradeMark/Rectangle 12.png";

export const TradeMark = () => {
  return (
    <TradeBody>
      <Image src={MarkOne} alt="MarkOne" />
      <Image src={MarkTwo} alt="MarkTwo" />
      <Image src={MarkThree} alt="MarkThree" />
      <ImageFour src={MarkFour} alt="MarkFour" />
      <Image src={MarkFive} alt="MarkFive" />
      <Image src={MarkSix} alt="MarkSix" />
      <Image src={MarkSeven} alt="MarkSeven" />
    </TradeBody>
  );
};
