import styled from "styled-components";
import { Typography } from "@mui/material";

export const StyledValueDisplay = styled(Typography)`
  && {
    width: 83px;
    padding: 12px;
    justify-content: center;
    border: 1px solid #d6d6d6;
    border-radius: 3px;
    text-align: center;
    font-family: ${(p) => p.theme.fonts.body};
    font-style: normal;
    font-weight: ${(p) => p.theme.fontWeights.middle};
    font-size: ${(p) => p.theme.fontSizes.ms};
    line-height: ${(p) => p.theme.lineHeights.heading};
    color: ${(p) => p.theme.colors.dark};
  }
`;
export const ContainerNumber = styled.div`
  display: flex;
  gap: 18px;
  margin-bottom: 19px;
`;

export const ButtonOk = styled.button`
  padding: 11px 18px;
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
export const HeaderItem = styled.div`
  display: flex;
  align-items: start;
  gap: 8px;
  margin-bottom: 28px;
  font-family: ${(p) => p.theme.fonts.body};
  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.interBold};
  font-size: ${(p) => p.theme.fontSizes.ml};
  line-height: ${(p) => p.theme.lineHeights.heading};
  color: ${(p) => p.theme.colors.dark};
  text-transform: uppercase;
`;
export const ContainerCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin-bottom: 40px;
`;
export const SpanFood = styled.span`
  font-family: ${(p) => p.theme.fonts.body};
  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.interMiddle};
  font-size: ${(p) => p.theme.fontSizes.m};
  line-height: ${(p) => p.theme.lineHeights.heading};
  color: ${(p) => p.theme.colors.backgroundAlert};
`;
export const Text = styled.p`
font-family: ${(p) => p.theme.fonts.body};
  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.middle};
  font-size: ${(p) => p.theme.fontSizes.s};
  line-height: ${(p) => p.theme.lineHeights.heading};
  color: ${(p) => p.theme.colors.dark}; 
`;

export const HeaderText = styled.div`
  display: flex;
  align-items: start;
  gap: 8px;
  margin-top: 106px;
  margin-bottom: 9px;
  font-family: ${(p) => p.theme.fonts.body};
  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.interBold};
  font-size: ${(p) => p.theme.fontSizes.ml};
  line-height: ${(p) => p.theme.lineHeights.heading};
  color: ${(p) => p.theme.colors.dark};
`;
