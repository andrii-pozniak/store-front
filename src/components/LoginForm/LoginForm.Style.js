import styled from "styled-components";
import GoogleIcon from "@mui/icons-material/Google";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { Button } from "@mui/material";

export const StyleLink = styled(Link)`
  display: inline-block;
  border: none;
  padding: 10px 22px;
  margin: auto 0;
  margin-top: 15px;
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
  margin: 30px auto;
  display: flex;
  justify-content: space-around;
`;
export const ContainerIcon = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;
export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 33.3%;
`;
export const Facebook = styled(FaFacebookF)`
  width: 35px;
  height: 40px;
  padding: 5px 2px 0 8px;
  margin-right: 10px;
  border-radius: 3px;
  background: #b4b4b4;
  fill: #fff;
`;
export const Google = styled(GoogleIcon)`
  &.css-i4bv87-MuiSvgIcon-root {
    width: 45px;
    height: 45px;
    background: #b4b4b4;
    border-radius: 3px;
    fill: white;
  }
`;
export const Items = styled.p`
  text-align: center;
  margin: 0;
  margin-top: 20px;
  font-family: ${(p) => p.theme.fonts.body};
  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.middle};
  font-size: ${(p) => p.theme.fontSizes.s};
  line-height: ${(p) => p.theme.lineHeights.body};
  /* text-transform: uppercase; */
`;
export const ButtonStyle = styled(Button)`
  &.css-1e6y48t-MuiButtonBase-root-MuiButton-root {
    display: flex;
    padding: 10px 22px;
    margin: 15px auto 0 auto;
    border-radius: 0px;
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
  }
`;
