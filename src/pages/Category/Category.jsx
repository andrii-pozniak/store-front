import React, { useState, useEffect, useContext } from "react";
import { fetchCategoriesName } from "../../Utils/api/getCard";
import { useParams } from "react-router-dom";
import { Grid } from "@mui/material";
import { FindParameters } from "../../components/Category/FindPrice";
import { ProductCategoryCards } from "../../components/Category/ProductCategory";
import { YouSaw } from "../../components/Category/YouSaw";
import { Text, HeaderText } from "../../components/Category/Category.style";
import {
  ContainerPage,
  Item,
  Container, 
} from "./Category.style";
import { LinkRoute } from "../../components/LinkRoute/LinkRoute";
import { DataContext } from "../../components/Context/DataContext";
import { GetCurrentProducts } from "../../components/CardsProduct/GetCurrentProducts";
import { CustomPagination } from "../../components/CustomPagination/OnePagination";

const Category = () => {
  const [dataCategory, setDataCategory] = useState(null);
  const [, setStatus] = useState("pending");
  const [value, setValue] = useState([0, 100000]);
  const { categoryName } = useParams();
  const { data } = useContext(DataContext);
  const [currentPage, setCurrentPage] = useState({ Новинки: 1 });
  const [NewProducts, setNewProducts] = useState([]);
  const productsPerPage = 1;

  const paginate = (pageNumber, category) => {
    setCurrentPage((prevCurrentPage) => ({
      ...prevCurrentPage,
      [category]: pageNumber,
    }));
  };

  useEffect(() => {
    if (data) {
      const NewProducts = data?.filter((item) =>
        item.additionalCategory.includes("Новинки")
      );
      setNewProducts(NewProducts);
    }
  }, [data]);

  useEffect(() => {
    const fetchData = async (categoryName) => {
      try {
        setStatus("pending");
        const dataCategory = await fetchCategoriesName(categoryName);

        setStatus("fulfilled");
        setDataCategory(dataCategory);
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
    <LinkRoute children={categoryName}/>     
      <ContainerPage>
        <Grid container columnSpacing={3.5}>
          <Grid item xs={12} md={3}>
            <FindParameters
              handleChangeValue={handleChangeValue}
              value={value}
            />
            {NewProducts && NewProducts.length > 0 ? (
              <>
                <Container>
                  <Item>Новинки</Item>
                  <CustomPagination
                    style={{ marginRight: "auto" }}
                    productsPerPage={productsPerPage}
                    totalProducts={NewProducts.length}
                    paginate={paginate}
                    category="Новинки"
                  />
                </Container>

                <GetCurrentProducts
                  products={NewProducts}
                  category={"Новинки"}
                  pageNumber={currentPage.Новинки}
                  productsPerPage={productsPerPage}
                />
              </>
            ) : (
              <p>Нет товаров для отображения</p>
            )}
          </Grid>
          <Grid item xs={12} md={9}>
            <ProductCategoryCards data={dataCategory} category={categoryName} />
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
                  повсякденного життя. Вона була заснована кілька років тому і
                  за цей час встигла завоювати довіру та повагу багатьох
                  клієнтів. Компанія пропонує широкий асортимент товарів високої
                  якості за доступними цінами. Кожен товар проходить ретельний
                  контроль якості, щоб гарантувати надійність та безпеку його
                  використання. Однією з головних цінностей компанії є високий
                  рівень обслуговування клієнтів. Команда Плюс Мінус 7 прагне
                  надати своїм клієнтам максимально комфортне та зручне
                  обслуговування. Співробітники компанії готові допомогти в
                  виборі товару, відповісти на будь-які питання та вирішити
                  будь-які проблеми, пов'язані з покупкою та використанням
                  товарів. Завдяки такому підходу, компанія Плюс Мінус 7 змогла
                  завоювати лояльність та вірність багатьох клієнтів, які
                  рекомендують її своїм друзям та знайомим.
                </Text>
              </div>
            </div>
          </Grid>
        </Grid>
        <YouSaw />
      </ContainerPage>
    </>
  );
};

export default Category;
