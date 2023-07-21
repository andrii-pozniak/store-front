import styled from "styled-components";
import { ListItem } from "@mui/material";

export const ListItemTotal = styled(ListItem)`
  && {
    font-family: ${(p) => p.theme.fonts.body};
    font-style: normal;
    font-weight: ${(p) => p.theme.fontWeights.interMiddle};
    font-size: ${(p) => p.theme.fontSizes.m};
    line-height: ${(p) => p.theme.lineHeights.heading};
  }
`;
