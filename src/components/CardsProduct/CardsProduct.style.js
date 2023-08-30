import styled from "styled-components";

export const CardProduct = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  padding: 0 60px;
  margin-top: 31px;
  @media screen and (max-width: 767px){
  padding: 0 20px;
  justify-content: center;
};
@media screen and (max-width: 425px){
  display: block};
`;

export const Header = styled.h2`
  margin: 0; 
  margin-right: 8px;
  font-family: ${(p) => p.theme.fonts.body};
  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.interBold};
  font-size: ${(p) => p.theme.fontSizes.mn};
  line-height: ${(p) => p.theme.lineHeights.heading};
  text-transform: uppercase;
  color: ${(p) => p.theme.colors.dark};
  @media screen and (max-width: 767px){
    font-size: ${(p) => p.theme.fontSizes.xs};};

`;

export const PagePagination = styled.div`
display: flex;
padding: 0 60px;
align-items: start;
margin-top: 108px;
@media screen and (max-width: 767px){
  padding: 0 40px;
};
@media screen and (max-width: 665px){ 
  justify-content: center;
}
`;

export const PageCount = styled.p`
margin: 0;
display: flex;
font-family: ${(p) => p.theme.fonts.body};
  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.interBold};
  font-size: ${(p) => p.theme.fontSizes.xs};
  line-height: ${(p) => p.theme.lineHeights.heading};
  color: ${(p) => p.theme.colors.backgroundAlert};
`;
