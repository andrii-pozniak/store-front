import styled from 'styled-components';
import {BiMap}  from "react-icons/bi";

export const HeaderUp = styled.div`
display: flex;
align-items: center;
padding: 0 58px;

background: #333333;
`;

export const PhoneNumber = styled.p`
margin-right: 57px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 1,25;
color: #FFFFFF;
`;
export const Page = styled.p`
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 1,25;
color: #FFFFFF;
`;
export const Map = styled.a`
display: flex;
margin-left: auto;
color: #FFFFFF;
`;
export const MapIcon = styled(BiMap)`
font-size: 20px;
`;