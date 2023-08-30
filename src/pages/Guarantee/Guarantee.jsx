import React from "react";
import {
  Header,
  PageStyle,
} from "../../pages/PaymentDelivery/PaymentDelivery.style";
import { Container } from "./Guarantee.Style";
import { Table } from "../../components/Table/Table";
import { LinkRoute } from "../../components/LinkRoute/LinkRoute";

export const Guarantee = () => {
  return (
    <>
      <LinkRoute children={"Гарантія і повернення"} />
      <Container>
        <Header>ГАРАНТІЯ І ПОВЕРНЕННЯ</Header>
        <PageStyle>
          Щоб повернути, обміняти, відправити на гарантійний чи не гарантійний
          ремонт придбаний товар, перегляньте, будь ласка, таблицю нижче та
          ознайомтесь з нашими умовами. Натиснувши на примітки до кожного
          пункту, вам відкриються інструкції зі здійснення такого виду
          відправлень та вся необхідна інформація.
        </PageStyle>
        <Table />
      </Container>
    </>
  );
};
