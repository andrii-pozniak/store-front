import React from "react";
// import { Form } from "react-router-dom";
import { Container, ContainerIcon, Facebook, Google, ContainerForm, Items, StyleLink } from "./LoginForm.Style";
import { Header, Input } from "../RegisterForm/RegisterForm.Style";
import { Button } from "@mui/material";
// import FacebookIcon from '@mui/icons-material/Facebook';
// import GoogleIcon from '@mui/icons-material/Google';

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
<form>
<Input type="text" name="E-MAIL" placeholder="E-Mail" />
          <Input type="text" name="ПАРОЛЬ" placeholder="ПАРОЛЬ" />
          <Button></Button>
</form>
          
        </ContainerForm>
        <ContainerForm>
          <Header>РЕЄСТРАЦІЯ</Header>
          <div style={{textAlign: 'center'}}>
          <Items>
            Після створення облікового запису Ви зможете купляти швидше,
            відстежувати статус Ваших замовлень і зберігати історію замовлень.
          </Items>
          <StyleLink to={"/register"}>
          РЕЄСТРАЦІЯ
          </StyleLink>
          </div>
          
        </ContainerForm>
    </Container>
  );
};
