import styled from "styled-components";
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import { Link } from "react-router-dom";

export const StyleLink = styled(Link)`
    display: inline-block;
  border: none;
  padding: 10px 22px;
  margin: auto 0;
  background: ${(p) => p.theme.colors.dark};
  text-decoration: none;
  font-family: ${(p) => p.theme.fonts.body};
  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.interMiddle};
  font-size: ${(p) => p.theme.fontSizes.xs};
  line-height: ${(p) => p.theme.lineHeights.heading};
  text-transform: uppercase;
  text-align: center;
  color: ${(p) => p.theme.colors.white};
  cursor: pointer;
  @media screen and (max-width: 991px) {
    color: ${(p) => p.theme.colors.accent};
    font-size: ${(p) => p.theme.fontSizes.ml};
    z-index: 5;
    margin-bottom: 15px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;
export const Container = styled.div`
 width: 80%;
  /* margin-left: auto;
  margin-right: auto; */
  margin: 30px auto ;
  display: flex;
justify-content: space-around;
`;
export const ContainerIcon = styled.div`
display: flex;
justify-content: center;
`;
export const ContainerForm = styled.div`
display: flex;
flex-direction: column;
max-width: 33.3%;
`;
export const Facebook = styled(FacebookIcon)`
&.css-i4bv87-MuiSvgIcon-root{
    width: 45px;
    height: 45px;
    margin-right: 10px;
background: #b4b4b4;}
`;
export const Google = styled(GoogleIcon)`
&.css-i4bv87-MuiSvgIcon-root{
    width: 45px;
    height: 45px;
background: #b4b4b4;
border-radius: 3px;
fill: white;}
`;
export const Items = styled.p`
  text-align: center;
  font-family: ${(p) => p.theme.fonts.body};
  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.middle};
  font-size: ${(p) => p.theme.fontSizes.s};
  line-height: ${(p) => p.theme.lineHeights.body};
  /* text-transform: uppercase; */
`;