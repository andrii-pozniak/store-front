import styled from "styled-components";
import { ReactComponent as AllProductsSvg } from '../../Header/assest/menu.svg';

export const AllProducts = styled.div`
width: 211px;
height: 48px;
display: flex;
align-items: center;
/* justify-content: center; */
background: ${p => p.theme.colors.accent};
`;
export const BtnAllProducts = styled.button`
font-family: ${p => p.theme.fonts.body};
border: none;
background: transparent;
font-style: normal;
margin: 0;
margin-left: 29px;
font-weight: ${p => p.theme.fontWeights.middle};
font-size:  ${p => p.theme.fontSizes.m};
line-height: ${p => p.theme.lineHeights.heading};
color:  ${p => p.theme.colors.white};
`;
export const ProductsSvg = styled(AllProductsSvg)`
  margin-left: 21px;
  /* другие стили для AllProductsSvg */
`;