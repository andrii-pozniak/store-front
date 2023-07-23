import React, { useState, useEffect } from "react";
import { fetchCategoriesName } from "../../Utils/api/getCard";
import { useParams } from "react-router-dom";
import { Grid } from "@mui/material";
import { FindParameters } from "../../components/Category/FindPrice";
import { ProductCategoryCards } from "../../components/Category/ProductCategory";
import { YouSaw } from "../../components/Category/YouSaw";
import { Text, HeaderText } from "../../components/Category/Category.style";
import { ContainerPage } from "./Category.style";

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
    <ContainerPage>
      <Grid container columnSpacing={3.5}>
        <Grid
          item
          xs={12}
          md={3}
          padding={"38px 16px"}
          border={" 1px solid #d6d6d6"}
          borderRadius={"3px"}
        >
          <FindParameters handleChangeValue={handleChangeValue} value={value} />
        </Grid>
        <Grid item xs={12} md={9}>
          <ProductCategoryCards data={data} categoryName={categoryName} />
          <HeaderText>Опис категорії</HeaderText>
          <div style={{ display: "flex", marginBottom: 177 }}>
            <div
              style={{
                flex: 1,
                marginRight: 20,
                columnCount: 2,
                columnGap: "77px",
              }}
            >
              <Text>
                Компанія Плюс Мінус 7 є одним з лідерів на ринку продажу
                батарейок, ліхтариків, електроніки та інших товарів для
                повсякденного життя. Вона була заснована кілька років тому і за
                цей час встигла завоювати довіру та повагу багатьох клієнтів.
                Компанія пропонує широкий асортимент товарів високої якості за
                доступними цінами. Кожен товар проходить ретельний контроль
                якості, щоб гарантувати надійність та безпеку його використання.
                Однією з головних цінностей компанії є високий рівень
                обслуговування клієнтів. Команда Плюс Мінус 7 прагне надати
                своїм клієнтам максимально комфортне та зручне обслуговування.
                Співробітники компанії готові допомогти в виборі товару,
                відповісти на будь-які питання та вирішити будь-які проблеми,
                пов'язані з покупкою та використанням товарів. Завдяки такому
                підходу, компанія Плюс Мінус 7 змогла завоювати лояльність та
                вірність багатьох клієнтів, які рекомендують її своїм друзям та
                знайомим.
              </Text>
            </div>
          </div>
        </Grid>
      </Grid>
      <YouSaw />
    </ContainerPage>
  );
};

export default Category;
