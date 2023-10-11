import React from "react";
import { Container, StyleLink, ButtonStyle } from "./Auth.Style";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/auth/operations";

export const Auth = ({ toggleModalRegister }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const dispatch = useDispatch();
  return (
    <Container>
      <StyleLink
        to={"register"}
        onClick={() => {
          toggleModalRegister();
        }}
      >
        <PersonAddIcon style={{ marginRight: "8px" }} />
        Register
      </StyleLink>
      <StyleLink
        to={"login"}
        onClick={() => {
          toggleModalRegister();
        }}
      >
        <LoginIcon style={{ marginRight: "8px" }} />
        Login
      </StyleLink>
      {isLoggedIn && (
        <div style={{display: "flex", padding: "10px"} }>
          <LogoutIcon />
          <ButtonStyle type="button" onClick={() => {dispatch(logOut()); toggleModalRegister()}}>
            LogOut
          </ButtonStyle>
        </div>
      )}
    </Container>
  );
};
