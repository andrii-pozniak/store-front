import React from "react";
import { CategoryLink, Container, ContainerGrid, ItemGrid } from "./CategoriesLink.style";
import { Grid } from "@mui/material";
import { ReactComponent as ArrowSvg } from "../Header/assest/HoterImg/arrow.svg";

export const CategoriesLink = ({ uniqueCategories }) => {
  return (
    <>
      <Grid container spacing={2} margin={0} width={"100%"}>
        <ContainerGrid container spacing={2} margin={0}>
          <Container>
            {uniqueCategories.map((category, index) => (
              <ItemGrid container spacing={2} margin={0} key={index}>
                <CategoryLink to={`/category/categoryName=${category}`}>{category}</CategoryLink>
                <ArrowSvg />
              </ItemGrid>
            ))}
          </Container>
          
        </ContainerGrid>
      </Grid>
    </>
  );
};
