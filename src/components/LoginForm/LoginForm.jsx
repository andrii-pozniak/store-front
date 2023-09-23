import React from "react";
// import { Form } from "react-router-dom";
import {
  Container,
  ContainerIcon,
  Facebook,
  Google,
  ContainerForm,
  Items,
  StyleLink,
  ButtonStyle,
} from "./LoginForm.Style";
import { Header, Input } from "../RegisterForm/RegisterForm.Style";

export const LoginForm = () => {
  return (
    <Container>
      <ContainerForm>
        <Header>Авторизація</Header>
        <Items>Увійти в особистий кабінет через соц мережу</Items>
        <ContainerIcon>
          <Facebook />
          <Google />
        </ContainerIcon>
        <Items>або</Items>
        <form>
          <Input type="text" name="E-MAIL" placeholder="E-Mail" />
          <Input type="text" name="ПАРОЛЬ" placeholder="ПАРОЛЬ" />
          <ButtonStyle type="submit">увійти</ButtonStyle>
        </form>
      </ContainerForm>
      <ContainerForm>
        <Header>РЕЄСТРАЦІЯ</Header>
        <div style={{ textAlign: "center" }}>
          <Items>
            Після створення облікового запису Ви зможете купляти швидше,
            відстежувати статус Ваших замовлень і зберігати історію замовлень.
          </Items>
          <StyleLink to={"/register"}>РЕЄСТРАЦІЯ</StyleLink>
        </div>
      </ContainerForm>
    </Container>
  );
};
