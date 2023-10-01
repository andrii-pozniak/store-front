import React from "react";

import {
  Container,
  ContainerIcon,
  Facebook,
  Google,
  ContainerForm,
  Items,
  StyleLink,
  ButtonStyle,
  Form,
} from "./LoginForm.Style";
import { useDispatch } from "react-redux";
import { userLogIn } from "../../redux/auth/operations";
import { LinkRoute } from "../LinkRoute/LinkRoute";
import { Header, Input } from "../RegisterForm/RegisterForm.Style";

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;

    dispatch(
      userLogIn({
        
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <>
      <LinkRoute children={"Авторизація"} />
      <Container>
        <ContainerForm>
          <Header>Авторизація</Header>
          <Items>Увійти в особистий кабінет через соц мережу</Items>
          <ContainerIcon>
            <Facebook />
            <Google />
          </ContainerIcon>
          <Items>або</Items>
          <Form onSubmit={handleSubmit}>
            <Input type="email" name="email" placeholder="E-Mail" id="input-email"/>
            <Input type="password" name="password" placeholder="ПАРОЛЬ"  id="input-password"/>
            <ButtonStyle type="submit">увійти</ButtonStyle>
          </Form>
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
    </>
  );
};
