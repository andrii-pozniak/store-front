import React from "react";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { Grid } from "@mui/material";
import { NativeSelects } from "../../components/Category/NativeSelects";
import { HeaderItem, ContainerCard, SpanFood } from "./Category.style";

export const ProductCategoryCards = ({ data, categoryName }) => {
  return (
    <>
      <Grid item xs={1} md={9} width={"100%"}>
        {data && (
          <HeaderItem>
            {categoryName} <SpanFood>{data.length} товари</SpanFood>
          </HeaderItem>
        )}
        <NativeSelects />
        <ContainerCard>
          {data?.map((item) => (
            <ProductCard
              key={item._id}
              name={item.name}
              imageURL={item.imageURL}
              additionalCategory={item.additionalCategory}
              codeProduct={item.codeProduct}
              priceProduct={item.priceProduct}
              status={item.status}
            />
          ))}
        </ContainerCard>
      </Grid>
    </>
  );
};