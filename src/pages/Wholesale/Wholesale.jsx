import React from "react";
import { LinkRoute } from "../../components/LinkRoute/LinkRoute";
import { Header } from "../../pages/PaymentDelivery/PaymentDelivery.style";
import { Container } from "../Contacts/Contacts.Style";

export const Wholesale = () => {

    return (
        <>
        <LinkRoute children={"Опт"} />
        <Container>
        <Header>ОПТ</Header>
            </Container>
        </>
       
    )
}