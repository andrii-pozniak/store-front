import React from "react";
import { Container, StyleLink } from "./Auth.Style";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import LoginIcon from "@mui/icons-material/Login";


export const Auth = ({ toggleModalRegister }) => {

  return (
    <Container>
      <StyleLink
        to={"register"}
        onClick={() => {
          toggleModalRegister()
        }}
      
      >
        <PersonAddIcon style={{ marginRight: "8px" }} />
        Register
      </StyleLink>
      <StyleLink
        to={"login"}
        onClick={() => {
          toggleModalRegister()
        }}
       
      >
        <LoginIcon style={{ marginRight: "8px" }} />
        Login
      </StyleLink>
     
    </Container>
  );
};
