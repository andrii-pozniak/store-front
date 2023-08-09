import styled from "styled-components";

export const Header = styled.h1`
  margin: 0;
    margin-top: 20px;
    text-align: center;
  padding: 0;
  text-transform: uppercase;
  font-family: ${(p) => p.theme.fonts.body};
  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.interMiddle};
  font-size: ${(p) => p.theme.fontSizes.ml};
  line-height: ${(p) => p.theme.lineHeights.heading};
  color: ${(p) => p.theme.colors.dark};
`;
