import React from "react";
import { Slider } from "@mui/material";

import {
  StyledValueDisplay,
  ContainerNumber,
  ButtonOk,
} from "./Category.style";

export const FindParameters = ({ value, handleChangeValue }) => {
  return (
    <div style={{padding: "42px 16px 38px 16px",
    border: " 1px solid #d6d6d6",
    borderRadius: "3px"}}>
      <ContainerNumber>
        <StyledValueDisplay>{value[0]}</StyledValueDisplay>
        <StyledValueDisplay>{value[1]}</StyledValueDisplay>
        <ButtonOk>Ok</ButtonOk>
      </ContainerNumber>

      <Slider
        value={value}
        onChange={handleChangeValue}
        valueLabelDisplay="auto"
        aria-labelledby="discrete-slider-restrict"
        max={100000}
        sx={{ color: "#95CD41" }}
      />
    </div>
  );
};
