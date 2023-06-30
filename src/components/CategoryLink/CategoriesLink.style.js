import styled from "styled-components";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";

export const CategoryLink = styled(Link)`
  width: 270px;
  font-family: ${(p) => p.theme.fonts.body};
  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.middle};
  font-size: ${(p) => p.theme.fontSizes.m};
  line-height: ${(p) => p.theme.lineHeights.heading};
  color: ${(p) => p.theme.colors.dark};
  text-decoration: none;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ContainerGrid = styled(Grid)`
  padding-top: 45px;
  padding-left: 60px;
  padding-bottom: 45px;
`;
export const ItemGrid = styled(Grid)`
  align-items: center;
`;
