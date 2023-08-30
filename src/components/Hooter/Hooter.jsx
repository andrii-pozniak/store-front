import React from "react";
import { Grid } from "@mui/material";
import { ColumnOne } from "./columnOne";
import { ColumnSecond } from "./columnSecond";
import { ColumnThird } from "./colunmThird";
import { ColumnFour } from "./colunmFour";
import { StyleContainer, StyleGrid, StyleGridNone, StyleDivider } from "./Hooter.Style";

export const Hooter = ({ uniqueCategories }) => {
  return (
    <>
      <StyleContainer >
        <Grid container spacing={0}  >
          <StyleGrid item xs={true} sx={{ padding: "0px" }}>
            <ColumnOne />
          </StyleGrid>
          <StyleDivider
            orientation="vertical"
            flexItem
            color="#FFFFFF"
            height="100%"
          />
          
            <StyleGridNone item xs={true}  sx={{ paddingTop: "72px" }}>
           
              <ColumnSecond uniqueCategories={uniqueCategories} />
             
            </StyleGridNone>
            
          <StyleDivider orientation="vertical" flexItem color="#FFFFFF" />
          {/*  */}
          <StyleGridNone item xs={true} >
          
            <ColumnThird />
           
          </StyleGridNone>
          
          <StyleDivider orientation="vertical" flexItem color="#FFFFFF" />
         
          <StyleGrid item xs={true}  sx={{ padding: "0px" }}>
            <ColumnFour />
          </StyleGrid>
          <StyleDivider
            orientation="vertical"
            flexItem
            color="#FFFFFF"
            height="100%"
          />
        </Grid>
      </StyleContainer>
    </>
  );
};
