import styled from "styled-components";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export const CategoryLink = styled(Link)`
display: flex;
align-items: center;
font-family: ${(p) => p.theme.fonts.body};
  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.middle};
  font-size: ${(p) => p.theme.fontSizes.m};
  line-height: ${(p) => p.theme.lineHeights.heading};
  color: ${(p) => p.theme.colors.dark};
  text-decoration: none;
`;
export const ContainerLink = styled.div`
display: flex;
align-items: center;
padding: 8px 59px;
background: ${(p) => p.theme.colors.gray};
@media screen and (max-width: 728px){
  padding: 8px 29px;
};
@media screen and (max-width: 428px){
  padding: 8px 15px;
}
`;
export const StyleArrowForwardIosIcon = styled(ArrowForwardIosIcon)`
&& {
  height: 8px;

}
`;
