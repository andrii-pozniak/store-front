import styled from "styled-components";
import { Badge } from "@mui/material";
import { ReactComponent as AllProductsSvg } from "../../Header/assest/menu.svg";
import { ReactComponent as SearchSvg } from "../../Header/assest/search.svg";
import { ReactComponent as HeardSvg } from "../../Header/assest/heard.svg";
import { ReactComponent as WeightSvg } from "../../Header/assest/weight.svg";
import { ReactComponent as BagSvg } from "../../Header/assest/bag.svg";
import { Link } from "react-router-dom";

export const StyleLink = styled(Link)`
  border: none;
  padding: 0 6px;
  background: transparent;
  text-decoration: none;
  font-family: ${(p) => p.theme.fonts.body};
  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.interMiddle};
  font-size: ${(p) => p.theme.fontSizes.xs};
  line-height: ${(p) => p.theme.lineHeights.heading};
  text-transform: uppercase;
  color: ${(p) => p.theme.colors.dark};
  @media screen and (max-width: 991px) {
    display: block;
    color: ${(p) => p.theme.colors.accent};
    font-size: ${(p) => p.theme.fontSizes.ml};
    z-index: 5;
    margin-bottom: 15px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;
export const AllProducts = styled.div`
  width: 211px;
  display: flex;
  align-items: center;
  background: ${(p) => p.theme.colors.accent};
  @media screen and (max-width: 1279px) {
    display: none;
  }
`;
export const BtnAllProducts = styled.button`
  font-family: ${(p) => p.theme.fonts.body};
  border: none;
  background: transparent;
  font-style: normal;
  margin: 0;
  margin-left: 29px;
  font-weight: ${(p) => p.theme.fontWeights.middle};
  font-size: ${(p) => p.theme.fontSizes.m};
  line-height: ${(p) => p.theme.lineHeights.heading};
  color: ${(p) => p.theme.colors.white};
`;
export const BadgeStyle = styled(Badge)`
  & .MuiBadge-badge {
    background: ${(p) => p.theme.colors.accent};
    font-family: ${(p) => p.theme.fonts.body};
    font-style: normal;
    font-weight: ${(p) => p.theme.fontWeights.normal};
    font-size: ${(p) => p.theme.fontSizes.sm};
    line-height: ${(p) => p.theme.lineHeights.heading};
    color: ${(p) => p.theme.colors.dark};
  }
`;
export const SvgSearch = styled(SearchSvg)`
  margin-left: 0px;
`;
export const SvgHeard = styled(HeardSvg)`
  margin-left: 0px;
`;
export const CheckedSvgHeard = styled(HeardSvg)`
  margin-left: 0px;
  border-radius: ${(p) => p.theme.radii.round};
  background: ${(p) => p.theme.colors.accent};
`;
export const SvgWeight = styled(WeightSvg)`
  margin-left: 0px;
`;
export const SvgBag = styled(BagSvg)`
  margin-left: 0px;
`;
export const ProductsSvg = styled(AllProductsSvg)`
  margin-left: 21px;
`;
export const BtnNav = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 73px);
  margin-left: auto;
  @media screen and (max-width: 991px) {
    grid-template-columns: repeat(4, 1fr);
    margin-left: auto;
    margin-right: auto;
  }
`;
export const Button = styled.button`
  border: none;
  padding: 0 10px;
  background: transparent;
  font-family: ${(p) => p.theme.fonts.body};
  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.interMiddle};
  font-size: ${(p) => p.theme.fontSizes.xs};
  line-height: ${(p) => p.theme.lineHeights.heading};
  text-transform: uppercase;
`;
export const BtnMenu = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-left: 1px solid #333333;
  background: transparent;
  font-family: ${(p) => p.theme.fonts.body};
  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.interMiddle};
  font-size: ${(p) => p.theme.fontSizes.xs};
  line-height: ${(p) => p.theme.lineHeights.heading};
  text-transform: uppercase;
`;
export const Count = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0;
  width: 22px;
  height: 22px;
  border-radius: ${(p) => p.theme.radii.round};
  background: ${(p) => p.theme.colors.accent};
`;
export const AllMenu = styled.div`
  display: flex;
  margin-left: 10px;
  @media screen and (max-width: 991px) {
    margin-left: 0;
  }
`;
export const BlockBtn = styled.div`
  display: flex;  
  padding: 0 57px 0 69px;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: 991px) {
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 0;
    left: -120%;
    width: 100vw;
    height: 100hw;
    z-index: 3;
    align-items: start;
    padding: 60px 20px;
    transition: left 0.3s ease 0s;
    background: ${(p) => p.theme.colors.blackBackground};
    &.active{
        left: 0;
      }
    &::before {
      content: "";
      position: fixed;
      top: 0;
      left: 0;
      width: 96.5%;
      height: 50px;
      background: ${(p) => p.theme.colors.gray};
      
    }
  }
`;
