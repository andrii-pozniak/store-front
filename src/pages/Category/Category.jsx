import React, { useState, useEffect } from "react";
import { fetchCategoriesName } from "../../Utils/api/getCard";
import { useParams } from "react-router-dom";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { Grid, Slider } from "@mui/material";
import {
  StyledValueDisplay,
  ContainerNumber,
  ButtonOk,
  HeaderItem,
  ContainerCard,
  SpanFood,
} from "./Category.style";
import { NativeSelects } from "../../components/Category/NativeSelects";

const Category = () => {
  const [data, setData] = useState(null);
  const [, setStatus] = useState("pending");
  const [value, setValue] = useState([0, 100000]);
  const { categoryName } = useParams();
  console.log("categoryName", categoryName);

  useEffect(() => {
    const fetchData = async (categoryName) => {
      try {
        setStatus("pending");
        const data = await fetchCategoriesName(categoryName);

        setStatus("fulfilled");
        setData(data);
        console.log("first", data);
      } catch {
        setStatus("rejected");
      }
    };

    fetchData(categoryName);
  }, [categoryName]);

  const handleChangeValue = (event, newValue) => {
    setValue([newValue[0], newValue[1]]);
  };
  return (
    <>
      <Grid
        containers
        spacing={2}
        display={"flex"}
        margin={0}        
        width={"100%"}
        paddingTop={"35px"}
        gap={"29px"}
      >
        <Grid
          item
          xs={3}
          padding={"38px 16px"}
          border={" 1px solid #d6d6d6"}
          borderRadius={"3px"}
        >
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
        </Grid>
        <Grid item xs={9} width={"100%"}>
          {data && (
            <HeaderItem>
              {categoryName} <SpanFood>{data.length} товари</SpanFood>
            </HeaderItem>
          )}
          <NativeSelects/>
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
      </Grid>
    </>
  );
};

export default Category;
