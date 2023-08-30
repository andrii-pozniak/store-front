import styled from "styled-components";
import { Grid, Divider } from "@mui/material";


export const HeaderStyle = styled.h2`
margin-bottom: 20px;
font-family: ${(p) => p.theme.fonts.body};
  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.interMiddle};
  font-size: ${(p) => p.theme.fontSizes.ms};
  line-height: ${(p) => p.theme.lineHeights.heading};
  text-transform: uppercase;
`;
export const Container = styled.div`
max-width: 1170px;
justify-content: center;
padding: 20px 50px 50px 50px;
margin-left: auto;
margin-right: auto;
`;
export const Items = styled.p`
text-align: center;
font-family: ${(p) => p.theme.fonts.body};
  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.middle};
  font-size: ${(p) => p.theme.fontSizes.s};
  line-height: ${(p) => p.theme.lineHeights.heading};
  text-transform: uppercase;
`;
export const LinkStyle = styled.a`
font-family: ${(p) => p.theme.fonts.body};
  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.middle};
  font-size: ${(p) => p.theme.fontSizes.xs};
  line-height: ${(p) => p.theme.lineHeights.heading};
  text-transform: uppercase;
`;
export const ContainerItem = styled.div`
display: flex;
gap: 15px;
margin-bottom: 10px;

`;
export const PageStyle = styled.p`
margin: 0;
width: 80px;
font-family: ${(p) => p.theme.fonts.body};
  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.interBold};
  font-size: ${(p) => p.theme.fontSizes.xs};
  line-height: ${(p) => p.theme.lineHeights.heading};
  text-transform: uppercase;
`;
export const Page = styled.p`
margin: 0;

font-family: ${(p) => p.theme.fonts.body};
  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.middle};
  font-size: ${(p) => p.theme.fontSizes.xs};
  line-height: ${(p) => p.theme.lineHeights.heading};
  text-transform: uppercase;
`;
export const GridLink = styled(Grid)`
display: flex;
gap: 5px;
flex-direction: column;
`;
export const ContainerInput = styled.div`
/* display: flex; */
margin-left: 8%;
`;
export const StyleDivider =styled(Divider)`
margin-bottom: 10px;
`;
export const FormStyle = styled.form`
display: flex;
flex-direction: column;
/* gap: 15px; */
margin-bottom: 10px;
`;
export const Label = styled.label`
margin-bottom: 8px;
font-family: ${(p) => p.theme.fonts.body};
  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.middle};
  font-size: ${(p) => p.theme.fontSizes.xs};
  line-height: ${(p) => p.theme.lineHeights.heading};
  text-transform: uppercase;
`;
export const Input = styled.input`
padding: 15px 12px;
margin-bottom: 8px;
border-color: #b8b4b4;
    border-style: solid;
    border-width: 1px;
`;
export const Textarea = styled.textarea`
height: 102px;
padding: 15px 12px;
margin-bottom: 8px;
border-color: #b8b4b4;
    border-style: solid;
    border-width: 1px;
`;
export const ButtonSubmit = styled.button`
padding: 10px 22px;
color: #fff;
    background-color: #000;
    cursor: pointer;
    opacity: 0.65;
    text-decoration: none;
`;