import styled from "styled-components";
import { Select } from "@mui/material";

export const ContainerSort = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 18px;
`;
export const Item = styled.p` 
  font-family: ${(p) => p.theme.fonts.body};
  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.interMiddle};
  font-size: ${(p) => p.theme.fontSizes.s};
  line-height: ${(p) => p.theme.lineHeights.heading};
  color: ${(p) => p.theme.colors.dark};
`;
export const SelectStyle = styled(Select)`
  && {
    .css-ffg8md-MuiNativeSelect-select-MuiInputBase-input-MuiOutlinedInput-input {
      padding: 8px;
      font-family: ${(p) => p.theme.fonts.body};
      font-style: normal;
      font-weight: ${(p) => p.theme.fontWeights.middle};
      font-size: ${(p) => p.theme.fontSizes.xs};
      line-height: ${(p) => p.theme.lineHeights.heading};
      color: ${(p) => p.theme.colors.accent};
    }
  }
`;
