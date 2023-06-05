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
  margin-top: 108px;
  padding: 0 60px;
  font-family: ${(p) => p.theme.fonts.body};
  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.interBold};
  font-size: ${(p) => p.theme.fontSizes.mn};
  line-height: ${(p) => p.theme.lineHeights.heading};
  text-transform: uppercase;
  color: ${(p) => p.theme.colors.dark};
`;
