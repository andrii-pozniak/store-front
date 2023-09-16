import React, { useState } from "react";
import {
  HeaderUp,
  Page,
  PhoneNumber,
  Map,
  MapIcon,
  BurgerMenu,
  Container,
  Triangle
} from "./HeaderInfo.styled";
import PersonIcon from '@mui/icons-material/Person';
import { ModalSample } from "../../Modal/Modal";
import { Link } from "react-router-dom";
import { Auth } from "../../Auth/Auth";
export const HeaderInfo = ({ openMenu, handleMenu }) => {
  const[menuOpen, SetMenuOpen] = useState(false);
  const[showModal, SetShowModal ] = useState(false)

  const toggleModalRegister = () => {
    SetShowModal(!showModal)
  }
  
  const toggleMenu =() => {
    SetMenuOpen(!menuOpen)
  }
  // const onChangeMenu = () => {
  //   toggleMenu()
  // }
  return (
    <Container>
      <HeaderUp>
        <PhoneNumber> +380 677 209 299</PhoneNumber>
        <Page>пн-пт 9:00-18:00 сб-нд 9:00-17:00</Page>
        <Map href="https://www.google.com/maps/place">
          <MapIcon />
        </Map>
        <button type="button">UK</button>
        <Triangle  style={{ margin: "0 42px 0 4px"}}/>
        <PersonIcon style={{fill: "white", marginRight: "6px"}}/>
        <Page>Особистий кабінет</Page>
        <Triangle  style={{ marginLeft: "6px"}}
        onClick={toggleModalRegister}
        className={menuOpen ? "active" : ""}
        />
      </HeaderUp>
      <BurgerMenu
        onClick={handleMenu}
        className={openMenu ? "active" : ""}
      >
        <span></span>
      </BurgerMenu>
      { showModal && (
          <ModalSample toggleModal={toggleModalRegister}>
            <Auth toggleModalRegister={toggleModalRegister}/>
            </ModalSample>
        )}
    </Container>
  );
};
