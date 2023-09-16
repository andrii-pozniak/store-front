import { Container } from "@mui/material";
import React from "react";
// import { Form } from "react-router-dom";
import { ContainerForm, Form, Input, Header } from "./RegisterForm.Style";

export const RegisterForm = () => {
  return (
    <Container>
      <Header>РЕЄСТРАЦІЯ</Header>
      <ContainerForm>
      <p>Якщо Ви вже зареєстровані, перейдіть на сторінку авторизації.</p>
      <Form>
        <Input
          type="text"
          name="lastName"
          placeholder="Прізвище"
          id="input-lastName"
        />
        <Input
          type="text"
          name="lastName"
          placeholder="ІМ'Я"
          id="input-lastName"
        />
        <Input
          type="text"
          name="lastName"
          placeholder="E-MAIL"
          id="input-lastName"
        />
        <Input
          type="text"
          name="lastName"
          placeholder="ТЕЛЕФОН"
          id="input-lastName"
        />
        <Input
          type="text"
          name="lastName"
          placeholder="ПАРОЛЬ"
          id="input-lastName"
        />
      </Form>
      </ContainerForm>
     
    </Container>
  );
};
