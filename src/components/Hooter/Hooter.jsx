import React from "react";
import { Grid, Divider } from "@mui/material";
import { ColumnOne } from "./columnOne";
import { ColumnSecond } from "./columnSecond";
import { ColumnThird } from "./colunmThird";
import { ColumnFour } from "./colunmFour";
import { StyleContainer, StyleGrid } from "./Hooter.Style";

export const Hooter = ({ uniqueCategories }) => {
  // console.log("data", uniqueCategories)
  return (
    <>
     <StyleContainer disableGutters maxWidth={false}>
        <Grid container spacing={4}margin={0} width={"100%"}>
          <StyleGrid item xs={true} >
            <ColumnOne />
          </StyleGrid>

          <Divider
            orientation="vertical"
            flexItem
            color="#FFFFFF"
            height="100%"
          />
          <StyleGrid item xs={true} sx={{ paddingTop: "72px" }}>
            <ColumnSecond uniqueCategories={uniqueCategories} />
          </StyleGrid>
          <Divider
            orientation="vertical"
            flexItem
            color="#FFFFFF"
            height="100%"
          />
          <StyleGrid item xs={true}>
            <ColumnThird />
          </StyleGrid>
          <Divider orientation="vertical" flexItem color="#FFFFFF" />
          <StyleGrid item xs={true} sx={{ padding: "0px" }}>
            <ColumnFour />
          </StyleGrid>
          <Divider
            orientation="vertical"
            flexItem
            color="#FFFFFF"
            height="100%"
          />
        </Grid>
      </StyleContainer>
   {/* <CategoriesLink uniqueCategories={uniqueCategories}/> */}
    </>
     
  );
};
