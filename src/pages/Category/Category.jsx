import React, { useState, useEffect } from "react";
import { fetchCategoriesName } from "../../Utils/api/getCard";
import { useParams } from "react-router-dom";
import { Grid } from "@mui/material";
import { FindParameters } from "../../components/Category/FindPrice";
import { ProductCategoryCards } from "../../components/Category/ProductCategory"

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
        <FindParameters handleChangeValue={handleChangeValue} value={value}/>
        
        <ProductCategoryCards data={data} categoryName={categoryName} />
        
      </Grid>
    </>
  );
};

export default Category;
