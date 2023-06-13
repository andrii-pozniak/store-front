import styled from "styled-components";
// import { styled } from "@mui/system";
// import { Container, Typography } from '@mui/material';

export const StyleContainer = styled.div`
background: ${(p) => p.theme.colors.dark};
width: 100%;
/* padding: 0;
padding-left: 60px;
padding-top: 76px; */
`;

export const StyleTypography = styled.p`
width: 225px;
margin-top: 14px;
font-family: "Montserrat";
  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.normal};
  font-size: ${(p) => p.theme.fontSizes.xs};
  line-height: ${(p) => p.theme.lineHeights.heading};
  color: ${(p) => p.theme.colors.white};

 
`;