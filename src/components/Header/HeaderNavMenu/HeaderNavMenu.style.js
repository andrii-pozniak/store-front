import styled from "styled-components";
import { ReactComponent as AllProductsSvg } from '../../Header/assest/menu.svg';
import { ReactComponent as SearchSvg } from '../../Header/assest/search.svg';
import { ReactComponent as HeardSvg } from '../../Header/assest/heard.svg';
import { ReactComponent as WeightSvg } from '../../Header/assest/weight.svg';
import { ReactComponent as BagSvg } from '../../Header/assest/bag.svg';


export const AllProducts = styled.div`
width: 211px;
display: flex;
align-items: center;
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
export const SvgSearch = styled(SearchSvg)`
  margin-left: 0px;

`;
export const SvgHeard = styled(HeardSvg)`
  margin-left: 0px;
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
grid-template-columns: 90px 90px 90px 90px;
margin-left: 69px;
`;
export const Button = styled.button`
border: none;
gap: 20px;
background: transparent;
font-family: ${p => p.theme.fonts.body};
font-style: normal;
font-weight: ${p => p.theme.fontWeights.interMiddle};
font-size:  ${p => p.theme.fontSizes.xs};
line-height: ${p => p.theme.lineHeights.heading};
text-transform: uppercase;
`;
export const BtnMenu = styled.button`
display: flex;
justify-content: center;
align-items: center;
border: none;
border-left: 1px solid #333333;
background: transparent;
font-family: ${p => p.theme.fonts.body};
font-style: normal;
font-weight: ${p => p.theme.fontWeights.interMiddle};
font-size:  ${p => p.theme.fontSizes.xs};
line-height: ${p => p.theme.lineHeights.heading};
text-transform: uppercase;
`;
export const Count = styled.p`
display: flex;
justify-content: center;
align-items: center;
margin-top: 0;
width: 22px;
height: 22px;
border-radius: 50%;
background: ${p => p.theme.colors.accent};
`;
export const AllMenu = styled.div`
display: flex;
margin-left: 49px;

`;
export const BlockBtn = styled.div`
display: flex;
margin-left: 57px;

`;