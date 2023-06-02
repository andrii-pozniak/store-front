import styled from "styled-components";

export const CardBody = styled.div`
  /* height: 440px; */
  padding: 16px;
  background: ${(p) => p.theme.colors.white};
  border: 1px solid rgba(51, 51, 51, 0.2);
  border-radius: 3px;
`;

export const Image = styled.img`
  width: 276px;
  height: 198px;
`;

export const CodPage = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  text-align: right;
  color: ${(p) => p.theme.colors.dark};
`;

export const NamePage = styled.p`
  width: 267px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: ${(p) => p.theme.lineHeights.heading};
  color: ${(p) => p.theme.colors.dark};
`;

export const CountPage = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: ${(p) => p.theme.lineHeights.heading};
  color: ${(p) => p.theme.colors.dark};
`;

export const CategoryPage = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background: ${(p) => p.theme.colors.backgroundAlert};
  border: none;
  border-radius: ${(p) => p.theme.radii.round};
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: ${(p) => p.theme.lineHeights.heading};
  color: ${(p) => p.theme.colors.white};
`;

export const CodCategory = styled.div`
  display: flex;
  align-items: baseLine;
  justify-content: space-between;
`;

export const Span = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: ${(p) => p.theme.lineHeights.heading};
  color: ${(p) => p.theme.colors.dark};
`;

export const BtnBuy = styled.button`
  padding: 14px 11px;
  margin: 0;
  border: none;
  border-radius: 3px;
  font-weight: ${(p) => p.theme.fontWeights.interMiddle};
  font-size: ${(p) => p.theme.fontSizes.m};
  line-height: ${(p) => p.theme.lineHeights.heading};
  color: ${(p) => p.theme.colors.white};
  background: ${(p) => p.theme.colors.accentText};
  font-family: ${(p) => p.theme.fonts.body};
  font-style: normal;
`;
