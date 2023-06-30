import styled from "styled-components";
import { Grid } from "@mui/material";

export const StyleGrid = styled(Grid)`
  && {
    padding: 72px 25px 20px !important;
  }
`;

export const StyleContainer = styled.div`
  background: ${(p) => p.theme.colors.dark};
  width: 100%;
`;

export const StyleTypography = styled.p`
  width: 225px;
  margin: 0;
  margin-top: 14px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.normal};
  font-size: ${(p) => p.theme.fontSizes.xs};
  line-height: ${(p) => p.theme.lineHeights.heading};
  color: ${(p) => p.theme.colors.white};
`;
export const Headline = styled.p`
  margin: 0;
  margin-bottom: 8px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.interBold};
  font-size: ${(p) => p.theme.fontSizes.ms};
  line-height: ${(p) => p.theme.lineHeights.heading};
  color: ${(p) => p.theme.colors.white};

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
`;
export const ItemHooter = styled.a`
  margin-top: 8px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.middle};
  font-size: ${(p) => p.theme.fontSizes.xs};
  line-height: ${(p) => p.theme.lineHeights.heading};
  color: ${(p) => p.theme.colors.white};
`;
export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
`;
export const ItemPage = styled.p`
  margin: 0;
  margin-top: 8px;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.middle};
  font-size: ${(p) => p.theme.fontSizes.xs};
  line-height: ${(p) => p.theme.lineHeights.heading};
  color: ${(p) => p.theme.colors.white};
`;
export const HeaderPage = styled.p`
  margin: 0;
  margin-top: 24px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.interMiddle};
  font-size: ${(p) => p.theme.fontSizes.mn};
  line-height: ${(p) => p.theme.lineHeights.heading};
  color: ${(p) => p.theme.colors.accent};
`;
export const ContainerCard = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 53px;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ContainerSocial = styled.div`
  display: flex;
  margin-top: 16px;
  margin-bottom: 55px;
`;
export const Circle = styled.div`
  width: 36px;
  height: 36px;
  margin-right: 15px;
  border-radius: 50%;
  background: ${(p) => p.theme.colors.grayBackground};
`;
export const ItemHeader = styled.p`
  margin: 0;
  margin-top: 62px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.interMiddle};
  font-size: ${(p) => p.theme.fontSizes.s};
  line-height: ${(p) => p.theme.lineHeights.heading};
  color: ${(p) => p.theme.colors.white};
`;
