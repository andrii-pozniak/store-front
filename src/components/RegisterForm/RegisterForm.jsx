import { Container } from "@mui/material";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import React from "react";
import { LinkRoute } from "../LinkRoute/LinkRoute";
import { ContainerForm, Form, Input, Header } from "./RegisterForm.Style";
import { Link } from "react-router-dom";
import { ButtonStyle } from "../LoginForm/LoginForm.Style";

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        password: form.elements.password.value,
        email: form.elements.email.value,
        phone: form.elements.phone.value,
      })
    );
    form.reset();
  };

  return (
    <>
      <LinkRoute children={"реєстрація"} />
      <Container>
        <Header>РЕЄСТРАЦІЯ</Header>
        <ContainerForm>
          <p>
            Якщо Ви вже зареєстровані, перейдіть на сторінку{" "}
            <Link to={"/login"}>авторизації</Link>.
          </p>
          <Form onSubmit={handleSubmit} autoComplete="off">
            <Input type="text" name="name" placeholder="ІМ'Я" id="input-name" />
            <Input
              type="email"
              name="email"
              placeholder="E-MAIL"
              id="input-email"
            />
            <Input
              type="phone"
              name="phone"
              placeholder="ТЕЛЕФОН"
              id="input-phone"
            />
            <Input
              type="password"
              name="password"
              placeholder="ПАРОЛЬ"
              id="input-password"
              autocomplete="on"
            />
            <ButtonStyle style={{ margin: "10px" }} type="submit">
              Register
            </ButtonStyle>
          </Form>
        </ContainerForm>
      </Container>
    </>
  );
};
