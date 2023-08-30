import styled from "styled-components";
import { BiMap } from "react-icons/bi";

export const Container = styled.div`
@media screen and (max-width: 991px){
    padding: 25px 20px;
  }

`;
export const HeaderUp = styled.div`
  display: flex;
  align-items: center;
  
  background: #333333;
  @media screen and (max-width: 991px){
    display: none;
    
  }
`;
export const PhoneNumber = styled.p`
  margin-right: 57px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1, 25;
  color: #ffffff;
`;
export const Page = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1, 25;
  color: #ffffff;
`;
export const Map = styled.a`
  display: flex;
  margin-left: auto;
  color: #ffffff;
`;
export const MapIcon = styled(BiMap)`
  font-size: 20px;
`;
export const BurgerMenu = styled.div`
  width: 30px;
  height: 20px;
  display: flex;
  position: fixed;
  top: 10px;
    left: 10px;
  flex-direction: column;
  justify-content: space-around;
  z-index: 5;
  /* overflow: hidden; */

  span,
  &::before,
  &::after {
    content: "";
    height: 3px;
    width: 100%;
    position: absolute;    
    background: ${(p) => p.theme.colors.dark};
    border-radius: 4px;
    transition: all 0.3s ease 0s;
    z-index: 15;
  }

&::before {
top: 0;
};
  &::after {
    bottom: 0;
  };
  &.active {
    span {
        display: none;
    }
    &::before {
        position: absolute;
        top: calc(50%);
        transform: rotate(45deg)translate( 0, -50%)
    };
    &::after {
        position: absolute;
        bottom: calc(50%);
        transform: rotate(-45deg)translate( 0, 50%);
    }
   }
  @media screen and (min-width: 992px) {
    display: none;
  }
 
`;
