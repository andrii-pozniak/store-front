import styled from "styled-components";

export const CardProduct = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  padding: 0 60px;
  margin-top: 31px;
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
`;

export const PagePagination = styled.div`
display: flex;
padding: 0 60px;
align-items: start;
/* justify-content: ; */
margin-top: 108px;
`;

export const PageCount = styled.p`
margin: 0;
font-family: ${(p) => p.theme.fonts.body};
  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.interBold};
  font-size: ${(p) => p.theme.fontSizes.xs};
  line-height: ${(p) => p.theme.lineHeights.heading};
  color: ${(p) => p.theme.colors.backgroundAlert};
`;
