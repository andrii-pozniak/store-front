import React from "react";
import { Header } from "../../pages/PaymentDelivery/PaymentDelivery.style";
import {
  Container,
  Items,
  LinkStyle,
  ContainerItem,
  GridLink,
  PageStyle,
  ContainerInput,
  StyleDivider,
  Page,
  FormStyle,
  Label,
  Input,
  Textarea,
  ButtonSubmit,
  HeaderStyle,
} from "./Contacts.Style";
import { LinkRoute } from "../../components/LinkRoute/LinkRoute";
import { Grid } from "@mui/material";
import SmartphoneOutlinedIcon from "@mui/icons-material/SmartphoneOutlined";
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';


export const Contacts = () => {
  return (
    <>
      <LinkRoute children={"Контакти"} />
      <Container>
        <Header>КОНТАКТИ</Header>
        <Grid container style={{justifyContent: 'center', marginTop: '20px'}}>
          <Grid item>
            <Items>ЗВ'ЯЗАТИСЯ З НАМИ:</Items>
            <ContainerItem>
              <Grid item>
                <SmartphoneOutlinedIcon />
              </Grid>
              <Grid item>
                <PageStyle>ТЕЛЕФОНИ:</PageStyle>
              </Grid>
              <GridLink item style={{ flexDirection: "column" }}>
                <LinkStyle>+38 068 954 8954</LinkStyle>
                <LinkStyle>+38 093 107 4140</LinkStyle>
              </GridLink>
            </ContainerItem>         
            <ContainerItem>
              <Grid item>
                <QueryBuilderIcon />
              </Grid>
              <Grid item>
                <PageStyle>ГРАФІК РОБОТИ:</PageStyle>
              </Grid>
              <GridLink item style={{ flexDirection: "column" }}>
                <Page>ПН-СБ: 09:00 - 18:00;</Page>
                <Page>НД: 10:00 - 17:00</Page>
              </GridLink>
            </ContainerItem>
            <StyleDivider/>
            <Items>МАГАЗИН:</Items>
            <ContainerItem>
              <Grid item>
                <FmdGoodOutlinedIcon />
              </Grid>
              <Grid item>
                <PageStyle>КИЇВ:</PageStyle>
              </Grid>
              <GridLink item style={{ flexDirection: "column" }}>               
                <LinkStyle>+38 093 107 4140</LinkStyle>
              </GridLink>
            </ContainerItem>            
            
            <ContainerItem>
              <Grid item>
                <QueryBuilderIcon />
              </Grid>
              <Grid item>
                <PageStyle>ГРАФІК РОБОТИ:</PageStyle>
              </Grid>
              <GridLink item style={{ flexDirection: "column" }}>
                <Page>ПН-СБ: 09:00 - 18:00;</Page>
                <Page>НД: 10:00 - 17:00</Page>
              </GridLink>
            </ContainerItem>
            <StyleDivider/>
          </Grid>
          <ContainerInput item>
            <HeaderStyle>НАПИСАТИ ЛИСТ КЕРІВНИЦТВУ</HeaderStyle>
            <FormStyle >
                <Label htmlFor="name">ІМ'Я</Label>
                <Input/>
                <Label htmlFor="email">E-MAIL</Label>
                <Input/>
                <Label htmlFor="email">ВАШЕ ПИТАННЯ АБО ПОВІДОМЛЕННЯ</Label>
                <Textarea/>
            </FormStyle>
            <ButtonSubmit type="submit">Відправити повідомлення</ButtonSubmit>
          </ContainerInput>
        </Grid>
      </Container>
    </>
  );
};
