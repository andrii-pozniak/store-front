import styled from "styled-components";
import { ReactComponent as NumberSvg } from "../../Header/assest/36.svg";
import { ReactComponent as OneSvg } from "../../Header/assest/Polygon1.svg";
import { ReactComponent as TwoSvg } from "../../Header/assest/Polygon2.svg";
import { ReactComponent as ThreeSvg } from "../../Header/assest/Polygon3.svg";
import { ReactComponent as FourSvg } from "../../Header/assest/Polygon4.svg";
import { ReactComponent as FiveSvg } from "../../Header/assest/Polygon5.svg";





export const HeroBackground = styled.div`
  position: relative;
  width: 100%;
  height: 460px;
  background-image: linear-gradient(
    117deg,
    ${(p) => p.theme.colors.background} 28%,
    ${(p) => p.theme.colors.backgroundSecondary} 28%,
    ${(p) => p.theme.colors.backgroundSecondary} 100%
  );
`;

export const Image = styled.img`
  position: absolute;
  left: 14.5%;
  padding: 7px 0;
`;

export const SvgNumber = styled(NumberSvg)`
  position: absolute;
  left: 50%;
  top: 15%;
`;
export const SvgOne = styled(OneSvg)`
  position: absolute;
  right: 41px;
  top: 22px;
  opacity: 0.74;
`;
export const SvgTwo = styled(TwoSvg)`
  position: absolute;
  left: 53.77%;
  bottom: 82px;
  opacity: 0.74;
`;
export const SvgThree = styled(ThreeSvg)`
  position: absolute;
  left: 40.39%;
  top: 24px;
  opacity: 0.74;
`;
export const SvgFour = styled(FourSvg)`
  position: absolute;
  left: 4.48%;
  top: 49px;
  opacity: 0.74;
`;
export const SvgFive = styled(FiveSvg)`
  position: absolute;
  left: 13.65%;
  top: 81.47%;
  opacity: 0.74;
`;
export const Month = styled.p`
  position: absolute;
  left: 68%;
  top: 26%;
  margin: 0;
  font-family: ${(p) => p.theme.fonts.body};
  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.middle};
  font-size: ${(p) => p.theme.fontSizes.ll};
  line-height: ${(p) => p.theme.lineHeights.heading};
  color: ${(p) => p.theme.colors.dark};
`;
export const SecondPage = styled.p`
  position: absolute;
  left: 68%;
  top: 35%;
  margin: 0;
  font-family: ${(p) => p.theme.fonts.body};
  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.interBold};
  font-size: ${(p) => p.theme.fontSizes.xl};
  line-height: ${(p) => p.theme.lineHeights.heading};
  color: ${(p) => p.theme.colors.white};
`;
export const Rings = styled.div`
  position: absolute;
  left: 64%;
    top: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const RingOne = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 340px;
  height: 340px;
  border: 1px solid ${(p) => p.theme.colors.white};
  border-radius: ${(p) => p.theme.radii.round};
  background: transparent;
  opacity: 0.51;
`;
export const RingSecond = styled.div`
display: flex;
  justify-content: center;
  width: 270px;
  height: 270px;
  border: 1px solid ${(p) => p.theme.colors.white};
  border-radius: ${(p) => p.theme.radii.round};
  background: transparent;
  
`;
export const BtnBuy = styled.button`
 position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%);
padding: 15px 50px;
margin: 0;
border: none;
font-weight: ${p => p.theme.fontWeights.middle};
font-size:  ${p => p.theme.fontSizes.m};
line-height: ${p => p.theme.lineHeights.heading};
color:  ${p => p.theme.colors.white};
background: ${p => p.theme.colors.dark};
`;
export const Inform = styled.div`
position: absolute;
  right: 24px;
  bottom: 24px;
  display: grid;
  grid-template-columns: 1fr 180px;
  gap: 8px;
`;
export const PageInform = styled.p`

margin: 0;
font-family: ${(p) => p.theme.fonts.body};
font-style: normal;
font-weight: ${p => p.theme.fontWeights.normal};
font-size:  ${p => p.theme.fontSizes.xs};
line-height: ${p => p.theme.lineHeights.heading};
color:  ${p => p.theme.colors.dark};
`;

