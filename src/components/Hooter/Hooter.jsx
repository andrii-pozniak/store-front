import React from "react";
import { Grid, Divider } from "@mui/material";
import { HeaderLogo } from "../Header/HeaderLogo/HeaderLogo";
import { StyleTypography, StyleContainer } from "./Hooter.Style";

export const Hooter = () => {
  return (
    <div style={{ marginTop: "24px" }}>
<StyleContainer disableGutters maxWidth={false}>
      <Grid container spacing={3}>
        <Grid item xs={true}>
          <HeaderLogo secondWordColor="white" colorNumber="white" />
          <StyleTypography>
            Высокотехнологичная продукции с современным дизайном
          </StyleTypography>
        </Grid>
        <Divider
          orientation="vertical"
          flexItem
          color="#FFFFFF"
          height="100%"
        />
        <Grid item xs={true} sx={{ padding: "0px" }}>ыавпар</Grid>
        <Divider
          orientation="vertical"
          flexItem
          color="#FFFFFF"
          height="100%"
        />
        <Grid item xs={true}>фВЫАВПА</Grid>
        <Divider orientation="vertical" flexItem color="#FFFFFF" />
      </Grid>
    </StyleContainer>
    </div>
    
  );
};
