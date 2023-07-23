import React from "react";
import { Slider } from "@mui/material";

import {
  StyledValueDisplay,
  ContainerNumber,
  ButtonOk,
} from "./Category.style";

export const FindParameters = ({ value, handleChangeValue }) => {
  return (
    <>
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
    </>
  );
};
