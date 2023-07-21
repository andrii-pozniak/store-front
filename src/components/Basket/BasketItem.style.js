import styled from "styled-components";
import { Typography, CardMedia } from "@mui/material";

export const TypographyStyle = styled(Typography)`
  display: flex;
  flex-direction: column;
 && { font-family: ${(p) => p.theme.fonts.body};
  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.middle};
  font-size: ${(p) => p.theme.fontSizes.xs};
  line-height: ${(p) => p.theme.lineHeights.heading};}
`;

export const ImageStyle = styled(CardMedia)`
 && { width: 30%;}
`;
